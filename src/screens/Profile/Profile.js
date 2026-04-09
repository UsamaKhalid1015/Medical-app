import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Switch } from 'react-native';
import { styles } from './Profile.style';
import AppText from '../../../components/appText/AppText';
import DropDownModal from '../../../components/dropdownmodal/DropDownModal';
import Button from '../../../components/button/Button';
import { ScrollView } from 'react-native-gesture-handler';

const Profile = ({ navigation }) => {
  // ✅ Added state for certifications
  const [certifications, setCertifications] = useState([]);

  // ✅ State for Switch
  const [isActive, setIsActive] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.profileLogo}
              source={require('../../assets/images/Icon.png')}
            />
            <AppText style={styles.profileText}>Profile</AppText>
          </View>
          <View style={styles.headingContainer}>
            <View style={styles.avatarText}>
              <Image
                style={styles.avatar}
                source={require('../../assets/images/Avatar.png')}
              />
              <AppText style={styles.title}>Volodymyr Boiarinov</AppText>
            </View>
            <View>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('profilesetting')}
              >
                <Image
                  style={styles.settingIcon}
                  source={require('../../assets/images/setting.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          {/* ✅ Only this section was modified */}
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => navigation.navigate('certifications')}
          >
            <View style={styles.certificateContainer}>
              <View style={styles.certificationImage}>
                <Image
                  style={styles.Feame}
                  source={require('../../assets/images/Frame.png')}
                />
                <View>
                  <AppText style={styles.certificateText}>
                    {certifications.length > 0
                      ? 'Certifications'
                      : 'Add Certifications'}
                  </AppText>

                  {certifications.length > 0 && (
                    <Text>{certifications.length} certificates</Text>
                  )}
                </View>
              </View>
              <View>
                <Image
                  style={styles.more}
                  source={require('../../assets/images/more.png')}
                />
              </View>
            </View>
          </TouchableOpacity>
          {/* ✅ End of modified section */}

          <View style={styles.messageBox}>
            <Image
              source={require('../../assets/images/message.png')}
              style={styles.message}
            />
            <View>
              <AppText style={styles.letText}>
                Let us know what you think!
              </AppText>
              <Text style={styles.shareText}>
                Share your experience with us
              </Text>
            </View>
          </View>
          <View style={styles.detailContainer}>
            <View style={styles.toggleText}>
              <AppText>Actively working</AppText>
              {/* ✅ Functional Switch */}
              <Switch
                value={isActive}
                onValueChange={value => setIsActive(value)}
                trackColor={{ false: '#ccc', true: 'green' }}
                thumbColor={'#fff'}
              />
            </View>
            <DropDownModal
              placeholder={'Paramedic'}
              title={'Role'}
              placeholderColor="black"
            />
            <DropDownModal
              placeholder={'State name'}
              title={'State'}
              placeholderColor="black"
            />
            <DropDownModal
              placeholder={'Country name'}
              title={'Country'}
              placeholderColor="black"
            />
            <Button
              title={'Delete my account'}
              textColor={'#C62A2F'}
              style={styles.btnStyle}
            />
          </View>
          <View style={styles.lastLine}>
            <View style={styles.termsstyle}>
              <Text style={styles.termsPrivacy}>Terms Of Service</Text>
              <Text style={styles.termsPrivacy}>Privacy Policy</Text>
            </View>
            <Text>
              © 2024 Solver Healthcare LLC. All rights reserved. Patent Pending.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
