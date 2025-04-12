// LoadingSpinner.tsx
import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
// import { styles } from './styles';
import { colors } from '../../styles/colors';
import { styles } from '../BalanceCard/styles';

const LoadingSpinner: React.FC = () => {
  return (
    <Animated.View 
      entering={FadeIn.duration(300)}
      exiting={FadeOut.duration(200)}
      style={styles.container}
    >
      <ActivityIndicator size="large" color={colors.primary} />
    </Animated.View>
  );
};

export default LoadingSpinner;