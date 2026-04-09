import { View, Text, TouchableOpacity, Image } from 'react-native';
import ProgressBar from '../../../components/progressBar/ProgressBar';
import { styles } from './Wrong.style';
import AppText from '../../../components/appText/AppText';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../components/button/Button';
const Wrong = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainViewarrow}>
      <View style={styles.threecomponent}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
          style={{ padding: 10 }}
        >
          <Image
            style={styles.arrow}
            source={require('./../../assets/images/Vector.png')}
          />
        </TouchableOpacity>
        <AppText>01 of 10</AppText>
      </View>
      <ProgressBar progress={'20%'} />
      <Image
        source={require('./../../assets/images/Wrongsign.png')}
        style={styles.correctstyle}
      />
      <View style={styles.correctdetail}>
        <AppText style={styles.titleStyle}>Wrong!</AppText>
        <Text style={styles.titleExplain}>
          Not correct, but not a critical error. Just be expeditious on doing
          these steps and transport as soon as possible.
        </Text>
        <Text style={styles.titleExplain}>
          Remember Afib does not mean the patient’s hear has stopped, and
          performing these might jeopardize the current rhythm. Most important
          is to transport where at the hospital can administer medication that
          will address the Afib
        </Text>
      </View>
      <Button title={'Continue'} textColor="white" style={styles.btnStyle} />
    </View>
  );
};
export default Wrong;
