import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
	Image,
  TouchableOpacity
} from 'react-native';

import Dimensions from 'Dimensions';
import Tabs from 'react-native-tabs';
import landingImg from '../images/landing-page.png';
import ImageSlider from 'react-native-image-slider';
import foodIcon1 from '../images/imgmenu1.png';
import Head_Image from '../images/Head_Image.png';
import {  StackNavigator,} from 'react-navigation';
import SecondScreen from "./SecondScreen";

class HomePage extends Component {
  render(){
    return(
      <View>
        <Image source={landingImg} style={styles.backgroundImage} >

            <Text style={styles.headline}>Food</Text>
            <Text style={styles.headline1}>Panda</Text>

        </Image>
      </View>

    )
  }
}
