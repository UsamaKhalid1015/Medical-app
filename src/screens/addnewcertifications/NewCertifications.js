import React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './NewCertifications.Style';
import AppText from '../../../components/appText/AppText';
import DropDownModal from '../../../components/dropdownmodal/DropDownModal';
import Button from '../../../components/button/Button';
import { ScrollView } from 'react-native';

const certificate = [
  { id: '1', name: 'State License' },
  { id: '2', name: 'National Registry' },
  { id: '3', name: 'CPR' },
  { id: '4', name: 'ITLS' },
  { id: '5', name: 'CPR' },
  { id: '6', name: 'PHTLS' },
  { id: '7', name: 'PALS' },
  { id: '8', name: 'ACLS' },
  { id: '9', name: 'EVOK' },
  { id: '10', name: 'FPC' },
];

const NewCertifications = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
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

          <AppText style={styles.titleText}>Add new certifications</AppText>
        </View>
        <View style={styles.subContainer}>
          <DropDownModal
            placeholder={'Select certification'}
            title={'Certification'}
            placeholderColor="black"
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

          <View style={styles.image}>
            <View style={styles.inputImage}>
              <Image
                style={styles.uploadImage}
                source={require('../../assets/images/uploadeimage.png')}
              />
              <TouchableOpacity activeOpacity={0.7}>
                <AppText style={styles.clickUploading}>Click to upload</AppText>
              </TouchableOpacity>
              <Text style={styles.imagefont}>
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </Text>
            </View>
          </View>
        </View>
        <Button
          style={styles.bottomButton}
          title={'Add certification'}
          textColor="white"
        />
      </View>
    </ScrollView>
  );
};

export default NewCertifications; // ✅ must use default export
