import React from "react";
import {
  Text,
  TouchableOpacity,
} from "react-native";

const Btn = ({ title, color, onpress,  textcolor  }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: `${color}`,
        width: 256,
        height: 48,
        borderRadius: 5,
        padding: 2,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      onPress={() => onpress()}
    >
      <Text style={{ fontSize: 15, color: `${textcolor}`, alignSelf: "center" }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default Btn;

