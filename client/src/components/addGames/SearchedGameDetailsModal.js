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
        <BiPlus onClick={() => {
            getGameById(game.id)
                .then(setFetchedGame)
                .then(() => {toggle()})
        }}
        />
        <Modal 
            contentClassName="searched-game-details-modal"
            isOpen={modal} 
            toggle={toggle} 
            fullscreen
        >
            {
                fetchedGame && gameInUserGames !== undefined
                ? <>
                <div className="searched-game-details-background" style={{backgroundImage : `linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 1)), linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 1)), url(${fetchedGame.background_image})`}}>
                    <h1>{fetchedGame.name}<span><BiX onClick={toggle}/></span></h1>
                    <div className="searched-game-details-description" dangerouslySetInnerHTML={{ __html: fetchedGame.description }}/>
                    <div className="searched-game-details-footer">
                        <div className="searched-game-details-row">
                            <div className="searched-game-details-lists">
                                <h3>Developers:</h3>
                                <ul>
                                {
                                    fetchedGame.developers.map(d => <li>{d.name}</li>)
                                }
                                </ul>
                            </div>
                            <div className="searched-game-details-lists">
                                <h3>Platforms:</h3>
                                <ul>
                                {
                                    fetchedGame.platforms.map(pp => <li>{pp.platform.name}</li>)
                                }
                                </ul>
                            </div>
                            <div className="searched-game-details-lists">
                                <h3>Genres:</h3>
                                <ul>
                                {
                                    fetchedGame.genres.map(g => <li>{g.name}</li>)
                                }         
                                </ul>
                            </div>
                                        
                        </div>
                        <div className="searched-game-details-options">
                            {
                                !gameInUserGames
                                ? <Button onClick={handlePostUserGame}>
                                    Add Game
                                </Button>
                                : <p>You already have this game</p>
                            }
                        </div>                    
                    </div>
                </div>
                </>
                : <Spinner/>
            }
        </Modal>
    </>
}