import { Button, Modal } from "reactstrap";
import { putUserGame } from "../../managers/userGameManager";
import "./Collections.css"
import { BiDotsHorizontalRounded, BiX } from "react-icons/bi";
import { useState } from "react";

export const HistoryGameDetailsModal = ({game, updateCategoryOnGame }) => {
    const [modal, setModal] = useState(false)
    
    const toggle = () => setModal(!modal);

    return <>
        <BiDotsHorizontalRounded onClick={toggle}/>
        <Modal
            contentClassName="game-details-modal"
            isOpen={modal} 
            toggle={toggle} 
            fullscreen
        >
            <div className="game-details-background" style={{backgroundImage : `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 1)), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 1)), url(${game.gameSingle.background_image})`}}>
                <h1>{game.gameSingle.name}<span><BiX onClick={toggle}/></span></h1>
                <div className="game-details-description" dangerouslySetInnerHTML={{ __html: game.gameSingle.description }}/>
                <div className="game-details-footer">
                    <div className="game-details-row">
                        <div className="game-details-lists">
                            <h3>Developers:</h3>
                            <ul>
                            {
                                game.gameSingle.developers.map(d => <li>{d.name}</li>)
                            }
                            </ul>
                        </div>
                        <div className="game-details-lists">
                            <h3>Platforms:</h3>
                            <ul>
                            {
                                game.gameSingle.platforms.map(pp => <li>{pp.platform.name}</li>)
                            }
                            </ul>
                        </div>
                        <div className="game-details-lists">
                            <h3>Genres:</h3>
                            <ul>
                            {
                                game.gameSingle.genres.map(g => <li>{g.name}</li>)
                            }         
                            </ul>
                        </div>
                                       
                    </div>
                    <div className="game-details-options">
                       <Button onClick={() => {
                            updateCategoryOnGame(game, 4)

                            const gameToUpdate = {...game}
                            gameToUpdate.timeCategoryId = 4
                            putUserGame(gameToUpdate)

                            toggle()

                       }}>Add Game to Playlist</Button>
                    </div>                    
                </div>
            </div>
        </Modal>
    </>
}