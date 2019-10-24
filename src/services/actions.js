import 'redux';
import { store } from '../index.js';
import {
    DISPLAY_SIGN_UP_MODAL,
    DISPLAY_LOG_IN_MODAL,
    SUBMIT_SEARCH_FIELD,
    SUBMIT_EMAIL,
    SUBMIT_CRYPTED_PASSWORD,
    SUBMIT_NAME,
    LOAD_USER,
    IS_LOGGED_IN,
    RESET_USER,
    IS_MOBILE,
    DISPLAY_MOBILE_MENU,
    UN_DISPLAY_MOBILE_MENU,
} from './constants.js';



export const displaySignUpModalAction = () => {
    return {
        type: DISPLAY_SIGN_UP_MODAL,
        displaySignUpModalPayload: !store.getState().displaySignUpModal,
    }
}


export const displayLogInModalAction = () => {
    return {
        type: DISPLAY_LOG_IN_MODAL,
        displayLogInModalPayload: !store.getState().displayLogInModal,
    }
}

export const submitSearchFieldAction = (event) => {
    return {
        type: SUBMIT_SEARCH_FIELD,
        submitSearchFieldPayload: event.target.value
    }
}

export const submitEmailAction = (event) => {
    return {
        type: SUBMIT_EMAIL,
        submitEmailPayload: event.target.value
    }
}

export const submitNameAction = (event) => {
    console.log("should sub name")
    return {
        type: SUBMIT_NAME,
        submitNamePayload: event.target.value
    }
}


export const submitCryptedPasswordAction = (event) => {
    return {
        type: SUBMIT_CRYPTED_PASSWORD,
        submitCryptedPasswordPayload: event.target.value
    }
}

export const isLoggedIn = () => {
    return {
        type: IS_LOGGED_IN,
        loggedInPayload: !store.getState().loggedIn
    }
}

export const loadUser = (user) => {
    return {
        type: LOAD_USER,
        idPayload: user.id,
        namePayload: user.name,
        emailPayload: user.email,
        joinedPayload: user.joined
    }
}

export const resetUser = () => {
    return {
        type: RESET_USER,
        idPayload: '',
        namePayload: '',
        emailPayload: '',
        joinedPayload: ''
    }
}

export const isMobileAction = (payload) => {
    return {
        type: IS_MOBILE,
        isMobilePayload: payload
    }
}

export const displayMobileMenuAction = () => {
    return {
        type: DISPLAY_MOBILE_MENU,
        displayMobileMenuPayload: !store.getState().displayMobileMenu
    }
}

export const unDisplayMobileMenuAction = (payload) => {
    return {
        type: UN_DISPLAY_MOBILE_MENU,
        unDisplayMobileMenuPayload: payload
    }
}



export const sendSearchFieldAction = () => {
    fetch('localhost:3000/searchfield', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            searchField: store.getState().searchField
        })
    }).then(response => response.json())
    .then(data => console.log(data))
}

export const sendSignUpAction = () => {
    fetch('localhost:3000/signup', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            crypted_password: store.getState().cryptedPassword,
            email: store.getState().user.email,
            name: store.getState().user.name
        })
    })
    .then(user => user.json())
    .then(user => {
        if (user.email) {
                store.dispatch(loadUser(user))
                store.dispatch(isLoggedIn())
                store.dispatch(displaySignUpModalAction())
        }
    })
}

export const sendLogIn = () => {
    fetch('localhost:3000/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            crypted_password: store.getState().cryptedPassword,
            email: store.getState().user.email,
        })
    })
    .then(user => user.json())
    .then(user => {
        if (user.email) {
                store.dispatch(loadUser(user))
                store.dispatch(isLoggedIn())
                store.dispatch(displayLogInModalAction())
        }
    })
}


