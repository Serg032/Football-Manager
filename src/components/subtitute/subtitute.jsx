import React from "react";
import { connect } from "react-redux";
import './subtitute.css'
import { Button } from "@mui/material";


const Subtitute = ({subtitute, removeSubtitute}) => (
    <section className="players">
        <h2>Subtitute Players</h2>
        <div className="field">
            {
                subtitute.map(s => (
                    <article className="player" key={s.id}>
                        <div>
                            <img
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