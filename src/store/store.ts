import { combineReducers} from 'redux'
import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web


import { configureStore } from '@reduxjs/toolkit'

import { userSlice } from './user/user.slice'


const persistConfig = {
  key: '4308',
  storage,
  whitelist:['cart']
}
const rootReducer = combineReducers({
    user:userSlice.reducer
    
})
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, REGISTER, PAUSE, PERSIST, PURGE]
    }
  })
});
export const persistor = persistStore(store)
export type TypeRootState = ReturnType<typeof rootReducer>