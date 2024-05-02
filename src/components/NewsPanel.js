// eslint-disable-next-line no-unused-vars
import React from 'react';
import { AdaptivityProvider, ConfigProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';
import NewsPanel from './NewsPanel';

const App = () => {
    return (
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <NewsPanel />
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
};

export default App;
