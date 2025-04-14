import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import Icon from '../../styles/Icon';

const filters = [
  { id: 1, label: 'Recent', key: 'recent' },
  { id: 2, label: 'All Group', key: 'all_group' },
  { id: 3, label: 'Achieved', key: 'achieved' },
  { id: 4, label: 'Filter', key: 'filter', icon: 'sliders' },
];

const Filter: React.FC = () => {
  return (
    <View style={styles.container}>
      {filters.map(item => (
        <TouchableOpacity key={item.id} style={styles.filterButton}>
          {item.key === 'filter' ? (
            <Icon type='FontAwesome' name={item.icon || 'filter'} size={20} color="#888" />
          ) : (
            <Text
              style={[
                styles.label,
                item.key === 'recent' && styles.recentLabel,
              ]}
            >
              {item.label}
            </Text>
          )}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default Filter;
