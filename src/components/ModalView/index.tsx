import React, { ReactNode } from 'react';
import {
  Modal,
  ModalProps,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import { Background } from '../Background';

import { styles } from './styles';

type ModalViewProps = ModalProps & {
  children: ReactNode;
  hasTopBar?: boolean;
  marginTop?: number;
  closeModal: () => void;
};

export const ModalView = ({
  children,
  closeModal,
  hasTopBar = false,
  marginTop,
  ...otherProps
}: ModalViewProps) => (
  <Modal transparent animationType='slide' statusBarTranslucent {...otherProps}>
    <TouchableWithoutFeedback onPress={closeModal}>
      <View style={styles.overlay}>
        <View style={[styles.container, { marginTop }]}>
          <Background>
            {hasTopBar && <View style={styles.bar} />}
            {children}
          </Background>
        </View>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);
