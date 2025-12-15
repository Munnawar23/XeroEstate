import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const wp = (percentage: number) => (percentage * width) / 100;
export const hp = (percentage: number) => (percentage * height) / 100;
