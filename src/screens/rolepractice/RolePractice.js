import React, { useState } from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from './Role.styles';
import ProgressBar from '../../../components/progressBar/ProgressBar';
import AppText from '../../../components/appText/AppText';
import Button from '../../../components/button/Button';

const RolePractice = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: '1', value: 'EMT' },
    { id: '2', value: 'AEMT' },
    { id: '3', value: 'Parademic' },
    { id: '4', value: 'EMR' },
  ];

  const handleNav = () => {
    navigation.navigate('currentlyworking');
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainViewarrow}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.goBack()}
        >
          <Image
            style={styles.arrow}
            source={require('./../../assets/images/Vector.png')}
          />
        </TouchableOpacity>

        <ProgressBar progress={'50%'} />

        <AppText style={styles.emtText}>
          Which role would you like to practice?
        </AppText>

        <View style={styles.fourbutton}>
          {options.map(item => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.7}
              onPress={() => setSelectedOption(item.id)}
              style={[
                styles.notActively,
                {
                  backgroundColor:
                    selectedOption === item.id ? 'blue' : 'white',
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
                  source={require('./../../assets/images/Vector1.png')}
                  style={{ width: 20, height: 20 }}
                />
              ) : null}
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* Continue button shows only after selecting */}
      {selectedOption ? (
        <Button
          style={styles.buttonBottom}
          onPress={handleNav}
          title={'Continue'}
        />
      ) : null}
    </View>
  );
};

export default RolePractice;
