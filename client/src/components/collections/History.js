import { HistoryGameDetailsModal } from "./HistoryGameDetailsModal";
import { useState, useEffect } from "react"

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

    if (!sortedUserGames) {
        return null
    }

    return <div className="container">
        <h1 className="home-header">History</h1>
        <div className="history-games-container">
        {
            sortedUserGames.map(game => {
                return <div key={game.id} 
                        className="game-card"
                        // style={{backgroundImage : `url(${game.gameSingle.background_image})`}}
                        >
                    <img className="game-image"src={game.gameSingle.background_image}/>
                    <p className="game-title">{game.gameSingle.name}</p>
                    <div className="game-card-options">
                        {
                            game.dateFinished
                            ? <p>Finished: {new Date(game.dateFinished).toLocaleDateString('en-US')}</p>
                            : ""
                        }
                        <HistoryGameDetailsModal
                            game={game} 
                            updateCategoryOnGame={updateCategoryOnGame} 
                        />
                    </div>
                </div>
            })
        }
        </div>
    </div>
}