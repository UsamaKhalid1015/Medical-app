import { View, Image, TouchableOpacity } from 'react-native';
import ProgressBar from '../../../components/progressBar/ProgressBar';
import { styles } from './Currently.styles';
import AppText from '../../../components/appText/AppText';
import Button from './../../../components/button/Button';
import { useState } from 'react';

const CurrentlyWorking = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: '1', value: 'EMT' },
    { id: '2', value: 'AEMT' },
    { id: '3', value: 'Paramedic' },
    { id: '4', value: 'EMR' },
  ];

  const handleNav = () => {
    navigation.navigate('statecountry');
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainViewarrow}>
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => {
            navigation.goBack();
          }}
        >
          <Image
            style={styles.arrow}
            source={require('./../../assets/images/Vector.png')}
          />
        </TouchableOpacity>

        <ProgressBar progress={'60%'} />

        <AppText style={styles.emtText}>
          Which are you currently working as?
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

export default CurrentlyWorking;
