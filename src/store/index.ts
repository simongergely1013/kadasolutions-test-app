// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import products from './products';
import singleProduct from './singleProduct';
import cart from './cart';

// const reducers = combineReducers({
//     //user: user.reducer
// })

export const store = configureStore({
    reducer: {
      products: products.reducer,
      singleProduct: singleProduct.reducer,
      cart: cart.reducer
    },
  })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch