import React, { useEffect, useState } from 'react';
import { View, FlatList, Alert, Text } from 'react-native';
import { GuildDataProps } from '../../components/Guild';
import { Guild, ListDivider, Loading, NoData } from '../../components';

import { styles } from './styles';
import { api } from '../../services/api';
import i18n from '../../i18n';

type GuildsProps = {
  handleGuildSelect: (guild: GuildDataProps) => void;
};

export const Guilds = ({ handleGuildSelect }: GuildsProps) => {
  const [guilds, setGuilds] = useState<GuildDataProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchGuilds = async () => {
    try {
      const response = await api.get('/users/@me/guilds');
      setGuilds(response.data);
    } catch (error) {
      Alert.alert(i18n.t('global.anErrorOccurred'), i18n.t('guilds.error'));
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGuilds();
  }, []);

  const renderContent = () => {
    if (isLoading) {
      return <Loading />;
    }

    if (!guilds.length) {
      return <NoData message={i18n.t('guilds.noGuilds')} />;
    }

    return (
      <FlatList
        style={styles.guilds}
        data={guilds}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Guild data={item} onPress={() => handleGuildSelect(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ItemSeparatorComponent={() => <ListDivider isCentered />}
        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
        ListHeaderComponent={() => <ListDivider isCentered />}
      />
    );
  };

  return (
    <View style={styles.container} accessible={true}>
      {renderContent()}
    </View>
  );
};
