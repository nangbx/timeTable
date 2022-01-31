import * as types from '../Constants/const'

const initialState = {
    courses: [],
    subjects: {},
    registration: [],
    Class: []
}
export default function tkb(state = initialState, action){
    switch(action.type){
        case types.SET_DATA: {
            return {
                registration: [],
                Class: [],
                courses: action.data.courses,
                subjects: action.data.subjects
            }
        }
        case types.ADD_SUBJECT: {
            let set = new Set(state.registration);
            set.add(action.data)
            return {
                ...state,
                registration: [...set]
            }
        }
        case types.DELETE_SUBJECT: {
            var arr = state.registration;
            var index = arr.indexOf(action.data);
            if(index !== -1){
                arr.splice(index, 1);
            }
            return{
                ...state,
                registration: [...arr]
            }
        }
        case types.ADD_CLASS: {
            var arr = state.Class;
            arr.push(action.data)
            return {
                ...state,
                Class: arr
            }
        }
    }
    return initialState;
}