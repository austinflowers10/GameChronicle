const _apiUrl = "/api/usergame";

export const getUserGamesPerUser = (id) => {
    return fetch(`${_apiUrl}/${id}`).then((res) => res.json());
}

export const putUserGame = (userGame) => {
    return fetch(`${_apiUrl}/${userGame.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userGame),
      });
}

export const putUserGames = (userGames) => {
    return fetch(_apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userGames),
      });
}

export const deleteUserGame = (id) => {
    return fetch(`${_apiUrl}/${id}`, {method: "DELETE"})
}