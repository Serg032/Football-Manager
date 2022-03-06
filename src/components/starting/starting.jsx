import React from "react";
import { connect } from "react-redux";
import './starting.css'
import { Avatar, Button } from "@mui/material";


const Starting = ({starting, removePlayer}) => (
    <div className="startersBox">
        <h2>Starting Players</h2>
        <section className="starters">
                <div className="field">
                    {
                        starting.map(s => (
                            <article className="starter" key={s.id}>
                                <div className="main">
                                    <Avatar
                                        sx={{width:200, height:200}}
                                        variant="rounded" 
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
    </div>
    
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