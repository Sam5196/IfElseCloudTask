import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Card from '../Card/Card';
import { colors } from '../../styles/colors';
import { styles } from './styles';
import { Size } from '../../styles/fonts';
import { globalStyles } from '../../styles/globalStyles';

const menuItems = [
  { icon: 'credit-card', label: 'Cards' },
  { icon: 'exchange', label: 'Transactions' },
  { icon: 'pie-chart', label: 'Statistics' },
  { icon: 'cog', label: 'Settings' },
];

const MenuCard: React.FC = () => {
  return (
    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={globalStyles.title}>Lead Generation Campaign</Text>
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



export default MenuCard;