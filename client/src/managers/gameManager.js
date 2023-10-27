const _apiUrl = "/api/game";

export const getGames = async () => {
    return await fetch(_apiUrl).then((res) => res.json());
}

export const getGameById = (id) => {
    return fetch( `${_apiUrl}/${id}`).then((res) => res.json());
}

export const getSearchedGamesPerPage = (page, search) => {
    return fetch(`${_apiUrl}/search?page=${page}&search=${search}`).then((res) => res.json());
}