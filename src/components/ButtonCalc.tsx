import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../theme/appTheme';

interface Props {
  text: string;
  color?: string;
  wide?: boolean;
  action: (textNumber: string) => void;
}
const ButtonCalc = ({text, color = '#2D2D2D', wide = false, action}: Props) => {
  return (
    <TouchableOpacity onPress={() => action(text)}>
      <View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          ...styles.btn,
          backgroundColor: `${color}`,
          width: wide ? 170 : 80,
        }}>
        <Text
          style={{
            ...styles.btnText,
            color: `${color === '#9B9B9B' ? '#000' : '#FFF'}`,
          }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default ButtonCalc;
