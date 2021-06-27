import React from 'react';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
import { SvgProps } from 'react-native-svg';
import { View, Text } from 'react-native';
import { useTheme } from '../../hooks/theme';

import { createStyles } from './styles';

type CategoryProps = RectButtonProps & {
  title: string;
  icon: React.FC<SvgProps>;
  checked?: boolean;
  hasCheckbox?: boolean;
};

export const Category = ({
  title,
  icon: Icon,
  checked = false,
  hasCheckbox = false,
  ...otherProps
}: CategoryProps) => {
  const { theme } = useTheme();
  const { secondary40, secondary50, secondary70, secondary85 } = theme.colors;
  const styles = createStyles(theme);

  return (
    <RectButton {...otherProps}>
      <LinearGradient
        style={styles.container}
        colors={[secondary50, secondary70]}
      >
        <LinearGradient
          colors={[checked ? secondary85 : secondary50, secondary40]}
          style={[styles.content, { opacity: checked ? 1 : 0.5 }]}
        >
          {hasCheckbox && (
            <View style={checked ? styles.checked : styles.check} />
          )}
          <Icon width={48} height={48} />
          <Text style={styles.title}>{title}</Text>
        </LinearGradient>
      </LinearGradient>
    </RectButton>
  );
};
