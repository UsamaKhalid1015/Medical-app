import {
  View,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import { styles } from './ProfileSetting.Style';
import AppText from '../../../components/appText/AppText';
import Button from '../../../components/button/Button';
import { ScrollView } from 'react-native';

const carouselImages = [
  { src: require('../../assets/images/Avata7.png') },
  { src: require('../../assets/images/Avatar1.png') },
  { src: require('../../assets/images/Avatar2.png') },
  { src: require('../../assets/images/Avatar3.png') },
  { src: require('../../assets/images/Avatar4.png') },
  { src: require('../../assets/images/Avatar5.png') },
  { src: require('../../assets/images/Avatar6.png') },
];

const ProfileSetting = ({ navigation }) => {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.mainContainer}>
        {/* TOP CONTENT */}
        <View>
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

            <AppText style={styles.titleText}>Settings</AppText>
          </View>

          <View style={styles.subConainer}>
            <Image
              source={require('../../assets/images/Avatar.png')}
              style={styles.avatarImage}
            />
          </View>

          <FlatList
            data={carouselImages}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <Image source={item.src} style={styles.carouselImage} />
            )}
          />

          <View style={styles.miniContainer}>
            <AppText style={styles.personalText}>Personal information</AppText>

            <AppText style={styles.email}>First Name</AppText>
            <TextInput style={styles.inputEmail} placeholder="Volodymyr" />

            <AppText style={styles.email}>Last Name</AppText>
            <TextInput style={styles.inputEmail} placeholder="Boiarinov" />
          </View>
        </View>

        {/* BOTTOM BUTTON */}
        <View style={styles.buttonContainer}>
          <Button title={'Save changes'} textColor="white" />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileSetting;
