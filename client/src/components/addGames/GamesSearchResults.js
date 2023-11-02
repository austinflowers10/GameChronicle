
import { useEffect, useState } from "react"
import "./AddGames.css"
import { Button, Spinner } from "reactstrap"
import { BiChevronRight, BiChevronLeft } from "react-icons/bi";
import { SearchedGameDetailsModal } from "./SearchedGameDetailsModal";

export const GamesSearchResults = ({pageNumber, setPageNumber, searchedGames, loggedInUser, setUserGames, userGames, handlePostUserGame}) => {

    if (!searchedGames) {
        return <Spinner/>
    }

    return <>
        <div className="games-search-results">
        {
            searchedGames.length
            ? searchedGames.map(game => (
                <div key={game.id} className="search-game-card">
                    <img className="search-game-image"src={game.imageURL}/>
                    <p className="search-game-title">{game.name}</p>
                    <SearchedGameDetailsModal 
                        userGames={userGames}
                        setUserGames={setUserGames}
                        game={game}
                        loggedInUser={loggedInUser}
                        handlePostUserGame={handlePostUserGame}
                    />
                </div>
            ))
            : <p>No games found, please make your search more specific.</p>
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