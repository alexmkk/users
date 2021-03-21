import { START_USERS_LOADING, SUCCESS_USERS_LOADING } from "../actions/actionTypes"

const initialState = {
    users: [
        {
            id: 1,
            name: 'Alex Mkk',
            email: 'asmkk@mail.ru'
        }
    ],
    isLoading: false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_USERS_LOADING:
            return {
                isLoading: true,
                ...state
            }
        case SUCCESS_USERS_LOADING:
            return {
                users: action.users,
                isLoading: false
            }
        default:
            return state
    }
}

export default usersReducer