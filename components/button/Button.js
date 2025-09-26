import { TouchableOpacity } from 'react-native';
import AppText from '../appText/AppText';
import { styles } from './Button.styles';

const Button = ({ title, onPress, style, btnText }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, style]}
    >
      <AppText style={[styles.btnText, btnText]}>{title}</AppText>
    </TouchableOpacity>
  );
};

export default Button;
