import React from 'react';
import Recoil from 'recoil';

export const RecoilDebugObserver = () => {
  const snapshot = Recoil.useRecoilSnapshot();
  React.useEffect(() => {
    // console.log("The following atoms were modified:");
    const changedAtoms = snapshot.getNodes_UNSTABLE({ isModified: true });

    // eslint-disable-next-line no-restricted-syntax
    for (const node of changedAtoms) {
      // eslint-disable-next-line no-console
      console.log(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
};
