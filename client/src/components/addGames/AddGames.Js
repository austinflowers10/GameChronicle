
import { useEffect, useState } from "react"
import { getGames } from "../../managers/gameManager"

export const AddGames = ({loggedInUser}) => {
    const [games, setGames] = useState()

    useEffect(() => {
        getGames().then(setGames)
    },[]
    )

    if (!games) {
        return null
    }

    return <div className = "container">
        {
            games.map(game => (
                <div key={game.id} className="game-card">
                    <img className="game-image"src={game.imageURL}/>
                    <p className="game-title">{game.name}</p>
                </div>
            ))
        }
    </div>
}