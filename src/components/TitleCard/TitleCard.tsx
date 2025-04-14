import React from 'react';
import { View, Text } from 'react-native';
import { styles } from './styles';
import { colors } from '../../styles/colors';
import Icon from '../../styles/Icon';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

const TitleCard = () => {
    return (
        <Animated.View entering={FadeIn.duration(500)}
            exiting={FadeOut.duration(300)} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={[styles.container, { backgroundColor: colors.primary }]}>
                <View style={styles.header}>
                    <View style={{
                        padding: 8,
                        borderRadius: 20,
                        backgroundColor: colors.primaryDark,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Icon
                            type='FontAwesome'
                            name={'bell'}
                            size={12}
                            color={colors.white}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>Tips on increasing your go forward</Text>
                    </View>
                </View>
                <View style={styles.header}>
                    <View style={{ flex: 1 }}>
                        <Text style={{
                            fontSize: 10,
                            color: colors.white
                        }}>Lorem ipsum dolor sit amet,consectetur..</Text>
                    </View>
                    <View style={{
                        padding: 8,
                        borderRadius: 20,
                        backgroundColor: colors.white,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Icon
                            type='AntDesign'
                            name={'caretright'}
                            size={12}
                            color={colors.primary}
                        />
                    </View>
                </View>

            </View>

            <View style={[styles.container, { backgroundColor: '#5EDBAE' }]}>
                <View style={styles.header}>
                    <View style={{
                        padding: 8,
                        borderRadius: 20,
                        backgroundColor: '#34B549',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Icon
                            type='AntDesign'
                            name={'checksquare'}
                            size={12}
                            color={'#5EDBAE'}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>Weekly task has been completed!</Text>
                    </View>
                </View>
                <View style={styles.header}>
                    <View style={{ flex: 1 }}>
                        <Text style={{
                            fontSize: 10,
                            color: colors.white
                        }}>Lorem ipsum dolor sit amet,consectetur..</Text>
                    </View>
                    <View style={{
                        padding: 8,
                        borderRadius: 20,
                        backgroundColor: colors.white,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <Icon
                            type='AntDesign'
                            name={'checksquare'}
                            size={12}
                            color={'#5EDBAE'}
                        />
                    </View>

                </View>
            </View>
        </Animated.View>
    );
}




export default TitleCard;