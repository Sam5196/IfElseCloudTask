import React, { ReactNode } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { globalStyles } from '../../styles/globalStyles';

interface CardProps {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  animated?: boolean;
}

const Card: React.FC<CardProps> = ({ children, style, animated = true }) => {
  const cardStyle = [globalStyles.card, globalStyles.shadow, style];

  if (animated) {
    return (
      <Animated.View
        entering={FadeIn.duration(500)}
        exiting={FadeOut.duration(300)}
        style={cardStyle}
      >
        {children}
      </Animated.View>
    );
  }

  return <View style={cardStyle}>{children}</View>;
};

export default Card;