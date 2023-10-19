const _apiUrl = "/api/timecategory";

export const getTimeCategories = () => {
    return fetch(_apiUrl).then((res) => res.json());
}