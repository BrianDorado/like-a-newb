import axios from 'axios'

const initialState = { 
    userData: {},
    userID: null,

}
const userData = 'User_Data'
const user = 'user'

// action creator
export function createUser(){
    let newUser = axios.post('/createUser', {username: userData.username, phone: userData.phone, ssn: userData.ssn })
    .then(res => res.data)

    return {
        type: userData,
        payload: newUser
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case userData + '_FULFILLED':
            return Object.assign({}. state, {userData: action.payload})
            
    
        default:
            return state
    }
}