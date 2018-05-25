/**
 * Created by albertogiovanelli on 15/05/18.
 */
import {
    LOGIN,
    LOGOUT
} from '../utils/constant/authConstants';

export function login(data) {
    return {
        type:'LOGIN',
        data
    }
}

export function logout(data) {
    return {
        type:'LOGOUT',
        data
    }
}

