import { View, Text, TouchableOpacity, Image } from 'react-native';
import ProgressBar from '../../../components/progressBar/ProgressBar';
import { styles } from './Correct.style';
import AppText from '../../../components/appText/AppText';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../components/button/Button';
const Correct = () => {
  const navigation = useNavigation();
  const handleNav = () => {
    navigation.navigate('scenarioscreen');
  };
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
        source={require('./../../assets/images/CorrectSign.png')}
        style={styles.correctstyle}
      />
      <View style={styles.correctdetail}>
        <AppText style={styles.titleStyle}>Correct!</AppText>
        <Text style={styles.titleExplain}>Most critical step.</Text>
        <Text style={styles.titleExplain}>
          The sooner they get to a facility the better chance they will have a
          successful outcome.
        </Text>
        <Text style={styles.titleExplain}>
          Remember, most positive outcomes occur in the hospital and not in the
          field. The goal of the field is to stabilize if possible and transport
        </Text>
      </View>
      <Button
        title={'Continue'}
        textColor="white"
        style={styles.btnStyle}
        onPress={handleNav}
      />
    </View>
  );
};
export default Correct;
