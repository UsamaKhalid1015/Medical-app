import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import { styles } from './Edit.Styles';
import AppText from '../../../components/appText/AppText';
import DropDownModal from '../../../components/dropdownmodal/DropDownModal';
import Button from '../../../components/button/Button';
import { ScrollView } from 'react-native';
const EditCertifications = ({ navigation }) => {
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

          <AppText style={styles.titleText}>Edit certificaitons</AppText>
        </View>
        <View style={styles.modelContainer}>
          <DropDownModal
            placeholder={'Choose certificate'}
            title={'Certificacitons'}
            titleStyle={{ fontWeight: 'normal' }}
            placeholderColor="black"
          />
        </View>
        <Text style={styles.certificateText}>Add expiration date</Text>
        <View style={styles.dateMonth}>
          <TextInput style={styles.monthStyle} placeholder="01"></TextInput>
          <TextInput style={styles.monthStyle} placeholder="2027"></TextInput>
        </View>
        <Text style={styles.licenseText}>Enter License #</Text>
        <TextInput style={styles.license} placeholder="License number" />
        <View style={styles.imageContainer}>
          <AppText>Add image</AppText>
          <Text>(Optional)</Text>
        </View>
        <View style={styles.subContainer}>
          <Image
            source={require('../../assets/images/random-icon1.png')}
            style={styles.imageStyle}
          />
          <TouchableOpacity activeOpacity={0.7} style={styles.textRemove}>
            <AppText>Remove</AppText>
          </TouchableOpacity>
        </View>
        <Button
          title={'Delete my account'}
          textColor={'#C62A2F'}
          style={styles.btnStyle}
        />
        <Button
          title={'Save changes'}
          textColor={'white'}
          style={styles.btnStyle1}
        />
      </View>
    </ScrollView>
  );
};
export default EditCertifications;
