import React from 'react';
import { styles } from './Dropdown.styles';
import { View, Text, TouchableOpacity, Image, Modal } from 'react-native';
import AppText from '../appText/AppText';
import { useState } from 'react';
const NewDropdownModal = () => {
  const [isStateModelVisible, setStateModelVisible] = useState(false);

  const [selectedState, setSelectedState] = useState();

  const handleStateSelection = item => {
    setSelectedState(item);
    setStateModelVisible(!isStateModelVisible);
  };

  const states = [
    { id: 1, name: 'California', code: 'CA' },
    { id: 2, name: 'Texas', code: 'TX' },
    { id: 3, name: 'New York', code: 'NY' },
    { id: 4, name: 'Florida', code: 'FL' },
  ];
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.7}
        style={styles.styleModel}
        onPress={() => setStateModelVisible(true)}
      >
        <Text>{selectedState?.name || 'Select State'}</Text>
        <Image
          style={styles.dropDownImage}
          source={require('./../../src/assets/images/chevron-down.png')}
        />
      </TouchableOpacity>
      <Modal
        visible={isStateModelVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setStateModelVisible(false)}
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
            <Text
              style={styles.crossStyle}
              onPress={() => setStateModelVisible(false)}
            >
              X
            </Text>
            {states.map((item, index) => (
              <TouchableOpacity
                onPress={() => handleStateSelection(item)}
                style={styles.stateNameStyle}
                key={item.id}
              >
                <AppText>{item.id}</AppText>
                <AppText>{item.name}</AppText>
                <AppText>{item.code}</AppText>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default NewDropdownModal;
