import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useSafePadding = () => {
  const { top, bottom, left, right } = useSafeAreaInsets();

  const paddingTop = top > 0 ? top + 10 : 30;

  return {
    paddingTop,
    paddingBottom: bottom,
    paddingLeft: left,
    paddingRight: right,
  };
};
