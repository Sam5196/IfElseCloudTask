import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { fonts, Size } from '../../styles/fonts';
import { format } from 'date-fns';
import { parseISO } from 'date-fns';
import Icon from '../../styles/Icon';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

interface BalanceCardProps {
    balance: number;
    auto_fill_amount: string;
    auto_fill_date: string;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ balance, auto_fill_amount, auto_fill_date }) => {
    return (
        <Animated.View style={{
            backgroundColor: colors.white,
            padding: 8,
            borderRadius: 8,
            elevation: 3
        }} entering={FadeIn.duration(500)}
            exiting={FadeOut.duration(300)}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    <View style={{
                        backgroundColor: colors.secondary,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        flex: 1,
                        paddingHorizontal: 0,
                        paddingVertical: 0
                    }}>
                        <Icon type='Entypo' name="wallet" size={23} color={colors.primary} />
                    </View>
                    <View>
                        <Text style={styles.balance}>${balance.toLocaleString()}</Text>
                        <Text style={{
                            fontSize: 14,
                            color: colors.gray
                        }}>Wallet Balance</Text>
                    </View>
                </View>

                <View style={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Icon type='AntDesign' name="rightcircleo" size={23} color={colors.gray} />
                </View>

            </View>
            <View style={{
                borderWidth: 0.5,
                borderColor: colors.gray,

            }} />

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 10,
                flex: 1
            }}>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    marginLeft: 10,
                    flex: 1
                }}>
                    <Text style={{
                        color: colors.primaryDark,
                        fontWeight: 'bold',
                        fontFamily: fonts.regular,
                        fontSize: Size.lg
                    }}>{format(parseISO(auto_fill_date), "do MMMM, yyyy")}</Text>
                    <Text style={{
                        fontSize: Size.sm,
                        color: colors.gray
                    }}>Auto fill date</Text>
                </View>
                <View style={{
                    borderWidth: 0.5,
                    borderColor: colors.gray,
                }} />
                <View
                    style={{ flex: 1, marginLeft: 20 }}>
                    <Text style={{
                        color: colors.primaryDark,
                        fontWeight: 'bold',
                        fontFamily: fonts.regular,
                        fontSize: Size.lg
                    }}>${auto_fill_amount}</Text>
                    <Text style={{
                        fontSize: Size.sm,
                        color: colors.gray
                    }}>Auto fill amount</Text>
                </View>
            </View>
        </Animated.View>
    );
};

export default BalanceCard;