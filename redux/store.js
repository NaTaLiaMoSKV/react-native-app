import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, } from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import { authSlice } from './auth/authReducer';



// const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
// };

const rootReducer = combineReducers({
    [authSlice.name]: authSlice.reducer,
})

export const store = configureStore({
    reducer: rootReducer,
    
});

// export const persistor = persistStore(store);

// export default { store, persistor };