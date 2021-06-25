import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { Category } from '../Category';
import { categories } from '../../utils/categories';
import { styles } from './styles';

type CategorySelectProps = {
  categorySelected: string;
  hasCheckbox?: boolean;
  handleCategorySelect: (categoryId: string) => void;
};

export const CategorySelect = ({
  categorySelected,
  handleCategorySelect,
  hasCheckbox = false,
  ...otherProps
}: CategorySelectProps) => (
  <ScrollView
    style={styles.container}
    horizontal
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{
      paddingRight: 40,
    }}
    {...otherProps}
  >
    {categories.map(({ id, title, icon }) => (
      <Category
        key={id}
        title={title}
        icon={icon}
        hasCheckbox={hasCheckbox}
        checked={id === categorySelected}
        onPress={() => handleCategorySelect(id)}
      />
    ))}
  </ScrollView>
);
