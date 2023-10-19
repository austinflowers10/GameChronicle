import { useEffect, useState } from "react"
import "./Home.css"
import { getUserGamesPerUser } from "../../managers/userGameManager"
import { GamesRowByTime } from "./GamesRowByTime"
import { getTimeCategories } from "../../managers/timeCategoryManager"

export const Home = ({loggedInUser}) => {
    const [userGames, setUserGames] = useState()
    const [timeCategories, setTimeCategories] = useState()

    useEffect(() => {
        getUserGamesPerUser(loggedInUser.id).then(setUserGames)
        getTimeCategories().then(setTimeCategories)
    },[]
    )

    if (!userGames || !timeCategories) {
        return null
    }

    return <div className="container">
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