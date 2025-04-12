import React from 'react';
import { Text, View } from 'react-native';
import Card from '../Card/Card';
import { styles } from './styles';
import { colors } from '../../styles/colors';
import { fonts, Size } from '../../styles/fonts';
import { globalStyles } from '../../styles/globalStyles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

interface BalanceCardProps {
    balance: number;
}

const BalanceCard: React.FC<BalanceCardProps> = ({ balance }) => {
    return (
        <View style={{
            backgroundColor:colors.white,
            padding:8,
            borderRadius:8,
            elevation:3
            }}>
            <View style={styles.container}>
                <View style={{ flexDirection: 'row', gap: 8 }}>
                    <View style={{
                        backgroundColor: colors.secondary,
                        borderRadius: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                        paddingVertical: 5,
                        paddingHorizontal: 10
                    }}>
                        <Entypo name="wallet" size={23} color={colors.primary} />
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
                    <AntDesign name="rightcircleo" size={23} color={colors.gray} />
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
                    marginLeft: 20,
                    flex: 1
                }}>
                    <Text style={{
                        color: colors.primaryDark,
                        fontWeight: 'bold',
                        fontFamily: fonts.regular,
                        fontSize: Size.lg
                    }}>10th Jul, 2020</Text>
                    <Text style={{
                        fontSize: Size.md,
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
                    }}>$20.00</Text>
                    <Text style={{
                        fontSize: Size.md,
                        color: colors.gray
                    }}>Auto fill amount</Text>
                </View>
            </View>
        </View>
    );
};

export default BalanceCard;