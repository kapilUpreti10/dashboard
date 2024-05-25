import { configureStore } from '@reduxjs/toolkit';
import alertReducer from '../slice/AlertSlice';
import userReducer from '../slice/UserSlice';
import cartReducer from '../slice/CartSlice';

// Function to load state from localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem('reduxState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Function to save state to localStorage
const saveState = (state: unknown) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('reduxState', serializedState);
  } catch {
    // ignore write errors
  }
};

const persistedState = loadState(); // Load initial state from localStorage

const store = configureStore({
  reducer: {
   alert:alertReducer,
    user: userReducer,
    cart: cartReducer,
  },
  preloadedState: persistedState, // Set initial state
});

store.subscribe(() => {
  saveState(store.getState()); // Save state to localStorage on every state change
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
