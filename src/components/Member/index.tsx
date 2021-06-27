import React from 'react';
import { Text, View } from 'react-native';

import i18n from '../../i18n';
import { Avatar } from '../Avatar';
import { useTheme } from '../../hooks/theme';

import { createStyles } from './styles';

export type MemberDataProps = {
  id: string;
  username: string;
  avatar_url: string;
  status: string;
};

type MemberProps = {
  data: MemberDataProps;
};

export const Member = ({ data }: MemberProps) => {
  const { avatar_url, username, status } = data;
  const isOnline = status === 'online';

  const { theme } = useTheme();
  const { on, primary } = theme.colors;
  const styles = createStyles(theme);

  return (
    <View style={styles.container}>
      <Avatar urlImage={avatar_url} />
      <View style={styles.text}>
        <Text style={styles.title}>{username}</Text>
        <View style={styles.status}>
          <View
            style={[
              styles.bulletStatus,
              { backgroundColor: isOnline ? on : primary },
            ]}
          />

          <Text style={styles.nameStatus}>
            {isOnline ? i18n.t('member.online') : i18n.t('member.offline')}
          </Text>
        </View>
      </View>
    </View>
  );
};
