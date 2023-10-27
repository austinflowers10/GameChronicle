import { BiChevronUp, BiChevronDown, BiX } from "react-icons/bi";
import { putUserGame } from "../../managers/userGameManager";
import { useState, useEffect } from "react"
import { RemoveReplayableModal } from "./RemoveReplayableModal";

export const GamesRowByReplayability = ({userGames, rating, updateReplayabilityOnGame}) => {
    const [sortedUserGames, setSortedUserGames] = useState()

    useEffect(() => {
        if (userGames) {
            setSortedUserGames(
                userGames
                .filter(userGame => userGame.replayabilityRating == rating)
                .sort((a, b) => a.gameSingle.name.localeCompare(b.gameSingle.name))
            )
        }
    },[userGames])
    
    if (!sortedUserGames) {
        return null
    }

    return <div className="game-row-container">
    {
        sortedUserGames.length 
        ? <>
            <h2 className="game-row-header">{rating}{rating === 10 ? " (Highest)": ""}</h2>
            <div className="game-row-items">
            {
                sortedUserGames.map(game => {
                    return <div key={game.id} 
                            className="game-card"
                            // style={{backgroundImage : `url(${game.gameSingle.background_image})`}}
                            >
                        <img className="game-image"src={game.gameSingle.background_image}/>
                        <p className="game-title">{game.gameSingle.name}</p>
                        <div className="game-card-options">
                            {/* Up Arrow */}
                            {
                                rating < 10
                                ? <BiChevronUp onClick={() => {
                                    // console.log(timeCategory.id - 1)
                                    updateReplayabilityOnGame(game, rating + 1)

                                    const gameToUpdate = {...game}
                                    gameToUpdate.replayabilityRating = rating + 1
                                    putUserGame(gameToUpdate)
                                }}/>
                                : ""
                            }
                            {/* Down Arrow */}
                            {
                                rating > 1
                                ? <BiChevronDown onClick={() => {
                                    // console.log(timeCategory.id + 1)
                                    updateReplayabilityOnGame(game, rating - 1)

                                    const gameToUpdate = {...game}
                                    gameToUpdate.replayabilityRating = rating - 1
                                    putUserGame(gameToUpdate)
                                }}/>
                                : ""
                            }
                            {/* X Button with Modal */}
                            <RemoveReplayableModal game={game} updateReplayabilityOnGame={updateReplayabilityOnGame}/>
                        </div>
                    </div>
                })
            }
            </div>
        </>
        : <>
            <h2 className="game-row-header">{rating}{rating === 10 ? " (Highest)": ""}</h2>
            <p>No games with this rating</p>
        </>
    }
    </div>
}