export function addCities(data) {
    return {
        type: "ADD_CITY",
        payload: data
    }
}
export function deleteCities(data) {
    return {
        type: "DELETE_CITY",
        payload: data
    }
}
export function changeDegree(val) {
    return {
        type: "CHANGE_DEGREE",
        payload: val
    }
}