#!/bin/bash

# Installation of dependencies
npm install --save @react-navigation/native react-native-screens react-native-safe-area-context @react-navigation/native-stack

# Get the current directory
CURRENT_DIR=$(pwd)

# Set ROOT_DIR to the parent directory of the current directory
ROOT_DIR="$CURRENT_DIR/.."

# Creating SRC FOLDER
mkdir -p "$ROOT_DIR/src/screens"

# Create routes.tsx file
cat << EOF > "$ROOT_DIR/src/routes.tsx"
import {NavigationContainer} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import { Dashboard } from './screens';
type StackParams = { Dashboard: undefined };
const Stack = createNativeStackNavigator<StackParams>();

export type StackProps<ScreenName extends keyof StackParams> =
  NativeStackScreenProps<StackParams, ScreenName>;

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Dashboard" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default Routes;
EOF

# Create Dashboard Screen in src/screens/Dashboard.tsx


cat << EOF > "$ROOT_DIR/src/screens/Dashboard.tsx"
import React from "react";
import {View, Text, StyleSheet} from "react-native";

interface DashboardProps {}
const Dashboard: React.FC<DashboardProps> = () => {
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      <Text>Dashboard</Text>
    </View>
  );
}
export default Dashboard
const styles = StyleSheet.create({});
EOF

# Create index.tsx file
cat << EOF > "$ROOT_DIR/src/screens/index.ts"
import Dashboard from "./Dashboard";
export { Dashboard };
EOF

# installing Pods
cd ../ios && pod install && cd ..

# Informing user actions

echo "Routes created successfully!"
echo "update your android/app/src/main/java/<package.name>/MainActivity.kt"
echo "import android.os.Bundle;"
echo "override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(null)
    }"
