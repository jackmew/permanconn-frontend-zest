import { useState, useEffect } from 'react';
import { Welcome } from '@components/Welcome/Welcome';
import { useWelcome } from '@components/Welcome/useWelcome';

// type Props = {};
const WelcomePage = () => {
  // const { getToken, userState, getUser } = useWelcome();
  //
  // useEffect(() => {
  //   getUser();
  // }, []);

  return (
    <>
      <Welcome />
    </>
  );
};
export default WelcomePage;
