import { useEffect, useState } from "react"
import { BiAddToQueue } from "react-icons/bi";
import "./Home.css"
import { getUserGamesPerUser, putUserGames } from "../../managers/userGameManager"
import { GamesRowByTime } from "./GamesRowByTime"
import { getTimeCategories } from "../../managers/timeCategoryManager"
import { AddFromHistoryModal } from "./AddFromHistoryModal";
import { Button, Spinner } from "reactstrap";

export const Home = ({loggedInUser}) => {
    const [userGames, setUserGames] = useState()
    const [savedUserGames, setSavedUserGames] = useState()
    const [timeCategories, setTimeCategories] = useState()
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const getSetSaveUserGames = (loggedInUser) => {
        getUserGamesPerUser(loggedInUser.id).then((res) => {
            setUserGames(res)
            setSavedUserGames(res)
        })
    }
    
    useEffect(() => {
        getSetSaveUserGames(loggedInUser)
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
            {
                userGames !== savedUserGames
                ? <Button 
                    onClick={() => {
                        putUserGames(userGames).then(() => {getSetSaveUserGames(loggedInUser)})
                    }}
                >Save Changes</Button>
                : ""
            }
            <AddFromHistoryModal 
                modal={modal} 
                toggle={toggle} 
                setUserGames={setUserGames}
                userGames={userGames} 
                timeCategories={timeCategories}
                loggedInUser={loggedInUser}
            />
        </div>
        <div className="games-rows-container">
        {
            timeCategories.map(timeCategory => {
                return timeCategory.id !== 5 && <GamesRowByTime 
                    key={timeCategory.id} 
                    userGames={userGames} 
                    timeCategory={timeCategory}/>
            })
        }
        </div>
    </div>
}