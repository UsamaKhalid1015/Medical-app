import { View, Text, Image } from 'react-native';
import AppText from '../appText/AppText';
import { styles } from './PatientDetail.style';
import Start from '../start/Start';
import Try from '../try/Try';
const PatientDetail = ({ title, subtitle, showStart, showTry, image }) => {
  return (
    <View style={styles.patientDetailContainer}>
      <Image style={styles.patientImage} source={image} />
      <View style={styles.textContainer}>
        <AppText style={styles.patientAge}>{title}</AppText>
        <Text>{subtitle}</Text>
      </View>
      {showStart && (
        <View style={styles.startButton}>
          <Start title="Start" backgroundcolor="#2E62FF" color="white" />
        </View>
      )}
      {showTry && (
        <View style={styles.startButton}>
          <Try title="Retry" backgroundcolor="#005AFF14" color="#0038DCD8" />
        </View>
      )}
    </View>
  );
};
export default PatientDetail;
