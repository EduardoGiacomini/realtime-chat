import constants from '../constants'
const {SET_USER, SET_INITIAL_USER} = constants

export function setUser(user) {
    const action = {
        type: SET_USER,
        payload: user
    }
    return action
}

export function setInitialUser() {
    const action = {
        type: SET_INITIAL_USER,
        payload: {id: '', name: ''}
    }
    return action
}
