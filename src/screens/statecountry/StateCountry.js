import { View, Image, TouchableOpacity } from 'react-native';
import AppText from '../../../components/appText/AppText';
import ProgressBar from '../../../components/progressBar/ProgressBar';
import { styles } from './State.styles';
import DropDownModal from '../../../components/dropdownmodal/DropDownModal';
import NewDropdownModal from '../../../components/dropdownmodal/NewDropdownmodal';
import { useNavigation } from '@react-navigation/native';
import Button from '../../../components/button/Button';

const countries = [
  { id: 1, name: 'United States', code: 'US' },
  { id: 2, name: 'Canada', code: 'CA' },
  { id: 3, name: 'United Kingdom', code: 'UK' },
  { id: 4, name: 'Australia', code: 'AU' },
];

const states = [
  { id: 1, name: 'California', code: 'CA' },
  { id: 2, name: 'Texas', code: 'TX' },
  { id: 3, name: 'New York', code: 'NY' },
  { id: 4, name: 'Florida', code: 'FL' },
];

const StateCountry = () => {
  const handleNav = () => {
    navigation.navigate('yourcertification');
  };
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.mainViewarrow}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.arrow}
            source={require('./../../assets/images/Vector.png')}
          />
        </TouchableOpacity>
        <ProgressBar progress={'80%'} />
        <AppText style={styles.emtText}>
          What state and county are you working in?
        </AppText>
        <DropDownModal
          title={'State'}
          placeholder={'Select State'}
          data={states}
        />
        <DropDownModal
          title={'Country'}
          data={countries}
          placeholder={'Select country'}
        />
      </View>
      <Button
        onPress={handleNav}
        style={styles.bottomButton}
        title={'continue'}
      />
    </View>
  );
};

export default StateCountry;
