import { View, Text, Image } from 'react-native';
import { styles } from './Previous.style';
import AppText from '../appText/AppText';
const PreviousResult = ({
  title1,
  title2,
  title3,
  source1,
  source2,
  backgroundcolor = '#FFFFFF',
}) => {
  return (
    <View style={[styles.previousResult, { backgroundcolor: backgroundcolor }]}>
      <Image source={source1} style={styles.avatar} />
      <View>
        <AppText style={styles.VolodymyrText}>{title1}</AppText>
        <Text>{title2}</Text>
      </View>
      <View style={styles.ratepts}>
        <Image source={source2} style={styles.star} />
        <Text style={styles.ptsstyle}>{title3}</Text>
      </View>
    </View>
  );
};
export default PreviousResult;
