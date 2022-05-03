import React from 'react';
import {Text, View} from 'react-native';
import ButtonCalc from '../components/ButtonCalc';
import {styles} from '../theme/appTheme';
import {useCalculator} from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    clean,
    number,
    calculate,
    handleAdd,
    handleSplit,
    beforeNumber,
    handleMultiply,
    handleSubtract,
    constructNumber,
    cleanLastNumber,
    positiveNegative,
  } = useCalculator();
  return (
    <View style={styles.calculatorContainer}>
      {beforeNumber !== '0' && (
        <Text style={styles.smallResultText}>{beforeNumber}</Text>
      )}
      <Text style={styles.resultText} numberOfLines={1} adjustsFontSizeToFit>
        {number}
      </Text>
      <View style={styles.row}>
        <ButtonCalc text="C" color="#9B9B9B" action={clean} />
        <ButtonCalc text="+/-" color="#9B9B9B" action={positiveNegative} />
        <ButtonCalc text="del" color="#9B9B9B" action={cleanLastNumber} />
        <ButtonCalc text="/" color="#FF9427" action={handleSplit} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="7" action={constructNumber} />
        <ButtonCalc text="8" action={constructNumber} />
        <ButtonCalc text="9" action={constructNumber} />
        <ButtonCalc text="X" color="#FF9427" action={handleMultiply} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="4" action={constructNumber} />
        <ButtonCalc text="5" action={constructNumber} />
        <ButtonCalc text="6" action={constructNumber} />
        <ButtonCalc text="-" color="#FF9427" action={handleSubtract} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="1" action={constructNumber} />
        <ButtonCalc text="2" action={constructNumber} />
        <ButtonCalc text="3" action={constructNumber} />
        <ButtonCalc text="+" color="#FF9427" action={handleAdd} />
      </View>
      <View style={styles.row}>
        <ButtonCalc text="0" action={constructNumber} wide />
        <ButtonCalc text="." action={constructNumber} />
        <ButtonCalc text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
