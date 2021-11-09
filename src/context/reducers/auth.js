import { CLEAR_AUTH_STATE, LOGIN_FAIL, LOGIN_LOADING, LOGIN_SUCCESS, REGISTER_FAIL, REGISTER_LOADING, REGISTER_SUCCESS } from "../../constants/actionTypes";

const auth = (state, {type,payload}) => {
    switch (type) {
        case LOGIN_LOADING:
        case REGISTER_LOADING:
     // console.log('state', state);
            return {
                ...state,
                loading: true,
            }
          //  return state;

      case REGISTER_SUCCESS:
            // console.log('state', state);
                return {
                       ...state,
                       loading: false,
                       data: payload,
                   } 
        case LOGIN_SUCCESS:
          // console.log('state', state);
                return {
                       ...state,
                       loading: false,
                       data: payload,
                       isLoggedIn: true,
                      };
        
        case REGISTER_FAIL:
        case LOGIN_FAIL:    
            // console.log('state', state);
            return {
                    ...state,
                    loading: false,
                    error: payload,
                   }
    
        case CLEAR_AUTH_STATE :
            return {
                ...state,
                loading: false,
                data: null,
                error: null,
               }

            default:
                return state;
    }
};

export default auth;     