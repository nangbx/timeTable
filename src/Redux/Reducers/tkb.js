import * as types from '../Constants/const'

const initialState = {
    courses: [],
    subjects: {},
    registration: [],
    Class: [],
    view: []
}
export default function tkb(state = initialState, action){
    switch(action.type){
        case types.SET_DATA: {
            return {
                registration: [],
                Class: [],
                view: [],
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
                Class: [...new Set(arr)]
            }
        }
        case types.DELETE_CLASS: {
            var arr = state.Class;
            var index = arr.indexOf(action.data);
            if(index !== -1){
                arr.splice(index, 1);
            }
            return{
                ...state,
                Class: arr
            }
        }

        case types.ADD_VIEW: {
            var arr = state.subjects;
            var v = arr[action.data.substring(0, action.data.indexOf(":"))];
            return {
                ...state,
                view: v
            }
        }
        case types.REMOVE_VIEW: {
            return {
                ...state,
                view: []
            }
        }
    }
    return initialState;
}