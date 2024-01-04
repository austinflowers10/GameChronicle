import { Modal, Button, Spinner } from "reactstrap"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { BiPlus, BiX } from "react-icons/bi";
import { getGameById } from "../../managers/gameManager";
import "./AddGames.css"
import { postUserGame } from "../../managers/userGameManager";


export const SearchedGameDetailsModal = ({ game, loggedInUser, userGames, setUserGames }) => {
    const [modal, setModal] = useState(false)
    const [fetchedGame, setFetchedGame] = useState(null)
    const [gameInUserGames, setGameInUserGames] = useState()

    useEffect(() => {
        if (fetchedGame) {
            setGameInUserGames(!!userGames.find(ug => ug.gameNumber === fetchedGame.id))
        }
    }, [fetchedGame])
    
    const toggle = () => setModal(!modal);

    const handlePostUserGame = (event) => {
        const userGameToPost = {
            userProfileId: loggedInUser.id,
            gameNumber: fetchedGame.id,
            lastKnownPrice: null,
            dateStarted: null,
            dateFinished: null,
            replayabilityRating: null,
            favoriteRanking: null, 
            timeCategoryId: 4,
            isCompleted: false
        }

        postUserGame(userGameToPost).then((res) => {
            const newUserGames = [...userGames, res]
            setUserGames(newUserGames)
        })

        toggle()
    }

    return <>
        <BiPlus className="game-card-option" onClick={() => {
            getGameById(game.id)
                .then(setFetchedGame)
                .then(() => {toggle()})
        }}
        />
        <Modal 
            contentClassName="game-details-modal"
            isOpen={modal} 
            toggle={toggle} 
            fullscreen
        >
            {
                fetchedGame && gameInUserGames !== undefined
                ? <>
                <div className="game-details-background" style={{backgroundColor: "rgb(40, 0, 71)", backgroundImage : `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 1)), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 1)), url(${fetchedGame.background_image})`}}>
                <div className="modal-header-row game-details">
                    <h1 className="modal-header-text">{fetchedGame.name}</h1>
                    <BiX className="modal-x-icon game-details-x" onClick={toggle}/>
                </div>
                
                <div className="game-details-info">
                    <div className="game-details-description" dangerouslySetInnerHTML={{ __html: fetchedGame.description }}/>
                    <div className="game-details-footer">
                        <div className="game-details-row">
                            <div className="game-details-lists">
                                <h3>Developers:</h3>
                                <ul>
                                {
                                    fetchedGame.developers.map(d => <li>{d.name}</li>)
                                }
                                </ul>
                            </div>
                            <div className="game-details-lists">
                                <h3>Platforms:</h3>
                                <ul>
                                {
                                    fetchedGame.platforms.map(pp => <li>{pp.platform.name}</li>)
                                }
                                </ul>
                            </div>
                            <div className="game-details-lists">
                                <h3>Genres:</h3>
                                <ul>
                                {
                                    fetchedGame.genres.map(g => <li>{g.name}</li>)
                                }         
                                </ul>
                            </div>
                                        
                        </div>
                        <div className="game-details-options">
                            {
                                !gameInUserGames
                                ? <Button className="game-details-option"onClick={handlePostUserGame}>
                                    Add Game
                                </Button>
                                : <p className="search-alt-text">You already have this game</p>
                            }
                        </div>                    
                    </div>
                </div>
                </div>
                </>
                : <Spinner  style={{margin: 'auto'}}/>
            }
        </Modal>
    </>
}