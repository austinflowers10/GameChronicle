import { Route, Routes } from "react-router-dom";
import { AuthorizedRoute } from "./auth/AuthorizedRoute";
import Login from "./auth/Login";
import Register from "./auth/Register";
import { Home } from "./home/Home";
import { getUserGamesPerUser } from "../managers/userGameManager"
import { useEffect, useState } from "react"
import { Spinner } from "reactstrap";
import { AddGames } from "./addGames/AddGames";
import { Replayables } from "./collections/Replayables";
import { Favorites } from "./collections/Favorites";
import { History } from "./collections/History";


export default function ApplicationViews({ loggedInUser, setLoggedInUser }) {
    const [userGames, setUserGames] = useState()
        
    useEffect(() => {
        getUserGamesPerUser(loggedInUser.id).then((res) => {
            setUserGames(res)
        })
    },[]
    )

  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
                <Home loggedInUser={loggedInUser} userGames={userGames} setUserGames={setUserGames}/>
            </AuthorizedRoute>
          }
        />
        {/* <Route
          path="collections"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
                <CollectionsParent userGames={userGames}/>
            </AuthorizedRoute>
          }
        > */}
            <Route 
                path="favorites"
                element={
                    <AuthorizedRoute loggedInUser={loggedInUser}>
                        <Favorites userGames={userGames} setUserGames={setUserGames}/>
                    </AuthorizedRoute>
                }
            />
            <Route 
                path="replayables"
                element={
                    <AuthorizedRoute loggedInUser={loggedInUser}>
                        <Replayables userGames={userGames} setUserGames={setUserGames}/>
                    </AuthorizedRoute>
                }
            />
            <Route 
                path="history"
                element={
                    <AuthorizedRoute loggedInUser={loggedInUser}>
                        <History userGames={userGames} setUserGames={setUserGames}/>
                    </AuthorizedRoute>
                }
            />
        {/* </Route> */}
        <Route
          path="reviews"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
                {/* <Reviews userGames={userGames}/> */}
            </AuthorizedRoute>
          }
        >
            <Route 
                path=":id"
                element={
                    <AuthorizedRoute loggedInUser={loggedInUser}>
                    {/* <ReviewsForGame userGames={userGames}/> */}
                    </AuthorizedRoute>
                }
            />
        </Route>
        <Route
          path="addgames"
          element={
            <AuthorizedRoute loggedInUser={loggedInUser}>
                <AddGames userGames={userGames} setUserGames={setUserGames} loggedInUser={loggedInUser}/>
            </AuthorizedRoute>
          }
        />
        <Route
          path="login"
          element={<Login setLoggedInUser={setLoggedInUser} />}
        />
        <Route
          path="register"
          element={<Register setLoggedInUser={setLoggedInUser} />}
        />
      </Route>
      <Route path="*" element={<p>Whoops, nothing here...</p>} />
    </Routes>
  );
}
