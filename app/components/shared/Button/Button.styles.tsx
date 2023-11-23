 import { ViewStyle, TextStyle } from 'react-native';

 type ButtonStyleProps = {
   color: string;
   width:number
 };
 
type TextStyleProps = {
    textColor: string;
  };

export const getButtonStyle = ({ color, width }: ButtonStyleProps): ViewStyle => ({
  backgroundColor: color,
  width: width,
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
  