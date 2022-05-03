import {useRef, useState} from 'react';

enum Operators {
  add,
  split,
  multiply,
  subtract,
}
export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [beforeNumber, setBeforeNumber] = useState('0');
  const lastOperation = useRef<Operators>();

  const clean = () => {
    setNumber('0');
    setBeforeNumber('');
  };
  const constructNumber = (textNumber: string) => {
    // No aceptar doble punto
    if (number.includes('.') && textNumber === '.') {
      return;
    }
    if (number.startsWith('0') || number.startsWith('-0')) {
      // Punto Decimal
      if (textNumber === '.') {
        setNumber(number + textNumber);

        // Evaluar si es otro cero, y hay un punto
      } else if (textNumber === '0' && number.includes('.')) {
        setNumber(number + textNumber);

        //Evaluar sino es diferente de cero y no tiene un punto
      } else if (textNumber !== '0' && !number.includes('.')) {
        setNumber(textNumber);

        // Evitar 0.000
      } else if (textNumber === '0' && !number.includes('.')) {
        setNumber(textNumber);
      } else {
        setNumber(number + textNumber);
      }
    } else {
      setNumber(number + textNumber);
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const cleanLastNumber = () => {
    let negative = '';
    let tempNumber = number;
    if (number.includes('-')) {
      negative = '-';
      tempNumber = number.substring(1);
    }
    if (tempNumber.length > 1) {
      setNumber(negative + tempNumber.slice(0, -1));
    } else {
      setNumber('0');
    }
  };

  const changeNumberForBefore = () => {
    if (number.endsWith('.')) {
      setBeforeNumber(number.slice(0, -1));
    } else {
      setBeforeNumber(number);
    }
    setNumber('0');
  };

  const handleSplit = () => {
    changeNumberForBefore();
    lastOperation.current = Operators.split;
  };

  const handleAdd = () => {
    changeNumberForBefore();
    lastOperation.current = Operators.add;
  };

  const handleMultiply = () => {
    changeNumberForBefore();
    lastOperation.current = Operators.multiply;
  };

  const handleSubtract = () => {
    changeNumberForBefore();
    lastOperation.current = Operators.subtract;
  };

  const calculate = () => {
    const num1 = Number(number);
    const num2 = Number(beforeNumber);

    switch (lastOperation.current) {
      case Operators.add:
        setNumber(`${num1 + num2}`);
        break;
      case Operators.subtract:
        setNumber(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNumber(`${num1 * num2}`);
        break;
      case Operators.split:
        setNumber(`${num2 / num1}`);
        break;
    }
    setBeforeNumber('0');
  };

  return {
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
  };
};
