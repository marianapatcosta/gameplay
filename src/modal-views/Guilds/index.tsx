import React, { useCallback, useEffect, useState } from 'react';
import { View, FlatList, Alert, RefreshControl } from 'react-native';
import { GuildDataProps } from '../../components/Guild';
import { Guild, ListDivider, Loading, NoData } from '../../components';
import { useTheme } from '../../hooks/theme';
import { api } from '../../services/api';
import i18n from '../../i18n';

import { createStyles } from './styles';

type GuildsProps = {
  handleGuildSelect: (guild: GuildDataProps) => void;
};

export const Guilds = ({ handleGuildSelect }: GuildsProps) => {
  const [guilds, setGuilds] = useState<GuildDataProps[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  const { theme } = useTheme();
  const styles = createStyles(theme);

  const fetchGuilds = useCallback(async () => {
    try {
      const response = await api.get('/users/@me/guilds');
      setGuilds(response.data);
    } catch (error) {
      Alert.alert(i18n.t('global.anErrorOccurred'), i18n.t('guilds.error'));
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true);
    await fetchGuilds();
    setTimeout(() => {
      setIsRefreshing(false);
    }, 1000);
  }, []);

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
        ListFooterComponent={() => <ListDivider isCentered />}
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            onRefresh={() => handleRefresh()}
          />
        }
      />
    );
  };

  return (
    <View style={styles.container} accessible={true}>
      {renderContent()}
    </View>
  );
};
