import {
    DISPLAY_SIGN_UP_MODAL,
    DISPLAY_LOG_IN_MODAL,
    IS_MOBILE,
    DISPLAY_MOBILE_MENU,
    UN_DISPLAY_MOBILE_MENU,
    SUBMIT_SEARCH_FIELD,
    SUBMIT_EMAIL,
    SUBMIT_CRYPTED_PASSWORD,
    LOG_IN,
    SUBMIT_NAME,
    IS_LOGGED_IN,
    LOAD_USER,
    RESET_USER,
} from './constants.js'



const initialState = {
    cryptedPassword: '',
    displaySignUpModal: false,
    displayLogInModal: false,
    displayMobileMenu: false,
    isMobile: false,
    loggedIn: false,
    searchField: '',
    user: {
        id: '',
        name: '',
        email: '',
        joined: ''
    }
}

export const reducer = (state=initialState, action= {}) => {
    if(action.type === DISPLAY_SIGN_UP_MODAL) {
        return {...state, displaySignUpModal: action.displaySignUpModalPayload }
    }
    if(action.type === DISPLAY_LOG_IN_MODAL) {
        return {...state, displayLogInModal: action.displayLogInModalPayload }
    }
    if(action.type === SUBMIT_SEARCH_FIELD) {
        return {...state, searchField: action.submitSearchFieldPayload }
    }
    if(action.type === SUBMIT_EMAIL) {
        return {...state, 
            user: {
                ...state.user, 
                email: action.submitEmailPayload 
            }
        }
    }
    if(action.type === SUBMIT_CRYPTED_PASSWORD) {
        return {...state, cryptedPassword: action.submitCryptedPasswordPayload }
    }
    if(action.type === SUBMIT_NAME) {
        return {...state, 
            user: {
                ...state.user, 
                name: action.submitNamePayload 
            } 
        }
    }
    if(action.type === IS_LOGGED_IN) {
        return {...state, loggedIn: action.loggedInPayload }
    }
    if(action.type === LOAD_USER) {
        return {...state, 
            user: {
                id: action.idPayload,
                name: action.namePayload,
                email: action.emailPayload,
                joined: action.joinedPayload,
            }
        }
    }
    if(action.type === RESET_USER) {
        return {...state, 
            cryptedPassword: '',
            user: {
                id: action.idPayload,
                name: action.namePayload,
                email: action.emailPayload,
                joined: action.joinedPayload,
                }
        }
    }
    if(action.type === IS_MOBILE) {
        return {...state, isMobile: action.isMobilePayload }
    }
    if(action.type === DISPLAY_MOBILE_MENU) {
        return {...state, displayMobileMenu: action.displayMobileMenuPayload }
    }
    if(action.type === UN_DISPLAY_MOBILE_MENU) {
        return {...state, displayMobileMenu: action.unDisplayMobileMenuPayload }
    }
    return state
}