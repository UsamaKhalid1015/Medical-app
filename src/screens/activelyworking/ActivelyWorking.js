import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './Actively.styles';
import AppText from '../../../components/appText/AppText';
import ProgressBar from '../../../components/progressBar/ProgressBar';
import Button from '../../../components/button/Button';
import { useState } from 'react';

const ActivelyWorking = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState();

  const options = [
    { id: '1', value: 'I am not actively working' },
    { id: '2', value: 'I am actively working' },
  ];

  const handleNav = () => {
    navigation.navigate('rolepractice');
  };

  return (
    <View style={styles.mainViewarrow}>
      <View>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.arrow}
            source={require('../../assets/images/Vector.png')}
          />
        </TouchableOpacity>
        <ProgressBar progress={'30%'} />
      </View>

      <AppText style={styles.emtText}>
        Are you actively working as an EMT, AEMT, Paramedic or EMR?
      </AppText>

      {options.map(item => (
        <TouchableOpacity
          key={item.id}
          onPress={() => setSelectedOption(item.id)}
          activeOpacity={0.7}
          style={[
            styles.notActively,
            {
              backgroundColor: selectedOption === item.id ? 'blue' : 'white',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingHorizontal: 12,
            },
          ]}
        >
          {/* Left-aligned text */}
          <AppText
            style={[
              styles.amNotText,
              { color: selectedOption === item.id ? 'white' : 'black' },
            ]}
          >
            {item.value}
          </AppText>

          {/* Right-aligned checkmark */}
          {selectedOption === item.id ? (
            <Image
              source={require('../../assets/images/Vector1.png')}
              style={{ width: 20, height: 20 }}
            />
          ) : null}
        </TouchableOpacity>
      ))}

      {/* Continue button only after selection */}
      {selectedOption ? (
        <Button
          style={styles.bottomButton}
          onPress={handleNav}
          title={'Continue'}
        />
      ) : null}
    </View>
  );
};

export default ActivelyWorking;
