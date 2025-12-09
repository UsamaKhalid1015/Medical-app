import { Text, TouchableOpacity, View, Image } from 'react-native';
import { styles } from './Cardiac.style';
import { ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const CardiacImage = ({ source, title, style, tag, tagImage }) => {
  const navigation = useNavigation();

  return (
    <ImageBackground source={source} style={[styles.image, style]}>
      <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()}>
        <Image source={tagImage} style={styles.arrowStyle} />
      </TouchableOpacity>
      <View style={styles.mainTop}>
        <View style={styles.tagContainer}>
          <TouchableOpacity style={styles.tagCardiac} activeOpacity={0.7}>
            <Text style={styles.tagStyle}>{tag}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textStyle}>{title}</Text>
      </View>
    </ImageBackground>
  );
};
export default CardiacImage;
