import { configureStore } from '@reduxjs/toolkit';
import isAuthReducer from './isAuthSlice' 

export default configureStore({
    reducer: {
        isAuth: isAuthReducer
    }
});