// import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './BottomView.style';
import RBSheet from 'react-native-raw-bottom-sheet';
import React, { forwardRef } from 'react';
import AppText from '../appText/AppText';
import PatientSummary from '../CardiacBottom/PatientSummary';

const BottomViewCard = forwardRef((props, ref) => {
  return (
    <RBSheet
      ref={ref}
      height={350}
      closeOnPressMask={true}
      closeOnDragDown={true}
      customStyles={{
        container: {
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          minHeight: 650,
        },
      }}
    >
      <View style={{ flex: 1 }}>
        <View style={styles.patientReport}>
          <AppText style={styles.pateint}>Patien report card</AppText>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => ref.current.close()}
          >
            <Text style={styles.textX}>X</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.borderBottom} />

        <AppText style={styles.patientAge}>
          76 year old male having chest pains while mowing lawn
        </AppText>

        <PatientSummary
          showButton={false}
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
        />
      </View>
    </RBSheet>
  );
});

export default BottomViewCard;
