import { Modal, ModalBody, ModalFooter, ModalHeader, Button, NavItem } from "reactstrap"
import { useState } from "react"
import { BiDotsHorizontalRounded, BiX } from "react-icons/bi";
import { MoveToHistoryModal } from "./MoveToHistoryModal";
import { ReplayableModal } from "./ReplayableModal";
import { putUserGame } from "../../managers/userGameManager";
import { useNavigate } from "react-router-dom";
import { DeleteConfirmModal } from "./DeleteConfirmModal";

export const HomeGameDetailsModal = ({game, userGames, setUserGames }) => {
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
                        {
                            game.favoriteRanking === null
                            ? <Button onClick={() => {
                                const favorites = userGames.filter(ug => ug.favoriteRanking)

                                const gameWithHighestFavoriteRank = favorites.reduce((prev, current) => {
                                    return prev.favoriteRanking > current.favoriteRanking ? prev : current;
                                  }, { favoriteRanking: 0 });

                                const gameToUpdate = {...game}
                                if (gameWithHighestFavoriteRank.favoriteRanking < 11) {
                                    gameToUpdate.favoriteRanking = 11
                                } else {
                                    gameToUpdate.favoriteRanking = gameWithHighestFavoriteRank.favoriteRanking + 1
                                }
                                const userGamesCopy = [...userGames]
                                userGamesCopy[userGames.indexOf(game)] = gameToUpdate
                                setUserGames(userGamesCopy)

                                putUserGame(gameToUpdate)

                                toggle()
                            
                                }}>
                                    Favorite
                                </Button>
                            : <Button onClick={() => navigate("favorites")}>Go to Favorites</Button>
                        }
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