export const isBrowser = typeof window !== 'undefined';
export const localStorageEffect =
  <T>(key: string) =>
  ({
    setSelf,
    onSet,
  }: {
    setSelf: (value: T) => void;
    onSet: (callback: (newValue: T, oldValue: T, isReset: boolean) => void) => void;
  }) => {
    if (isBrowser) {
      const savedValue = localStorage.getItem(key);
      if (savedValue != null) {
        setSelf(JSON.parse(savedValue));
      }
      onSet((newValue: T, oldValue: T, isReset: boolean) => {
        isReset
          ? localStorage.removeItem(key)
          : localStorage.setItem(key, JSON.stringify(newValue));
      });
    }
  };
/*
// https://recoiljs.org/docs/guides/atom-effects
// Original js
const localStorageEffect = key => ({setSelf, onSet}) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet((newValue, _, isReset) => {
    isReset
      ? localStorage.removeItem(key)
      : localStorage.setItem(key, JSON.stringify(newValue));
  });
};

* */
