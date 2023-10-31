import { useEffect, useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { tryGetLoggedInUser } from "./managers/authManager";
import { Spinner } from "reactstrap";
import NavBar from "./components/NavBar";
import ApplicationViews from "./components/ApplicationViews";
import { getUserGamesPerUser } from "./managers/userGameManager";

function App() {
    const [userGames, setUserGames] = useState()
    const [loggedInUser, setLoggedInUser] = useState();

  useEffect(() => {
    // user will be null if not authenticated
    tryGetLoggedInUser().then((user) => {
      setLoggedInUser(user);
    });
  }, []);

  useEffect(() => {
    if (loggedInUser) {
        getUserGamesPerUser(loggedInUser.id).then((res) => {
            setUserGames(res)
        })
    }
},[loggedInUser]
)

  // wait to get a definite logged-in state before rendering
  if (loggedInUser === undefined) {
    return <Spinner />;
  }

  return (
    <>
      <NavBar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} setUserGames={setUserGames}/>
      <ApplicationViews
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
        setUserGames={setUserGames}
        userGames={userGames}
      />
    </>
  );
}

export default App;
