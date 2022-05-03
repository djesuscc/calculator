import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#000',
  },
  calculatorContainer: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
  },
  resultText: {
    color: '#FFF',
    fontSize: 60,
    textAlign: 'right',
    marginBottom: 10,
  },
  smallResultText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 30,
    textAlign: 'right',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  btn: {
    height: 80,
    width: 80,
    borderRadius: 100,
    justifyContent: 'center',
    marginHorizontal: 8,
  },
  btnText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 30,
    color: '#FFF',
    fontWeight: '300',
  },
});
