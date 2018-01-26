import axios from 'axios'
import { userInfo } from 'os';

const initialState = { 
    userID: 1
}

export function getUser(){
    return {
        type: userInfo,
        payload: user
    }
}

export function(state = initialState, action) {
    switch (action.type) {
        case value:
            
            break;
    
        default:
            break;
    }
}