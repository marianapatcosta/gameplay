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
  closeModal: () => void;
};

export const ModalView = ({
  children,
  closeModal,
  ...otherProps
}: ModalViewProps) => (
  <Modal transparent animationType='slide' statusBarTranslucent {...otherProps}>
    <TouchableWithoutFeedback onPress={closeModal}>
      <View style={styles.overlay}>
        <View style={styles.container}>
          <Background>
            <View style={styles.bar} />
            {children}
          </Background>
        </View>
      </View>
    </TouchableWithoutFeedback>
  </Modal>
);
