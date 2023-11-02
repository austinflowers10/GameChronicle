import "./Collections.css"
import { Spinner } from "reactstrap";
import { GamesRowByReplayability } from "./GamesRowByReplayability";

export const Replayables = ({ userGames, setUserGames }) => {

    const replayableRatingsArr = [10,9,8,7,6,5,4,3,2,1]

    const updateReplayabilityOnGame = (game, replayabilityRating) => {
        const gameToUpdate = {...game}
        gameToUpdate.replayabilityRating = replayabilityRating

        const userGamesCopy = [...userGames]
        userGamesCopy[userGames.indexOf(game)] = gameToUpdate
        setUserGames(userGamesCopy)
    }

    if (!userGames) {
        return <Spinner style={{margin: 'auto'}}/>
    }

    return <div className="page-content-container">
        <div className="page-header-row">
            <h1 className="page-header-text">Replayables</h1>
        </div>
        <div className="games-rows-container">
        {
           replayableRatingsArr.map(rating => {
                return <GamesRowByReplayability
                    key={rating} 
                    rating={rating}
                    userGames={userGames} 
                    updateReplayabilityOnGame={updateReplayabilityOnGame}
                />
            })
        }
        </div>
    </div>
}