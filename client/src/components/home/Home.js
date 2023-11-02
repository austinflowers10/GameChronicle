import { useEffect, useState } from "react"
import { BiBookAdd, BiListPlus } from "react-icons/bi";
import "./Home.css"
import { GamesRowByTime } from "./GamesRowByTime"
import { getTimeCategories } from "../../managers/timeCategoryManager"
import { AddFromHistoryModal } from "./AddFromHistoryModal";
import { Button, Spinner } from "reactstrap";
import { useNavigate } from "react-router-dom";

export const Home = ({ userGames, setUserGames }) => {
    const [timeCategories, setTimeCategories] = useState()
    const [modal, setModal] = useState(false);
    const navigate = useNavigate()

    const toggle = () => setModal(!modal);

    const updateCategoryOnGame = (game, timeCategoryId) => {
        const gameToUpdate = {...game}
        gameToUpdate.timeCategoryId = timeCategoryId

        const userGamesCopy = [...userGames]
        userGamesCopy[userGames.indexOf(game)] = gameToUpdate
        setUserGames(userGamesCopy)
    }
    
    useEffect(() => {
        getTimeCategories().then(setTimeCategories)
    },[]
    )

    if (!timeCategories) {
        return <Spinner />
    }

    if (!userGames) {
        return <Spinner />
    }
    // console.log(userGames.filter(game => game.timeCategoryId === 5).length)

    return <div className="page-content-container">
        <div className="page-header-row">
            <h1 className="page-header-text">Playlist</h1>
            <BiBookAdd className="page-header-icon" onClick={toggle}/> 
            <AddFromHistoryModal 
                modal={modal} 
                toggle={toggle} 
                setUserGames={setUserGames}
                userGames={userGames} 
                timeCategories={timeCategories}
                updateCategoryOnGame={updateCategoryOnGame}
            />
        </div>
        <div className="games-rows-container">
        {
            userGames.length
            ? timeCategories.map(timeCategory => {
                return timeCategory.id !== 5 && <GamesRowByTime 
                    key={timeCategory.id} 
                    userGames={userGames}
                    setUserGames={setUserGames} 
                    timeCategory={timeCategory}
                    updateCategoryOnGame={updateCategoryOnGame}
                />
            })
            : <div>
                <p>You currently have no games</p>
                <Button onClick={() => navigate("addgames")}>Add Games</Button>
            </div>
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