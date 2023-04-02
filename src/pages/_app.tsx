import { useState } from 'react';
import NextApp, { AppProps, AppContext } from 'next/app';
import { getCookie, setCookie } from 'cookies-next';
import Head from 'next/head';
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
  MantineThemeOverride,
} from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';
import { RecoilRoot } from 'recoil';
import { RecoilDebugObserver } from '@recoil/tools/RecoilDebugObserver';
import Layout from '@components/Layout/Layout';
import { myTheme } from '@globals/theme';
import { ConfirmModal } from '@components/myModals';

const App = (props: AppProps & { colorScheme: ColorScheme; url: string }) => {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(props.colorScheme);

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === 'dark' ? 'light' : 'dark');
    setColorScheme(nextColorScheme);
    setCookie('mantine-color-scheme', nextColorScheme, { maxAge: 60 * 60 * 24 * 30 });
  };

  const theme: MantineThemeOverride = {
    colorScheme,
    ...myTheme,
  };

  return (
    <>
      <Head>
        <title>Permanconn</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/public/favicon.png" />
      </Head>

      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
          <ModalsProvider modals={{ confirm: ConfirmModal }}>
            <RecoilRoot>
              <RecoilDebugObserver />
              <Notifications position="bottom-right" />
              <Layout {...pageProps}>
                <Component {...pageProps} />
              </Layout>
            </RecoilRoot>
          </ModalsProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  );
};

App.getInitialProps = async (appContext: AppContext) => {
  const appProps = await NextApp.getInitialProps(appContext);
  return {
    ...appProps,
    colorScheme: getCookie('mantine-color-scheme', appContext.ctx) || 'dark',
    url: process.env.URL,
  };
};

export default App;
