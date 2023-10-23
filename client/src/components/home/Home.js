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
    const [nestedModal, setNestedModal] = useState(false)
    const [closeAll, setCloseAll] = useState(false);

    const toggle = () => setModal(!modal);
    const toggleNested = () => setNestedModal(!nestedModal)
    const toggleAll = () => {
        setNestedModal(!nestedModal);
        setCloseAll(true);
      };

    useEffect(() => {
        getUserGamesPerUser(loggedInUser.id).then(setUserGames)
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
                nestedModal={nestedModal}
                toggleNested={toggleNested}
                toggleAll={toggleAll}
                setUserGames={setUserGames}
                userGames={userGames} 
                closeAll={closeAll}
                timeCategories={timeCategories}
                loggedInUser={loggedInUser}
            />
        </div>
        {
            timeCategories.map(timeCategory => {
                return timeCategory.id !== 5 && <GamesRowByTime 
                    key={timeCategory.id} 
                    userGames={userGames} 
                    timeCategory={timeCategory}/>
            })
        }
    </div>
}