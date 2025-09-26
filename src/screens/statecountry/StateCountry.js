import { View } from 'react-native/types_generated/index';
import AppText from '../../../components/appText/AppText';
import ProgressBar from '../../../components/progressBar/ProgressBar';

const StateCountry = () => {
  return (
    <View>
      <ProgressBar progress={'80%'} />
      <AppText></AppText>
    </View>
  );
};

export default StateCountry;
