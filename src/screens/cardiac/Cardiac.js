import React from 'react';
import { View, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardiacImage from '../../../components/cardiacTop/CardiacImage';
import PatientSummary from '../../../components/CardiacBottom/PatientSummary';
import { styles } from './CardiacStyle';

const Cardiac = () => {
  const navigation = useNavigation();

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <View style={styles.container}>
        <CardiacImage
          tagImage={require('../../assets/images/Vector.png')}
          source={require('../../assets/images/oldman.png')}
          tag="Cardiac"
          title="76 year old male having chest pains while mowing lawn"
        />

        <PatientSummary
          chips={[
            '76 yo cauc male',
            'chest pain',
            'indigestion',
            'labored breathing for 20min',
          ]}
          history="H/O Arterisclerosis, angiogram 4 years ago (80% blockage) hyperlipidemia"
          meds={['Lipitor, Lopid, baby ASA (84mg), Fish oil']}
          exam="Pulse present in carotid, brachial and extremities x4, negative for physical trauma, KMA: penicillin, Family hx: stroke (mother)"
          physicalExam="Skin cold and clammy to touch"
          vitals={{ P: 120, R: 21, BP: '160/110' }}
          buttonText="Begin and start timer"
          onPressButton={() => navigation.navigate('possiblecauses')}
        />
      </View>
    </ScrollView>
  );
};

export default Cardiac;
