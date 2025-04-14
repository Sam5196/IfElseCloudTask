import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../styles/colors';
import * as Progress from 'react-native-progress';
import { styles } from './styles';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const OveralTaskCard: React.FC = () => {
    return (
        <Animated.View entering={FadeIn.duration(500)}
            exiting={FadeOut.duration(300)} style={styles.container}>
            <View >
                <Progress.Circle
                    size={60}
                    thickness={5}
                    color={colors.white}
                    progress={0.76}
                    showsText={true}
                    formatText={() => '76%'}
                    textStyle={{ fontWeight: 'bold' }}
                    borderColor={colors.primary}
                    unfilledColor={colors.primaryDark}
                />
            </View>
            <View style={{ gap: 5 }}>
                <Text style={styles.title}>Overal Task Completion</Text>
                <Text style={styles.subtitle}>Achivement agains total call targeted{'\n'}for the mont of September</Text>
            </View>
        </Animated.View>

    );
};



export default OveralTaskCard;