export const GamesRowByTime = ({userGames, timeCategory}) => {
    const gamesPerCategory = userGames
        .filter(userGame => userGame.timeCategoryId == timeCategory.id)
        .sort((a, b) => a.gameSingle.name.localeCompare(b.gameSingle.name));

    return <div className="game-row-container">
    {
        gamesPerCategory.length 
        ? <>
            <h2 className="game-row-header">{timeCategory.name}</h2>
            <div className="game-row-items">
            {
                gamesPerCategory.map(game => {
                    return <div key={game.id} 
                            className="game-card"
                            // style={{backgroundImage : `url(${game.gameSingle.background_image})`}}
                            >
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