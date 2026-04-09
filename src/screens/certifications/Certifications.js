import { styles } from './Certification.Styles';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import AppText from '../../../components/appText/AppText';
import PatientDetail from '../../../components/patientdetail/PatientDetail';
const Certifications = ({ navigation }) => {
  return (
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

        <AppText style={styles.titleText}>Certifications</AppText>
      </View>
      <View style={styles.certificationContainer}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.addRow}
          onPress={() => navigation.navigate('addnewcertifications')}
        >
          <Text style={styles.plus}>+</Text>
          <Text style={styles.titleColor}>Add new Certification</Text>
        </TouchableOpacity>
      </View>
      <PatientDetail
        title="National Registry"
        subtitle="exp: April 2025"
        image={require('../../assets/images/random-icon.png')}
      />
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate('editcertifications')}
      >
        <PatientDetail
          title="National Registry"
          subtitle="exp: April 2025"
          image={require('../../assets/images/random-icon1.png')}
        />
      </TouchableOpacity>
      <PatientDetail
        title="National Registry"
        subtitle="exp: April 2025"
        image={require('../../assets/images/random-icon.png')}
      />
      <PatientDetail
        title="National Registry"
        subtitle="exp: April 2025"
        image={require('../../assets/images/random-icon.png')}
      />
    </View>
  );
};
export default Certifications;
