import React, { JSX, useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  StyleSheet,
  Text,
  View,
  ListRenderItem,
  RefreshControl,
  Image
} from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/store/store';
import { useDashboardData } from './src/hooks/useDashboardData';
import BalanceCard from './src/components/BalanceCard/BalanceCard';
import AutoFillCard from './src/components/AutoFillCard/AutoFillCard';
import ChartCard from './src/components/ChartCard/ChartCard';
import MenuCard from './src/components/MenuCard/MenuCard';
import LoadingSpinner from './src/components/LoadingSpinner/LoadingSpinner';
import { colors } from './src/styles/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Dashboard: React.FC = () => {
  const { data, loading, error, refetch } = useDashboardData();
  const [refreshing, setRefreshing] = useState(false);

  const handleRefresh = async () => {
    setRefreshing(true);
    await refetch();
    setRefreshing(false);
  };

  const cards = data
    ? [
      { id: '1', component: <BalanceCard balance={data.balance} /> },
      {
        id: '2',
        component: (
          <AutoFillCard
            auto_fill_date={data.auto_fill_date}
            auto_fill_amount={data.auto_fill_amount.toString()}
          />
        ),
      },
      { id: '3', component: <ChartCard /> },
      { id: '4', component: <MenuCard /> },
    ]
    : [];

  const renderItem: ListRenderItem<{ id: string; component: JSX.Element }> = ({
    item,
  }) => <View>{item.component}</View>;

  if (error) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      {/* {loading && <LoadingSpinner />} */}

      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 12
      }}>
        <View style={{
          justifyContent:'center'
        }}>
          <Text style={styles.profiletxt}>Hi, Clarence</Text>
          <View style={{ flexDirection: 'row', gap: 8 }}>
            <FontAwesome name="phone" size={20} color={colors.gray} />
            <Text style={{ fontSize: 14, color: colors.gray }}>(801)923-290</Text>
          </View>
        </View>
        <View style={{
          borderWidth:3,
          borderRadius:27,
          borderColor:colors.primaryDark
        }}>
          <Image source={require('./src/assets/profile.jpg')} 
          style={{width:50,height:50,borderRadius:27}}
          resizeMode='cover'/>
        </View>
      </View>

      <View style={{

        flex: 1,
        // width:'50%'
      }}>
        <View style={{
          flexDirection: 'row'
        }}>
          <FontAwesome name="phone" size={20} color={colors.gray} />
          <Text>Tips on increasing your go forward</Text>
        </View>
        <View>
          <Text>Tips on increasing your go forward</Text>
          <FontAwesome name="phone" size={20} color={colors.gray} />
        </View>
      </View>

      {!loading && data && (
        <FlatList
          data={cards}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
            />
          }
        />
      )}
    </SafeAreaView>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Dashboard />
    </Provider>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.secondary,
    marginHorizontal: 12
  },
  container: {
    padding: 12,
    gap: 8,
  },

  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorText: {
    color: colors.danger,
    fontSize: 16,
  },
  profiletxt: {
    fontSize: 22,
    color: colors.primaryDark,
    fontWeight: 'bold'
  }
});

export default App;
