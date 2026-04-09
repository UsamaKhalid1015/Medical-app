import React, { forwardRef } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import AppText from '../appText/AppText';
import { styles } from './BottomBack.style';
import Button from '../button/Button';

const BottomSheetBack = forwardRef((props, ref) => {
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
          minHeight: 350,
        },
      }}
    >
      <View style={{ padding: 20, flex: 1 }}>
        <View style={styles.bottomSheetTop}>
          <AppText style={styles.practiceStyle}>Leave Practicing?</AppText>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => ref.current.close()}
          >
            <Text style={styles.textX}>x</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.borderBottom} />
        <Text style={styles.descriptionText}>
          Are you sure you want to leave? Exiting the quiz will erase all your
          current answers
        </Text>
        <View style={styles.borderTop} />

        <View style={styles.bottomSheetButton}>
          <Button
            title={'Leave quiz'}
            style={styles.leavingstyle}
            textColor="black"
          />
          <Button
            title={'Keep preacticing'}
            style={styles.practicingStyle}
            textColor="white"
          />
        </View>
      </View>
    </RBSheet>
  );
});

export default BottomSheetBack;
