import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from "reactstrap"
import { useState } from "react"
import { BiDotsHorizontalRounded, BiX } from "react-icons/bi";
import { MoveToHistoryModal } from "./MoveToHistoryModal";
import { ReplayableModal } from "./ReplayableModal";
import { putUserGame } from "../../managers/userGameManager";
import { useNavigate } from "react-router-dom";
import { DeleteConfirmModal } from "./DeleteConfirmModal";

export const HomeGameDetailsModal = ({game, userGames, setUserGames, updateCategoryOnGame }) => {
    const [modal, setModal] = useState(false)
    const navigate = useNavigate()
    
    const toggle = () => setModal(!modal);

    return <>
        <BiDotsHorizontalRounded onClick={toggle}/>
        <Modal 
            contentClassName="home-game-details-modal"
            isOpen={modal} 
            toggle={toggle} 
            fullscreen
        >
            <div className="home-game-details-background" style={{backgroundImage : `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 1)), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 1)), url(${game.gameSingle.background_image})`}}>
                <h1>{game.gameSingle.name}<span><BiX onClick={toggle}/></span></h1>
                <div className="home-game-details-description" dangerouslySetInnerHTML={{ __html: game.gameSingle.description }}/>
                <div className="home-game-details-footer">
                    <div className="home-game-details-row">
                        <div className="home-game-details-lists">
                            <h3>Developers:</h3>
                            <ul>
                            {
                                game.gameSingle.developers.map(d => <li>{d.name}</li>)
                            }
                            </ul>
                        </div>
                        <div className="home-game-details-lists">
                            <h3>Platforms:</h3>
                            <ul>
                            {
                                game.gameSingle.platforms.map(pp => <li>{pp.platform.name}</li>)
                            }
                            </ul>
                        </div>
                        <div className="home-game-details-lists">
                            <h3>Genres:</h3>
                            <ul>
                            {
                                game.gameSingle.genres.map(g => <li>{g.name}</li>)
                            }         
                            </ul>
                        </div>
                                       
                    </div>
                    <div className="home-game-details-options">
                        <ReplayableModal
                            putUserGame={putUserGame}
                            game={game}
                            userGames={userGames}
                            setUserGames={setUserGames} 
                        />
                        
                        <MoveToHistoryModal 
                            putUserGame={putUserGame}
                            game={game}
                            userGames={userGames}
                            setUserGames={setUserGames}
                        />
                        <Button onClick={() => {
                            const gameToUpdate = {...game}
                            if (gameToUpdate.favoriteRanking === null) {
                                gameToUpdate.favoriteRanking = 0
                                putUserGame(gameToUpdate).then(() => navigate("/favorites"))
                            } else {
                                navigate("/favorites")
                            }
                        }}>
                            Favorite
                        </Button>
                        {/* <Button onClick={() => {navigate(`/reviews/${game.id}`)}}>
                            Go To Reviews
                        </Button> */}
                        <DeleteConfirmModal 
                            game={game} 
                            userGames={userGames}
                            setUserGames={setUserGames}
                        />
                    </div>                    
                </div>
            </div>
        </Modal>
    </>
}