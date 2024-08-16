import { createSlice } from "@reduxjs/toolkit";
import {request} from '@/utils'

const userStore = createSlice({
    name: 'user',
    initialState: {
        token: ''
    },
    reducers: {
        setToken(state, actions) {
            state.token = actions.payload
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