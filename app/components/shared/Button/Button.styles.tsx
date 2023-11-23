 import { ViewStyle, TextStyle } from 'react-native';

 type ButtonStyleProps = {
   color: string;
 };
 
type TextStyleProps = {
    textColor: string;
  };

export const getButtonStyle = ({ color }: ButtonStyleProps): ViewStyle => ({
  backgroundColor: color,
  width: 256,
  height: 48,
  borderRadius: 5,
  padding: 2,
  flexDirection: "column",
  justifyContent: "center",
});

export const getTextStyle = ({ textColor }: TextStyleProps): TextStyle => ({
    fontSize: 15,
    color: textColor,
    alignSelf: "center",
  });
  