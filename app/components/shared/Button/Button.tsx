import React from "react";
import {
  Text,
  TouchableOpacity,
} from "react-native";
import { getButtonStyle, getTextStyle } from "./Button.styles";



type Props = {
  title: string,
  color: string,
  textColor: string,
  width:number,
  onPress?: any,
}


const Button = ({ title, color, onPress, textColor, width }: Props) => {
  const buttonStyle = getButtonStyle({ color, width });
  const textStyle = getTextStyle({ textColor });
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

