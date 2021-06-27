import React, { ReactNode } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useTheme } from '../../hooks/theme';
import i18n from '../../i18n';

import { createStyles } from './styles';

type ConfirmModalProps = {
  title: string | ReactNode;
  onConfirm: () => void;
  onCancel: () => void;
};

export const ConfirmModal = ({
  title,
  onConfirm,
  onCancel,
}: ConfirmModalProps) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={styles.container} accessible={true}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>

      <View style={styles.buttons}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={onCancel}>
            <Text style={styles.buttonLabel}>{i18n.t('global.no')}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.confirmButton} onPress={onConfirm}>
            <Text style={styles.buttonLabel}>{i18n.t('global.yes')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
