import "./Collections.css"
import { Spinner } from "reactstrap";
import { GamesRowByReplayability } from "./GamesRowByReplayability";

export const Favorites = ({ userGames, setUserGames }) => {

    // const replayableRatingsArr = [10,9,8,7,6,5,4,3,2,1]

    // const updateReplayabilityOnGame = (game, replayabilityRating) => {
    //     const gameToUpdate = {...game}
    //     gameToUpdate.replayabilityRating = replayabilityRating

    //     const userGamesCopy = [...userGames]
    //     userGamesCopy[userGames.indexOf(game)] = gameToUpdate
    //     setUserGames(userGamesCopy)
    // }

    if (!userGames) {
        return <Spinner />
    }

    return <div className="container">
            <h1 className="home-header">Favorites</h1>
        <div className="favorites-container">
        {
            userGames.filter(ug => ug.favoriteRanking).length
          ? userGames.filter(ug => ug.favoriteRanking).map(game => {
                // return <GamesRowByReplayability
                //     key={rating} 
                //     rating={rating}
                //     userGames={userGames} 
                //     updateReplayabilityOnGame={updateReplayabilityOnGame}
                // />
                return <p>{game.gameSingle.name}</p>
            })
            : <p>no favorites</p>
        }
        </div>
    </div>
}