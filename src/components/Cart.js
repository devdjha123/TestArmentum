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
import Menu_Btn.png from '../images/Menu_Btn.png.png';
import {  StackNavigator,} from 'react-navigation';
class Cart extends Component {
  constructor() {
    super();
  }

  render(){
    return(
      <View>
        <Text>MOETS CURRY LEAF</Text>
        <View>
          <Image source={foodIcon1} style={styles1.foodIcon1} ></Image>
          <View>
            <Text>
                Noodles Soup
            </Text>
            <Text>
                Boilde Noodles served in pot with broth
            </Text>

          </View>
        </View>
      </View>
    )
  }
}
