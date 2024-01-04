import { BiChevronUp, BiChevronDown, BiX } from "react-icons/bi";
import { putUserGame } from "../../managers/userGameManager";
import { useState, useEffect } from "react"
import { RemoveReplayableModal } from "./RemoveReplayableModal";
import imageOff from "../../images/image-off.svg"


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
                            style={
                                game.gameSingle.background_image
                                ? {backgroundImage: `url(${game.gameSingle.background_image})`}
                                : {
                                    backgroundImage: `url(${imageOff})`,
                                    backgroundSize: "100px"
                                }
                            }
                            >
                        <div className="game-card-options-row">
                        <p className="game-title other">{game.gameSingle.name}</p>
                        <div className="game-card-options">
                            {/* Up Arrow */}
                            {
                                rating < 10
                                ? <BiChevronUp className="game-card-option" onClick={() => {
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
                                ? <BiChevronDown className="game-card-option" onClick={() => {
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
                    </div>
                })
            }
            </div>
        </>
        : <>
            <h2 className="game-row-header">{rating}{rating === 10 ? " (Highest)": ""}</h2>
            <p className="game-row-alt-text">No games with this rating</p>
        </>
    }
    </div>
}