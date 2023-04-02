import type { ReactElement } from 'react';
import { Flex } from '@mantine/core';
import dynamic from 'next/dynamic';
import useStyles from './Layout.styles';

const MyHeader = dynamic(
  () => import('@components/myHeader/myHeader').then((module) => module.MyHeader),
  { ssr: false }
);
const MyNavbar = dynamic(
  () => import('@components/myNavbar/myNavbar').then((module) => module.MyNavbar),
  { ssr: false }
);
interface LayoutProps {
  children: ReactElement;
}
export default function Layout({ children }: LayoutProps) {
  const { classes } = useStyles();

  return (
    <>
      <MyHeader />
      <Flex className={classes.navPageWrapper}>
        <MyNavbar />
        <div className={classes.pageWrapper}>{children}</div>
      </Flex>
    </>
  );
}
