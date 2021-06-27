import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

import { useTheme } from '../../hooks/theme';
import { Category } from '../Category';
import { categories } from '../../utils/categories';

import { createStyles } from './styles';

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
}: CategorySelectProps) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
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
};
