import { BiCheck } from "react-icons/bi";
import { HistoryGameDetailsModal } from "./HistoryGameDetailsModal";
import { useState, useEffect } from "react"
import { Spinner } from "reactstrap";

export const History = ({ userGames, setUserGames }) => {
    const [sortedUserGames, setSortedUserGames] = useState()
    
    useEffect(() => {
        if (userGames) {
            setSortedUserGames(
                userGames
                .filter(userGame => userGame.timeCategoryId === 5)
                .sort((a, b) => new Date(b.dateFinished) - new Date(a.dateFinished))
            )
        }
    },[userGames])
    
    const updateCategoryOnGame = (game, timeCategoryId) => {
        const gameToUpdate = {...game}
        gameToUpdate.timeCategoryId = timeCategoryId

        const userGamesCopy = [...userGames]
        userGamesCopy[userGames.indexOf(game)] = gameToUpdate
        setUserGames(userGamesCopy)
    }

    if (!userGames) {
        return <Spinner style={{margin: 'auto'}}/>
    }

    if (!sortedUserGames) {
        return null
    }

    return <div className="page-content-container">
        <div className="page-header-row">
            <h1 className="page-header-text">History</h1>
        </div>
        <div className="history-games-container">
        {
            sortedUserGames.map(game => {
                return <div key={game.id} 
                        className="game-card"
                        style={{backgroundImage : `url(${game.gameSingle.background_image})`}}
                        >
                    <div className="game-card-options-row">
                        <p className="history-game-title">{game.gameSingle.name}</p>
                        {
                            game.dateFinished
                            ? <p className="history-game-card-date"><BiCheck className="history-game-card-check"/>{new Date(game.dateFinished).toLocaleDateString('en-US')}</p>
                            : ""
                        }
                        <div className="other-game-card-options">
                            <HistoryGameDetailsModal
                                userGames={userGames}
                                setUserGames={setUserGames}
                                game={game} 
                                updateCategoryOnGame={updateCategoryOnGame} 
                            />
                        </div>
                    </div>
                </div>
            })
        }
        </div>
    </div>
}