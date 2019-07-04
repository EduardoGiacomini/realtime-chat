import constants from '../constants'
const {SET_USER, SET_INITIAL_USER} = constants

const INITIAL_STATE = {
    user: {
        id: '',
        name: ''
    },
    messages: []
}

function setUser(state = INITIAL_STATE.user, action) {
    switch (action.type) {
        case SET_USER:
            return action.payload
        case SET_INITIAL_USER:
            return INITIAL_STATE.user
        default:
            return state
    }
}

export {setUser}
