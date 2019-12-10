export default function reduser(
    state = {
        cities: [],
        deg: 'kelvin'
    },
    action
) {
    switch (action.type) {
        case 'ADD_CITY':
            state = {
                ...state,
                cities: [...action.payload]
            }
            return state;
        case 'DELETE_CITY':
            state = {
                ...state,
                cities: action.payload
            }
            return state;
        case 'CHANGE_DEGREE':
            state = {
                ...state,
                deg: action.payload
            }
            return state;
        default:
            return state;
    }
}