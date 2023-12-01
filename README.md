# GameChronicle
**NSS Server Side Capstone 2023**

Gamers play dozens of games every year, many of which can be forgotten. Game Chronicle gives gamers a way to track all the games they have played or intend to play. Users can search for games and view details, add, edit, and delete them. Users can then enter user-specific information about each game in order to organize them into different categories. Game Chronicle is a full-stack application made with C#, ASP.NET, PostgreSQL, ReactJs. Styling is done with mostly vanilla CSS and some Bootstrap.

App Features: 

- **Collapsible side bar**

- **Playlist Page**
    - Users can view games they are currently playing or intend to play in the future. New games are added from the Add Games Page, or from History.
    - Users can organize games into categories which represent general timeframes: In Progress, Up Next, Later, and Eventually
    - Book/Plus Icon (top right) - shows a menu for adding a game from History, using numbered buttons to add a game into the corresponding category
    - Game cards:
        - Users can view a background image and title
        - Up/Down Arrow Icons to change a game's timeframe category
        - Check Icon to move a game to History when the game is finished - shows a menu for adding start/end dates and a "Completed to 100%" checkbox
        - Ellipses Icon to show the Game Details View:
            - Game Description, Developers, Platforms and Genres 
            - Replayability: add/change replayability rating which will add and organize the game on the Replayability Page
            - History: add a game to history with date started, date finished, and "Completed to 100%" checkbox
            - Favorite/Go To Favorites: either Favorite a game, or navigate to the Favorites Page
            - Delete: fully delete a game from the user's account along with all user-indicated information

- **Add Games Page**
    - Use the search bar to search a game by title
    - Plus Icon to show the Game Details View, with an Add Game Button which will add the game to the "Eventually" category of the Playlist Page

- **Favorites Page**
    - View games indicated as Top Ten Favorites 
    - View games under Other Favorites, favorites not designated as a Top Ten game
    - Switch Icon (top right): shows a menu to switch out a Top Ten game with an Other Favorites game
    - Up Double Chevron Icon (right of Other Favorites, only shows if Top Ten is incomplete): Adds an Other Favorite game as the next Top Ten game
    - Plus Icon (right of Other Favorites): shows a menu to view all unfavorited games and add a game to Other Favorites
    - Game Cards:
        - Ellipses Icon: shows the Game Details View
        - "X" Icon (Other Favorites games): unfavorites a game

- **Replayables Page**
    - View games indicated with a Replayability Rating, with 10 as the highest rating 
    - Game Cards:
        - Up/Down Arrow Icons: change a game's Replayability Rating up or down
        - "X" Icon: removes a game from Replayables

- **History**
    - View all games that have been moved to History, sorted by most recently finished
    - Game Cards: 
        - View the date finished which was indicated by the user
        - Ellipses Icon: shows the Game Details View
            - Same information and options as the Game Details View within the Playlist Page 
            - Add To Playlist: additional option, adds the game to the "Eventually" category of the Playlist Page 
