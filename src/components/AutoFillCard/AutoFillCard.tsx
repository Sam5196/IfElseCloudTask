import React, { useRef } from 'react';
import { View, Text, Animated, Easing, TouchableOpacity } from 'react-native';
import Card from '../Card/Card';
import { styles } from './styles';
import { globalStyles } from '../../styles/globalStyles';
import { colors } from '../../styles/colors';
import Icon from 'react-native-vector-icons/Feather';
import { Size } from '../../styles/fonts';

interface AutoFillCardProps {
    auto_fill_date: string;
    auto_fill_amount: string;

}

const AutoFillCard: React.FC<AutoFillCardProps> = ({
    auto_fill_date,
    auto_fill_amount
}) => {
    const rotation = useRef(new Animated.Value(0)).current;

    const handleRefresh = () => {
        Animated.timing(rotation, {
            toValue: 1,
            duration: 1200,
            easing: Easing.linear,
            useNativeDriver: true,
        }).start(() => {
            rotation.setValue(0);
        });

    };

    const rotateInterpolate = rotation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    const formattedDate = new Date(auto_fill_date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'short',
    });

    const amount = parseFloat(auto_fill_amount).toFixed(2);

    return (
        
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={globalStyles.title}>Activities this week</Text>
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
                        <Text style={globalStyles.title}>Activities this month</Text>
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
            </View>


    );
};

export default AutoFillCard;