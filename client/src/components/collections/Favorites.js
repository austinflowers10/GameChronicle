import "./Collections.css"
import { Spinner } from "reactstrap";
import { GamesRowByReplayability } from "./GamesRowByReplayability";
import { useState, useEffect } from "react";
import "./Collections.css"
import { FavoriteGameDetailsModal } from "./FavoriteGameDetails";
import { RemoveFavoriteModal } from "./RemoveFavoriteModal";

export const Favorites = ({ userGames, setUserGames }) => {

    const [favorites, setFavorites] = useState(null)

    useEffect(() => {
        if (userGames) {
            setFavorites(
                userGames
                    .filter(ug => ug.favoriteRanking)
                    .sort((a, b) => a.favoriteRanking - b.favoriteRanking)
            )
        }
    },[userGames]
    )

    // const replayableRatingsArr = [10,9,8,7,6,5,4,3,2,1]

    // const updateReplayabilityOnGame = (game, replayabilityRating) => {
    //     const gameToUpdate = {...game}
    //     gameToUpdate.replayabilityRating = replayabilityRating

    //     const userGamesCopy = [...userGames]
    //     userGamesCopy[userGames.indexOf(game)] = gameToUpdate
    //     setUserGames(userGamesCopy)
    // }

    if (!userGames || !favorites) {
        return <Spinner />
    }

    return <div className="container">
            <h1 className="home-header">Favorites</h1>
        <div className="favorites-container">
        {
        favorites.length
          ? favorites.map(game => {
            return <div key={game.id} 
                    className="game-card"
                    // style={{backgroundImage : `url(${game.gameSingle.background_image})`}}
                    >
                <img className="game-image"src={game.gameSingle.background_image}/>
                <p className="game-title">{game.gameSingle.name}</p>
                <div className="game-card-options">
                        <FavoriteGameDetailsModal
                            game={game} 
                            // updateCategoryOnGame={updateCategoryOnGame} 
                        />
                    {/* X Button with Modal */}
                    <RemoveFavoriteModal game={game} userGames={userGames} setUserGames={setUserGames}/>
                </div>
            </div>
            })
            : <p>no favorites</p>
        }
        </div>
    </div>
}