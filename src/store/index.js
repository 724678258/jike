import { configureStore } from "@reduxjs/toolkit";
import userReducer from './modules/uesr'

export default configureStore({
    reducer: userReducer

}
)
