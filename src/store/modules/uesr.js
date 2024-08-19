import { createSlice } from "@reduxjs/toolkit";
import {request} from '@/utils'

const userStore = createSlice({
    name: 'user',
    initialState: {
        token: localStorage.getItem('token_key')||''
    },
    reducers: {
        setToken(state, actions) {
            // redux存token
            state.token = actions.payload
            // localStorage存一份也token
            localStorage.setItem('token_key',actions.payload)
        }
    }
}
)
const { setToken } = userStore.actions

const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await request.post('/authorizations',loginForm)
        dispatch(setToken(res.data.token))
    }

}

const userReducer = userStore.reducer

export { fetchLogin, setToken}

export default userReducer