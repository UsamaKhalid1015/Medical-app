import { View, Image, TouchableOpacity, Modal, Text } from 'react-native';
import ProgressBar from '../../../components/progressBar/ProgressBar';
import { styles } from './Currently.styles';
import AppText from '../../../components/appText/AppText';
import Button from './../../../components/button/Button';
import { useState } from 'react';

const CurrentlyWorking = ({ navigation }) => {
  const handleNav = () => {
    navigation.navigate('statecountry');
  };
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainViewarrow}>
        <Image
          style={styles.arrow}
          source={require('./../../assets/images/Vector.png')}
        />
        <ProgressBar progress={'60%'} />
        <AppText style={styles.emtText}>
          Which are you currently working as?
        </AppText>
        <View style={styles.fourbutton}>
          <TouchableOpacity activeOpacity={0.7} style={styles.notActively}>
            <AppText style={styles.amNotText}>EMT</AppText>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.notActively}>
            <AppText style={styles.amNotText}>AEMT</AppText>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.notActively}>
            <AppText style={styles.amNotText}>Paramedic</AppText>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.notActively}>
            <AppText style={styles.amNotText}>EMR</AppText>
          </TouchableOpacity>
        </View>
      </View>

      <Button
        style={styles.bottomButton}
        onPress={handleNav}
        title={'Continue'}
      />
      <Button title="Show modal" onPress={toggleModal} />

      {/* ✅ Built-in React Native Modal */}
      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={toggleModal}
      >
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}
        >
          <View
            style={{
              backgroundColor: 'white',
              padding: 20,
              borderRadius: 10,
              minWidth: 250,
              alignItems: 'center',
            }}
          >
            <Text>Hello!</Text>
            <Button title="Hide modal" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CurrentlyWorking;
