import { useEffect, useState } from "react"
import { BiAddToQueue } from "react-icons/bi";
import "./Home.css"
import { getUserGamesPerUser } from "../../managers/userGameManager"
import { GamesRowByTime } from "./GamesRowByTime"
import { getTimeCategories } from "../../managers/timeCategoryManager"
import { AddFromHistoryModal } from "./AddFromHistoryModal";
import { Spinner } from "reactstrap";

export const Home = ({loggedInUser}) => {
    const [userGames, setUserGames] = useState()
    const [timeCategories, setTimeCategories] = useState()
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const getSetUserGames = (loggedInUser) => {
        getUserGamesPerUser(loggedInUser.id).then((res) => {
            setUserGames(res)
        })
    }

    const updateCategoryOnGame = (game, timeCategoryId) => {
        const gameToUpdate = {...game}
        gameToUpdate.timeCategoryId = timeCategoryId

        const userGamesCopy = [...userGames]
        userGamesCopy[userGames.indexOf(game)] = gameToUpdate
        setUserGames(userGamesCopy)
    }
    
    useEffect(() => {
        getSetUserGames(loggedInUser)
        getTimeCategories().then(setTimeCategories)
    },[]
    )

    if (!userGames || !timeCategories) {
        return <Spinner />
    }
    // console.log(userGames.filter(game => game.timeCategoryId === 5).length)

    return <div className="container">
        <div className="header-row">
            <h1 className="home-header">Playlist</h1>
            <BiAddToQueue className="header-icon" onClick={toggle}/> 
            <AddFromHistoryModal 
                modal={modal} 
                toggle={toggle} 
                setUserGames={setUserGames}
                userGames={userGames} 
                timeCategories={timeCategories}
                loggedInUser={loggedInUser}
                updateCategoryOnGame={updateCategoryOnGame}
            />
        </div>
        <div className="games-rows-container">
        {
            timeCategories.map(timeCategory => {
                return timeCategory.id !== 5 && <GamesRowByTime 
                    key={timeCategory.id} 
                    userGames={userGames}
                    setUserGames={setUserGames} 
                    timeCategory={timeCategory}
                    updateCategoryOnGame={updateCategoryOnGame}
                />
            })
        }
        </div>
    </div>
}
 {/* {
    userGames !== savedUserGames
    ? <>
    <Button 
        onClick={() => {
            putUserGames(userGames)
            setSavedUserGames(userGames)
        }}
    >Save Changes</Button>
    <Button 
        onClick={() => {
            setUserGames(savedUserGames)
        }}
    >Cancel</Button>
    </>
    : ""
    } */}