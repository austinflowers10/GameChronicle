const _apiUrl = "/api/usergame";

export const getUserGamesPerUser = (id) => {
    return fetch(_apiUrl + `/${id}`).then((res) => res.json());
}