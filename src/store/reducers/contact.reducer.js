

export const SET_CONTACT = 'SET_CONTACT'


export const SET_IS_LOADING = 'SET_IS_LOADING'



const initialState = {
    contacts: [],
    isLoading: false
}

export function toyReducer(state = initialState, action = {}) {

    switch (action.type) {
        case SET_CONTACT:
            return { ...state, contacts: action.contacts }



        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }


        default:
            return state
    }
}
