import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import { styles } from './Dropdown.styles';
import AppText from '../appText/AppText';

const DropDownModal = ({ title, onPress, placeholder, data }) => {
  const [isCountryModelVisible, setCountryModelVisible] = useState(false);

  const [selectedCountry, setSelectedCountry] = useState();

  const handleCountrySelection = item => {
    setSelectedCountry(item);
    setCountryModelVisible(!isCountryModelVisible);
  };

  return (
    <View>
      <AppText style={styles.stylecountry}>{title}</AppText>
      {/* country model */}
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.styleModel}
        onPress={() => setCountryModelVisible(true)}
      >
        <Text>{selectedCountry?.name || placeholder}</Text>
        <Image
          style={styles.dropDownImage}
          source={require('./../../src/assets/images/chevron-down.png')}
        />
      </TouchableOpacity>
      <Modal
        visible={isCountryModelVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setCountryModelVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <View style={styles.viewModel}>
            <TouchableOpacity
              style={styles.crossButton}
              onPress={() => setCountryModelVisible(false)}
            >
              <Text style={styles.crossStyle}>X</Text>
            </TouchableOpacity>
            <ScrollView showsVerticalScrollIndicator={false}>
              {data?.map((item, index) => (
                <TouchableOpacity
                  onPress={() => handleCountrySelection(item)}
                  style={styles.countryNameStyle}
                  key={item.id}
                >
                  <AppText>{item.id}</AppText>
                  <AppText>{item.name}</AppText>
                  <AppText>{item.code}</AppText>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default DropDownModal;
