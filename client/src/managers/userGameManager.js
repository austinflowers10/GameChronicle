const _apiUrl = "/api/usergame";

export const getUserGamesPerUser = (id) => {
    return fetch(_apiUrl + `/${id}`).then((res) => res.json());
}

export const putUserGame = (userGame) => {
    return fetch(_apiUrl + `/${userGame.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userGame),
      });
}