export const GamesRowByTime = ({userGames, timeCategory}) => {
    const gamesPerCategory = userGames.filter(userGame => userGame.timeCategoryId == timeCategory.id)

    return <div className="game-row-container">
    {
        gamesPerCategory.length 
        ? <>
            <h1 className="game-row-header">{timeCategory.name}</h1>
            <div className="game-row-items">
            {
                gamesPerCategory.map(game => {
                    return <div key={game.id} className="game-card">
                        <img className="game-image"src={game.gameSingle.background_image}/>
                        <p className="game-title">{game.gameSingle.name}</p>
                    </div>
                })
            }
            </div>
        </>
        : ""
    }
    </div>
}