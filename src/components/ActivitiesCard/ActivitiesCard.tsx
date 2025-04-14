import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { Size } from '../../styles/fonts';
import Icon from '../../styles/Icon';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const ActivitiesCard = () => {
    return (
        <Animated.View entering={FadeIn.duration(500)}
            exiting={FadeOut.duration(300)} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Activities this week</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    gap: 5,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: colors.danger,
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>136</Text>
                    <Text style={{
                        color: colors.danger,
                        fontSize: 16,
                    }}>Calls</Text>
                    <Icon
                        type='Feather'
                        name={'arrow-down-left'}
                        size={12}
                        color={colors.danger}
                    />
                    <Text style={{
                        color: colors.danger,
                        fontSize: 12,
                        fontWeight: 'bold'
                    }}>-7.6%</Text>
                </View>
                <View>
                    <Text style={{
                        fontSize: Size.sm,
                        color: colors.gray
                    }}>Avg. 26 calls per day</Text>
                </View>
            </View>

            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Activities this month</Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    gap: 5,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        color: colors.success,
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>986</Text>
                    <Text style={{
                        color: colors.success,
                        fontSize: 16,
                    }}>Calls</Text>
                    <Icon
                        type='Feather'
                        name={'arrow-up-right'}
                        size={12}
                        color={colors.success}
                    />
                    <Text style={{
                        color: colors.success,
                        fontSize: 12,
                        fontWeight: 'bold'
                    }}>-10.6%</Text>
                </View>
                <View>
                    <Text style={{
                        fontSize: Size.sm,
                        color: colors.gray
                    }}>Avg. 146 calls per week</Text>
                </View>
            </View>
        </Animated.View>

    );
};

export default ActivitiesCard;