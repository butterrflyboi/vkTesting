import { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, SplitLayout, SplitCol, ScreenSpinner } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { Persik, Home } from './panels';
import { DEFAULT_VIEW_PANELS } from './routes';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();
  const [fetchedUser, setUser] = useState();
  const [popout, setPopout] = useState(<ScreenSpinner size="large" />);


  const { getTopStories } = require('./hackerNewsAPI');

// отображение получения данных
  async function displayTopStories() {
    try {
      const topStoriesIds = await getTopStories();
      // Здесь можно выполнить дополнительные действия с полученным списком
      console.log('Top stories IDs:', topStoriesIds);
    } catch (error) {
      console.error('Error displaying top stories:', error);
    }
  }

// Вызов функции для отображения списка топовых новостей
  displayTopStories();

  useEffect(() => {
    async function fetchData() {
      const user = await bridge.send('VKWebAppGetUserInfo');
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  return (
    <SplitLayout popout={popout}>
      <SplitCol>
        <View activePanel={activePanel}>
          <Home id="home" fetchedUser={fetchedUser} />
          <Persik id="persik" />
        </View>
      </SplitCol>
    </SplitLayout>
  );
};
