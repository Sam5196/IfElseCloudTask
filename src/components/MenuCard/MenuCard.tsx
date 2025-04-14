import React from 'react';
import { View, Text } from 'react-native';
import { colors } from '../../styles/colors';
import { styles } from './styles';
import { Size } from '../../styles/fonts';
import * as Progress from 'react-native-progress';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const MenuCard: React.FC = () => {
  return (
    <Animated.View entering={FadeIn.duration(500)}
      exiting={FadeOut.duration(300)} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Lead Generation Campaign</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          gap: 5,
          alignItems: 'center'
        }}>
          <Text style={{
            color: colors.gray,
            fontSize: Size.sm,
            fontWeight: 'bold'
          }}>Lorem ipsum dolor sit amet,consectetur..</Text>
        </View>
        <View
          style={{
            width: 130,
            borderRadius: 3,
            overflow: 'hidden',
          }}
        >
          <Progress.Bar
            progress={0.4}
            animated={true}
            borderColor={colors.gray}
            color={colors.primaryDark}
            unfilledColor={colors.secondary}
            borderWidth={0}
            borderRadius={3}
            useNativeDriver={true}
          />
        </View>
        <View style={{
          flexDirection: 'row',
          gap: 12,
          // justifyContent:'space-between'
        }}>
          <View>
            <Text style={{
              color: colors.primaryDark,
              fontWeight: 'bold'
            }}>343</Text>
            <Text style={{
              color: colors.gray,
              fontSize: Size.md
            }}>Completed</Text>
          </View>
          <View>
            <Text style={{
              color: colors.primaryDark,
              fontWeight: 'bold'
            }}>368</Text>
            <Text style={{
              color: colors.gray,
              fontSize: Size.md
            }}>Pending</Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Product Launch Marketing</Text>
        </View>
        <View style={{
          flexDirection: 'row',
          gap: 5,
          alignItems: 'center'
        }}>
          <Text style={{
            color: colors.gray,
            fontSize: Size.sm,
            fontWeight: 'bold'
          }}>Lorem ipsum dolor sit amet,consectetur..</Text>
        </View>
        <View
          style={{
            width: 130,
            borderRadius: 3,
            overflow: 'hidden',
          }}
        >
          <Progress.Bar
            progress={0.6}
            animated={true}
            borderColor={colors.gray}
            color={colors.primaryDark}
            unfilledColor={colors.secondary}
            borderWidth={0}
            borderRadius={3}
            useNativeDriver={true}
          />
        </View>
        <View style={{
          flexDirection: 'row',
          gap: 12,
          // justifyContent:'space-between'
        }}>
          <View>
            <Text style={{
              color: colors.primaryDark,
              fontWeight: 'bold'
            }}>488</Text>
            <Text style={{
              color: colors.gray,
              fontSize: Size.md
            }}>Completed</Text>
          </View>
          <View>
            <Text style={{
              color: colors.primaryDark,
              fontWeight: 'bold'
            }}>105</Text>
            <Text style={{
              color: colors.gray,
              fontSize: Size.md
            }}>Pending</Text>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};



export default MenuCard;