import { createSlice } from "@reduxjs/toolkit";
import {request,getToken,setToken as _setToken} from '@/utils'

const userStore = createSlice({
    name: 'user',
    initialState: {
        token: getToken()||'',
        userInfo:{}
    },
    reducers: {
        setToken(state, actions) {
            // redux存token
            state.token = actions.payload
            // localStorage存一份也token
            _setToken(actions.payload)
        },
        setUserInfo(state, actions) {
            // redux存token
            state.userInfo = actions.payload
        },
    }
}
)
const { setToken,setUserInfo } = userStore.actions

// 异步方法封装
const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await request.post('/authorizations',loginForm)
        dispatch(setToken(res.data.token))
    }

}
// 异步方法获取用户信息
const fetchUserInfo = ()=>{
    return async (dispatch)=>{
        const res = await request.get('/user/profile')
        dispatch(setUserInfo(res.data))

    }

}

const userReducer = userStore.reducer

export { fetchLogin, setToken,fetchUserInfo}

export default userReducer