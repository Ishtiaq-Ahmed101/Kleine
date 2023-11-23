import React from "react";
import {
  Text,
  TouchableOpacity,
} from "react-native";
import { getButtonStyle, getTextStyle } from "./Button.styles";

type Props = {
  title: string,
  color: string,
  textColor: string
  onPress?: () => void,
}


const Button = ({ title, color, onPress,  textColor  }: Props) => {
  const buttonStyle = getButtonStyle({ color });
  const textStyle = getTextStyle({ textColor });
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

