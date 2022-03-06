import React from "react";
import { connect } from "react-redux";
import "./players.css"
import { Button } from "@mui/material";

import { Avatar } from "@mui/material";

const Players = ({players, addStarter, addSubtitute}) => (
    <div className="playerBox">
        <h2>Players</h2>
        <section className="players">
            
            {
                players.map(player => (
                    <div className="player" key={player.id}>
                        <div>
                            <Avatar
                                sx={{width:200, height:200}}
                                variant="rounded"
                                className="playerPic"
                                src={player.pic}
                                alt={player.name}
                            />
                        </div>
                        <div>
                            <h3>{player.name}</h3>
                        </div>
                        <div className="buttonsContainer">
                            <div> 
                                <Button
                                size='small'
                                color='success'
                                variant= 'contained'
                                className="buttonMui"
                                onClick={() => addStarter(player)}
                                >
                                    Starting
                                </Button>
                            </div>
                            <div>
                                <Button
                                    size='small'
                                    color='error'
                                    variant= 'contained'
                                    className="buttonMui"
                                    onClick={() => addSubtitute(player)}
                                >
                                    Subtitute
                                </Button>
                            </div>
                           
                            
                        </div>
                    </div>
                ))
            }
            
        </section>
    </div>

        
    
)

const mapStateToProps = state => ({
     players: state.players
})
const mapDispatchToProps = dispatch => ({
    addStarter(player) {
        dispatch({
            type: 'players/addStarter',
            player,
        })
    },
    addSubtitute(player) {
        dispatch({
            type:'players/addSubtitute',
            player
        })
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (Players)