import React from "react";
import { connect } from "react-redux";
import './starting.css'
import { Button } from "@mui/material";


const Starting = ({starting, removePlayer}) => (
    <section className="players">
        <h2>Starting Players</h2>
        <div className="field">
            {
                starting.map(s => (
                    <article className="starter" key={s.id}>
                        <div className="main">
                            <img 
                                className="playerPic"
                                src={s.pic}
                                alt={s.name}
                                />
                            
                        </div>
                        <h3>{s.name}</h3>
                        <Button
                            variant="contained"
                            color='secondary'
                            onClick={() => removePlayer(s)}
                        >
                            X
                        </Button> 
                    </article>
                ))
            }
        </div>
    </section>
)

const mapStateToProps = state => ({
    starting: state.starting
})
const mapDispatchToProps = dispatch => ({
    removePlayer(player) {
        dispatch({
            type: 'players/removeStarter',
            player
        })
    }
    
})

export default connect(mapStateToProps, mapDispatchToProps) (Starting)