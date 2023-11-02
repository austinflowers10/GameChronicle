import { useEffect, useState } from "react"
import { Button, Spinner } from "reactstrap"
import { GamesSearchResults } from "./GamesSearchResults"
import { getGames, getSearchedGamesPerPage } from "../../managers/gameManager"
import "./AddGames.css"

export const AddGames = ({ userGames, setUserGames, loggedInUser }) => {
    const [searchedGames, setSearchedGames] = useState()
    const [inputState, setInputState] = useState("")
    const [searchString, setSearchString] = useState("")
    const [pageNumber, setPageNumber] = useState(1)

    useEffect(() => {
        if (searchString) {
            getSearchedGamesPerPage(pageNumber, searchString).then(setSearchedGames)//with page number and search string
            console.log(`Search Results Rerendered, on page ${pageNumber} with ${searchString}`)
        }
    },[pageNumber, searchString]
    )

    if (!userGames) {
        return <Spinner  style={{margin: 'auto'}}/>
    }
    
    return <div className="page-content-container">
        <div className="page-header-row">
            <h1 className="page-header-text">Add Games</h1>
        </div>
        <div className="search-container">
            <div className="search-row">
                <input className="input search-input" type="text" placeholder="Search over 855,000 games" value={inputState}
                        onChange={(event) => {
                            setInputState(event.target.value)
                        }}
                />
                <Button className="search-button" disabled={!inputState} onClick={() => {
                    if (inputState) {
                        setSearchString(inputState)
                        setPageNumber(1)
                    }
                }}>
                    Search
                </Button>
            </div>
            <div className="games-search-results-container">
            {
                searchString
                ? <GamesSearchResults 
                    pageNumber={pageNumber} 
                    setPageNumber={setPageNumber}
                    searchedGames={searchedGames}
                    loggedInUser={loggedInUser}
                    setUserGames={setUserGames}
                    userGames={userGames}
                />
                : <p className="search-alt-text">To see games, please search for a game by title.</p>
            }
            </div>
        </div>
    </div>
}