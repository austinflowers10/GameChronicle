import "./Collections.css"
import { Button, Spinner } from "reactstrap";
import { useState, useEffect } from "react";
import "./Collections.css"
import { FavoriteGameDetailsModal } from "./FavoriteGameDetails";
import { RemoveFavoriteModal } from "./RemoveFavoriteModal";
import { SwitchFavoriteModal } from "./SwitchFavoriteModal";
import { DemoteFavoriteModal } from "./DemoteFavoriteModal";
import { useNavigate } from "react-router-dom";
import { AddTopTenModal } from "./AddTopTenModal";
import { AddNewFavoriteModal } from "./AddNewFavorite";


export const Favorites = ({ userGames, setUserGames }) => {
    const navigate = useNavigate()
    const [favorites, setFavorites] = useState(null)

    useEffect(() => {
        if (userGames) {
            setFavorites(userGames.filter(ug => ug.favoriteRanking))
        }
    },[userGames]
    )

    if (!userGames || !favorites) {
        return <Spinner />
    }

    return <div className="container">
        {
            favorites.length
            ? <>
            <div className="favorites-header-row">
            <h1 className="home-header">Top Ten Favorites</h1>
            {
                favorites.filter((f) => f.favoriteRanking > 10).length && favorites.filter((f) => f.favoriteRanking <= 10 && f.favoriteRanking >= 1).length
                ? <SwitchFavoriteModal 
                    userGames={userGames}
                    setUserGames={setUserGames}
                    favorites={favorites}
                />
                : ''
            }
            </div>            
            <div className="top-ten-container">
            {
                favorites.filter((f) => f.favoriteRanking <= 10 && f.favoriteRanking >= 1).length
                ? favorites
                    .filter((f) => f.favoriteRanking <= 10 && f.favoriteRanking >= 1)
                    .sort((a, b) => a.favoriteRanking - b.favoriteRanking)
                    .map(game => {
                    return <div key={game.id} 
                            className="game-card"
                            // style={{backgroundImage : `url(${game.gameSingle.background_image})`}}
                            >
                        <img className="game-image"src={game.gameSingle.background_image}/>
                        <p className="game-title">{game.gameSingle.name}</p>
                        <div className="game-card-options">
                            <p>{game.favoriteRanking}</p>
                            <FavoriteGameDetailsModal
                                game={game} 
                                // updateCategoryOnGame={updateCategoryOnGame} 
                            />
                            {/* X Button with Modal */}
                            {/* <DemoteFavoriteModal 
                                game={game}
                                userGames={userGames} 
                                setUserGames={setUserGames}
                                favorites={favorites}
                            /> */}
                        </div>
                    </div>
                })
                : <p>No Top Ten Chosen</p>
            }
            </div>
            <h1>Other Favorites</h1>
            {
                favorites.filter((f) => f.favoriteRanking <= 10 && f.favoriteRanking >= 1).length < 10 && favorites.filter((f) => f.favoriteRanking > 10).length
                ? <AddTopTenModal
                    userGames={userGames}
                    setUserGames={setUserGames}
                    favorites={favorites}
                />
                : ''
            }
            <AddNewFavoriteModal
                userGames={userGames}
                setUserGames={setUserGames}
                favorites={favorites}
            />
            <div className="other-favorites-container">
            {
                favorites.filter((f) => f.favoriteRanking > 10).length
                ? favorites
                    .filter((f) => f.favoriteRanking > 10)
                    .sort((a, b) => b.favoriteRanking - a.favoriteRanking)
                    .map(game => {
                    return <div key={game.id} 
                            className="game-card"
                            // style={{backgroundImage : `url(${game.gameSingle.background_image})`}}
                            >
                        <img className="game-image"src={game.gameSingle.background_image}/>
                        <p className="game-title">{game.gameSingle.name}</p>
                        <div className="game-card-options">
                            <p>{game.favoriteRanking}</p>
                            <FavoriteGameDetailsModal
                                game={game} 
                                // updateCategoryOnGame={updateCategoryOnGame} 
                            />
                            {/* X Button with Modal */}
                            <RemoveFavoriteModal 
                                game={game} 
                                userGames={userGames} 
                                setUserGames={setUserGames}
                            />
                        </div>
                    </div>
                })
                : <p>No other favorites</p>
            }
            </div>
            </>
            : <div>
                <p>No Favorties Chosen</p>
                <Button onClick={() => navigate("/")}>Go To Playlist</Button>
            </div>
        }
    </div>
}