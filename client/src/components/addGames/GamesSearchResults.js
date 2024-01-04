
import { useEffect, useState } from "react"
import "./AddGames.css"
import { Button, Spinner } from "reactstrap"
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import imageOff from "../../images/image-off.svg"
import { SearchedGameDetailsModal } from "./SearchedGameDetailsModal";

export const GamesSearchResults = ({pageNumber, setPageNumber, searchedGames, loggedInUser, setUserGames, userGames, handlePostUserGame}) => {

    if (!searchedGames) {
        return <div className="games-search-results">
            <Spinner  style={{margin: 'auto'}}/>
        </div>
    }

    return <>
        <div className="games-search-results">
        {
            searchedGames.length
            ? searchedGames.map(game => (
                <div key={game.id} 
                            className="game-card"
                            style={
                                game.imageURL 
                                ? {backgroundImage: `url(${game.imageURL})`}
                                : {
                                    backgroundImage: `url(${imageOff})`,
                                    backgroundSize: "100px",
                                }
                            }
                            >
                        <div className="game-card-options-row">
                            <p className="game-title">{game.name}</p>
                            <div className="other-game-card-options">
                                <SearchedGameDetailsModal 
                                    userGames={userGames}
                                    setUserGames={setUserGames}
                                    game={game}
                                    loggedInUser={loggedInUser}
                                    handlePostUserGame={handlePostUserGame}
                                />
                            </div>
                        </div>
                </div>
            ))
            : <p className="search-alt-text">No games found, please make your search more specific.</p>
        }
        </div>

    </>
}

        {/* <div className="search-results-page-buttons">
            {
            pageNumber > 1
            ? <BiChevronLeft 
                onClick={() => {
                    setPageNumber(pageNumber - 1)
                }}
            />
            : ""
            }
            <BiChevronRight
                onClick={() => {
                    setPageNumber(pageNumber + 1)
                }}
            />
        </div> */}