import { View, Text } from 'react-native';
import { styles } from './Start.style';
const Start = ({ title, backgroundcolor, color }) => {
  return (
    <View style={[styles.startContainer, { backgroundColor: backgroundcolor }]}>
      <Text style={[styles.startText, { color: color }]}>{title}</Text>
    </View>
  );
};
export default Start;
