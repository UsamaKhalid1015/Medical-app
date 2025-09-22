import { TouchableOpacity } from 'react-native';
import AppText from '../appText/AppText';
import { styles } from './Button.styles';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={styles.container}
    >
      <AppText style={styles.btnText}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default Button;
