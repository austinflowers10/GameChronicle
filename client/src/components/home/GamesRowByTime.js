import { BiChevronUp, BiChevronDown } from "react-icons/bi";
import { putUserGame } from "../../managers/userGameManager";
import { useState, useEffect } from "react"
import { MoveToHistoryModal } from "./MoveToHistoryModal";
import { HomeGameDetailsModal } from "./HomeGameDetailsModal";

export const GamesRowByTime = ({userGames, setUserGames, timeCategory, updateCategoryOnGame}) => {
    const [sortedUserGames, setSortedUserGames] = useState()

    useEffect(() => {
        if (userGames) {
            setSortedUserGames(
                userGames
                .filter(userGame => userGame.timeCategoryId == timeCategory.id)
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
            <h2 className="game-row-header">{timeCategory.name}</h2>
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
                            {/* History */}
                            <MoveToHistoryModal 
                                updateCategoryOnGame={updateCategoryOnGame}
                                game={game}
                                buttonIsIcon={true}
                            />    
                            {/* Up Arrow */}
                            {
                                timeCategory.id > 1
                                ? <BiChevronUp onClick={() => {
                                    // console.log(timeCategory.id - 1)
                                    updateCategoryOnGame(game, timeCategory.id - 1)

                                    const gameToUpdate = {...game}
                                    gameToUpdate.timeCategoryId = timeCategory.id - 1
                                    putUserGame(gameToUpdate)
                                }}/>
                                : ""
                            }
                            {/* Down Arrow */}
                            {
                                timeCategory.id < 4
                                ? <BiChevronDown onClick={() => {
                                    // console.log(timeCategory.id + 1)
                                    updateCategoryOnGame(game, timeCategory.id + 1)

                                    const gameToUpdate = {...game}
                                    gameToUpdate.timeCategoryId = timeCategory.id + 1
                                    putUserGame(gameToUpdate)
                                }}/>
                                : ""
                            }
                            {/* Details */}
                            <HomeGameDetailsModal 
                                updateCategoryOnGame={updateCategoryOnGame}
                                game={game}
                                buttonIsIcon={false}
                                userGames={userGames}
                                setUserGames={setUserGames} 
                            />
                        </div>
                    </div>
                })
            }
            </div>
        </>
        : ""
    }
    </div>
}