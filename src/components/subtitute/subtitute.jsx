import React from "react";
import { connect } from "react-redux";
import './subtitute.css'
import { Button } from "@mui/material";
import { Avatar } from "@mui/material";


const Subtitute = ({subtitute, removeSubtitute}) => (
    <div className="subtituteBox">
        <h2>Subtitute Players</h2>
        <section className="subtitutes"> 
        <div className="bench">
            {
                subtitute.map(s => (
                    <article className="subitute" key={s.id}>
                        <div>
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
                            color='error'
                            onClick={() => removeSubtitute(s)}
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
    subtitute: state.subtitute
})
const mapDispatchToProps = dispatch => ({
    removeSubtitute(player) {
        dispatch({
            type: 'players/removeSubtitute',
            player
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (Subtitute)