import { View, Image, ScrollView, TouchableOpacity } from 'react-native';
import { styles } from './Trauma.style';
import AppText from '../../../components/appText/AppText';
import PatientDetail from '../../../components/patientdetail/PatientDetail';
import { useNavigation } from '@react-navigation/native';

const TraumaEmergencies = () => {
  const navigation = useNavigation();

  return (
    <ScrollView
      style={styles.topContainer} // top-level container styling
      contentContainerStyle={{ paddingBottom: 20 }} // extra space at the bottom
      showsVerticalScrollIndicator={false} // hide vertical scrollbar
    >
      <View style={styles.mainContainer}>
        <View style={styles.headingContainer}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={require('../../assets/images/Vector.png')}
              style={styles.arrow}
            />
          </TouchableOpacity>

          <AppText style={styles.titleText}>Trauma Emergencies</AppText>
        </View>

        <PatientDetail
          title="23 year old male breaks arm while playing soccer"
          subtitle="No Score"
          image={require('../../assets/images/imageA.png')}
          showStart="true"
        />
        <PatientDetail
          title="23 year old male breaks arm while playing soccer"
          subtitle="No Score"
          image={require('../../assets/images/imageA.png')}
          showStart="true"
        />
        <PatientDetail
          title="23 year old male breaks arm while playing soccer"
          subtitle="No Score"
          image={require('../../assets/images/imageA.png')}
          showStart="true"
        />
        <PatientDetail
          title="23 year old male breaks arm while playing soccer"
          subtitle="83%"
          image={require('../../assets/images/imageA.png')}
          showTry={true}
        />
        <PatientDetail
          title="23 year old male breaks arm while playing soccer"
          subtitle="94%"
          image={require('../../assets/images/imageA.png')}
          showTry={true}
        />
        <PatientDetail
          title="23 year old male breaks arm while playing soccer"
          subtitle="52%"
          image={require('../../assets/images/imageA.png')}
          showTry={true}
        />
      </View>
    </ScrollView>
  );
};

export default TraumaEmergencies;
