import React from "react";
import { Text } from "react-native";

const RLText = (props) => {

  const {
    style,
    onPress,
    RlnumberOfLines,
    key,
    text
  } = props;

  return (
    <Text style={style}
      onPress={onPress}
      numberOfLines={RlnumberOfLines}
      key={key}>
      {text}
    </Text>
  );
};
export default RLText;