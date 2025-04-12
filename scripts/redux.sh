#!/bin/bash

# Install Redux dependencies
npm install @reduxjs/toolkit react-redux --save --legacy-peer-deps

# Get the current directory
CURRENT_DIR=$(pwd)

# Set ROOT_DIR to the parent directory of the current directory
ROOT_DIR="$CURRENT_DIR/.."

# Create reducers folder
mkdir -p "$ROOT_DIR/src/context/reducers"

# Create index.ts file
cat << EOF > "$ROOT_DIR/src/context/index.ts"
import { store, useDispatch, useSelector } from './reducers/store';
import { setSplash } from './reducers/app';

class AllReducer {
  setSplash = setSplash;
}

const Reducers = new AllReducer();
export { store, useDispatch, useSelector, Reducers };

EOF

# Create app.ts file
cat << EOF > "$ROOT_DIR/src/context/reducers/app.ts"
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface AppState {
  isSplash: boolean;
}

const initialState: AppState = {
  isSplash: true,
};

export const AppSlice = createSlice({
  name: 'App',
  initialState,
  reducers: {
    setSplash: (
      state,
      {
        payload,
      }: PayloadAction<{
        value: boolean;
      }>,
    ) => {
      state.isSplash = payload.value;
    },
  },
});

export const { setSplash } = AppSlice.actions;
export default AppSlice.reducer;

EOF

# Create store.ts file
cat << EOF > "$ROOT_DIR/src/context/reducers/store.ts"
import { configureStore } from '@reduxjs/toolkit';
import AppReducer from './app';
import {
  useDispatch as useAppDispatch,
  useSelector as AppSelector,
  TypedUseSelectorHook,
} from 'react-redux';

export const store = configureStore({
  reducer: {
    app: AppReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch = () => useAppDispatch<AppDispatch>();
export const useSelector: TypedUseSelectorHook<RootState> = AppSelector;

EOF

rm "$ROOT_DIR/index.js"


# Create store.ts file
cat << EOF > "$ROOT_DIR/index.js"
/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import { store } from './src/context';

// TODO: Add Firebase Configurations

const Application = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}
AppRegistry.registerComponent(appName, () => Application);

EOF

echo "Redux Initialized Successfully"