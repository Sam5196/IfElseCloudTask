#!/bin/bash

# Installation of dependencies
npm install --save react-native-mmkv @react-native-community/netinfo axios moment react-native-device-info react-native-fs react-native-svg react-native-reanimated

npm install --save-dev react-native-svg-transformer

# Get the current directory
CURRENT_DIR=$(pwd)

# Set ROOT_DIR to the parent directory of the current directory
ROOT_DIR="$CURRENT_DIR/.."

# Creating SRC FOLDER
mkdir -p "$ROOT_DIR/src/modules"
mkdir -p "$ROOT_DIR/src/services"

# create hooks.ts file 
cat << EOF > "$ROOT_DIR/src/modules/hooks.ts"
import {MMKV, Mode} from 'react-native-mmkv';
export const useStorage = new MMKV({
  id: 'local-storage',
  encryptionKey: 'hunter2',
  mode: Mode.SINGLE_PROCESS,
});
EOF
echo "Hooks created successfully!"

# create themes.ts file 
cat << EOF > "$ROOT_DIR/src/modules/themes.ts"
import {useColorScheme} from 'react-native';

type colorTheme = {
  primary: string;
};

const LightTheme: colorTheme = {
  primary: '#123772',
};
const darkTheme: colorTheme = {
  primary: '#123772',
};
export const useTheme = () =>
  useColorScheme() === 'light' ? LightTheme : darkTheme;
export const Size = {
  sm: 10,
  md: 14,
  lg: 16,
  xl: 20,
  '2xl': 24,
  '3xl': 28,
  base: 4,
  paddingY: 6,
  padding: 8,
  paddingX: 12,
  radius: 16,
  containerPadding: 18,
};
export const fontFamily = {
  regular: 'Poppins-Regular',
  medium: 'Poppins-Medium',
  bold: 'Poppins-Bold',
};
EOF
echo "Theme created successfully!"

cat << EOF > "$ROOT_DIR/src/services/config.ts"
//Local server
export const BASE_URL: string = "";
export const API_KEY: string = "";
export const APPLICATION_KEY: string = "";

//Testing server
// export const BASE_URL: string = "";
// export const API_KEY: string = "";
// export const APPLICATION_KEY: string = "";

//Live server
// export const BASE_URL: string = "";
// export const API_KEY: string = "";
// export const APPLICATION_KEY: string = "";
EOF
echo "Service config created Successfully"

cat << EOF > "$ROOT_DIR/src/services/tokenStorage.ts"
import { MMKV, Mode } from "react-native-mmkv";
export const token = new MMKV({
  id: "token-storage",
  encryptionKey: "token_storage",
  mode: Mode.SINGLE_PROCESS,
});

class TokenStorageClass {
  getToken: () => string = () => {
    try {
      const tokenValue = token.getString("token_value");
      if (tokenValue) {
        return tokenValue;
      } else {
        return "";
      }
    } catch (error) {
      console.log("In getToken Error ", error);
      return "";
    }
  };
  setToken: (value: string) => boolean = (value) => {
    try {
      if (value) {
        token.set("token_value", value);
        return true;
      } else {
        return false;
      }
    } catch (error) {
      console.log("In setToken Error ", error);
      return false;
    }
  };
}

const tokenStorage = new TokenStorageClass();
export default tokenStorage;
EOF
echo "Token Storage created successfully!"

cat << EOF > "$ROOT_DIR/src/services/interceptors.ts"
import { API_KEY, APPLICATION_KEY, BASE_URL } from "./config";
import axios from "axios";
import { API_KEY, APPLICATION_KEY, BASE_URL } from "./config";
import tokenStorage from "./tokenStorage";

export const services = axios.create({
  baseURL: BASE_URL,
});

services.interceptors.request.use(async (config) => {
  const token = tokenStorage.getToken();
  if (token) {
    config.headers.token = token;
    config.headers.apiKey = API_KEY;
    config.headers.applicationKey = APPLICATION_KEY;
  } else {
    config.headers.token = "";
    config.headers.apiKey = API_KEY;
    config.headers.applicationKey = APPLICATION_KEY;
  }
  return config;
});
EOF

echo "Interceptors created successfully!"

rm -f "$ROOT_DIR/babel.config.js"
cat << EOF > "$ROOT_DIR/babel.config.js"
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: ['react-native-reanimated/plugin'],
};
EOF

rm -f "$ROOT_DIR/declarations.d.ts"
cat << EOF > "$ROOT_DIR/declarations.d.ts"
declare module '*.svg' {
  import React from 'react';
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}
declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
EOF

rm -f "$ROOT_DIR/metro.config.js"
cat << EOF > "$ROOT_DIR/metro.config.js"
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const {assetExts, sourceExts} = defaultConfig.resolver;

const config = {
  transformer: {
    babelTransformerPath: require.resolve(
      'react-native-svg-transformer/react-native',
    ),
  },
  resolver: {
    assetExts: assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...sourceExts, 'svg'],
  },
};

module.exports = wrapWithReanimatedMetroConfig(
  mergeConfig(defaultConfig, config),
);

EOF




cat << EOF > "$ROOT_DIR/src/interface.ts"
EOF
