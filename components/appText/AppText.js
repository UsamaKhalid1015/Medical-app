import { Text } from 'react-native';
import { styles } from './AppText.styles';

const AppText = ({ children, onPress, numberOfLines, style }) => {
  return (
    <Text
      style={[styles.textStyle, style]}
      minimumFontScale={34}
      onPress={onPress}
      numberOfLines={numberOfLines}
    >
      {children}
    </Text>
  );
};

export default AppText;
