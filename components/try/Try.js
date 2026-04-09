import { View, Text } from 'react-native';
import { styles } from './Try.style';
const Try = ({ title, backgroundcolor, color }) => {
  return (
    <View style={[styles.tryContainer, { backgroundColor: backgroundcolor }]}>
      <Text style={[styles.tryText, { color: color }]}>{title}</Text>
    </View>
  );
};
export default Try;
