import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from './Certification.styles';
import ProgressBar from '../../../components/progressBar/ProgressBar';
import { useNavigation } from '@react-navigation/native';
import AppText from '../../../components/appText/AppText';
import DropDownModal from './../../../components/dropdownmodal/DropDownModal';
import { TextInput } from 'react-native-gesture-handler';
import Button from '../../../components/button/Button';

const certificate = [
  { id: '1', name: 'Health' },
  { id: '2', name: 'First Aid' },
  { id: '3', name: 'CPR' },
  { id: '4', name: 'Fire Safety' },
  { id: '5', name: 'Workplace Safety' },
  { id: '6', name: 'Food Handling' },
  { id: '7', name: 'Child Care' },
  { id: '8', name: 'Elder Care' },
  { id: '9', name: 'Disaster Management' },
  { id: '10', name: 'Paramedic Training' },
  { id: '11', name: 'Hazardous Materials' },
  { id: '12', name: 'Bloodborne Pathogens' },
  { id: '13', name: 'Emergency Medical Technician' },
  { id: '14', name: 'Advanced Cardiac Life Support' },
  { id: '15', name: 'Basic Life Support' },
];

const YourCertification = () => {
  const handleNav = () => {
    navigation.navigate('homepage');
  };

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.mainViewarrow}>
        <View style={styles.arrowSkip}>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.goBack()}
          >
            <Image
              style={styles.arrow}
              source={require('./../../assets/images/Vector.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7}>
            <Text style={styles.skipNow}>Skip for now </Text>
          </TouchableOpacity>
        </View>
        <ProgressBar progress={'90%'} />
        <View style={styles.formStyle}>
          <AppText style={styles.certificationText}>
            Add your certificaton
          </AppText>
          <Text style={styles.certificateText1}>Certificatiion</Text>
          <DropDownModal
            placeholder={'Choose certificate'}
            title={'Select Certification'}
            data={certificate}
          />

          <Text style={styles.certificateText}>Add expiration date</Text>
          <View style={styles.dateMonth}>
            <TextInput style={styles.monthStyle} placeholder="MM"></TextInput>
            <TextInput style={styles.monthStyle} placeholder="YYYY"></TextInput>
          </View>
          <Text style={styles.licenseText}>Enter License #</Text>
          <TextInput style={styles.license} placeholder="License number" />
          <Text style={styles.licenseText}>Add Image(optional)</Text>
        </View>
      </View>
      <Button
        onPress={handleNav}
        style={styles.bottomButton}
        title={'Add certification'}
      />
    </View>
  );
};

export default YourCertification;
