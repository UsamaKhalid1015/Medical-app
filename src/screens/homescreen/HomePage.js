import React, { useRef } from 'react';
import {
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import AppText from '../../../components/appText/AppText';
import { styles } from './Home.styles';
import Collage from '../../../components/imageCollage/Collage';
import Textheading from '../../../components/textheading/Textheading';
import CustomImage from '../../../components/image/Image';
import { useNavigation } from '@react-navigation/native'; // <-- Added

const selectedItems = [
  {
    id: 1,
    title: 'Random',
    description: 'Test your knowledge with randomly picked scenario',
    backgroundColor: '#FFC53D',
    image: <Collage />,
  },
  {
    id: 2,
    title: 'Injury',
    description: '23 year old male breaks arm while playing soccer',
    backgroundColor: '#2E62FF',
    image: <CustomImage source={require('../../assets/images/imageA.png')} />,
  },
  {
    id: 3,
    title: 'Cardiac',
    description: '76 year old male having chest pains while mowing lawn',
    backgroundColor: '#E5484D',
    image: <CustomImage source={require('../../assets/images/ImageB.png')} />,
  },
  {
    id: 4,
    title: 'Category',
    description: 'Newborn with breathing difficulties',
    backgroundColor: '#46A758',
    image: <CustomImage source={require('../../assets/images/imageC.png')} />,
  },
];

const carouselImages = [
  {
    src: require('../../assets/images/image.png'),
    title: 'Tauma Emergencies',
    buttonTopText: '8/12 completed',
    buttonText: 'Continue practicing',
  },
  {
    src: require('../../assets/images/image1.png'),
    title: 'Taxicology',
    buttonTopText: 'Not started',
    buttonText: 'Practice Now',
  },
  {
    src: require('../../assets/images/image2.png'),
    title: 'Emergency Care',
    buttonTopText: 'Not started',
    buttonText: 'Practice Now',
  },
  {
    src: require('../../assets/images/image3.png'),
    title: 'ABC`s',
    buttonTopText: 'Not started',
    buttonText: 'Practice Now',
  },
];

const HomePage = () => {
  const navigation = useNavigation();

  const flatListRef = useRef(null);

  // ------------------------
  // RENDER SELECTED FOR YOU
  // ------------------------
  const renderItem = ({ item }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => {
        if (item.title === 'Cardiac') {
          navigation.navigate('Cardiac'); // <-- Navigate to Cardiac screen
        }
      }}
    >
      <View style={styles.randomstyle}>
        {item.image}
        <Textheading
          title={item.title}
          description={item.description}
          backgroundColor={item.backgroundColor}
        />
      </View>
    </TouchableOpacity>
  );

  // ------------------------
  // FLATLIST HEADER CONTENT
  // ------------------------
  const ListHeader = () => (
    <View style={styles.mainScreen}>
      {/* Top bar */}
      <View style={styles.mainView}>
        <View style={styles.mainView1}>
          <Image
            style={styles.logoimage}
            source={require('../../assets/images/app-icon.png')}
          />
          <AppText>EMTeam</AppText>
        </View>
        <Image
          style={styles.Badgestyle}
          source={require('../../assets/images/Badge.png')}
        />
      </View>

      {/* Weekly points */}
      <View style={styles.viewpoints}>
        <Text style={styles.textpoints}>Points earned this week</Text>
        <View style={styles.starview}>
          <View style={styles.ptsview}>
            <Image
              style={styles.starstyle}
              source={require('../../assets/images/star.png')}
            />
            <Text style={styles.ptsstyle}>315 pts</Text>
          </View>
          <TouchableOpacity style={styles.statsview} activeOpacity={0.7}>
            <Text style={styles.textstats}>View stats</Text>
          </TouchableOpacity>
        </View>
      </View>

      <AppText style={styles.stylecontinue}>Continue Practicing</AppText>

      {/* Carousel FlatList */}
      <FlatList
        data={carouselImages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ImageBackground
            source={item.src}
            style={styles.imagescrousel}
            imageStyle={{ borderRadius: 16 }}
          >
            <TouchableOpacity style={styles.imageButtonTop} activeOpacity={0.7}>
              <Text style={styles.imageButtonTopText}>
                {item.buttonTopText}
              </Text>
            </TouchableOpacity>
            <Text style={styles.imageTitle}>{item.title}</Text>

            <TouchableOpacity style={styles.imageButton} activeOpacity={0.7}>
              <Text style={styles.imageButtonText}>{item.buttonText}</Text>
            </TouchableOpacity>
          </ImageBackground>
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
      />

      {/* Test section */}
      <View style={styles.belowflatlist}>
        <Collage />
        <View>
          <AppText>Test your knowledge</AppText>
          <Text>Complete a random scenario</Text>
        </View>
        <TouchableOpacity style={styles.startbutton} activeOpacity={0.7}>
          <Text style={styles.textstyle}>Start</Text>
        </TouchableOpacity>
      </View>

      {/* Title before render items */}
      <AppText style={styles.selectedOption}>Selected for you</AppText>
    </View>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={selectedItems}
      keyExtractor={item => item.id.toString()}
      renderItem={renderItem}
      ListHeaderComponent={ListHeader}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomePage;
