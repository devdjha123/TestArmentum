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


class MenuPage extends Component {
  constructor(props) {
      super(props);
      this.state = {
          position: 1,
          interval: null,
          items: []
      };
  }
  componentDidMount() {
    // Build an array of 60 photos
    let items = Array.apply(null, Array(60)).map((v, i) => {
      return { id: i, src: 'http://placehold.it/200x200?text='+(i+1), val: 'Cafe Kitchen ' + (i+1) }
    });
    this.setState({ items });
  }

  componentWillMount() {
      this.setState({interval: setInterval(() => {
          this.setState({position: this.state.position === 2 ? 0 : this.state.position + 1});
      }, 2000)});
  }

  componentWillUnmount() {
      clearInterval(this.state.interval);
  }

  render() {
      return (
          <View style={styles.banner_container}>
              <ImageSlider
                  images={[
                      `http://placeimg.com/640/480/any`,
                      `http://placeimg.com/640/480/any`,
                      `http://placeimg.com/640/480/any`,
                  ]}
                  position={this.state.position}
                  onPositionChanged={position => this.setState({position})}/>
                  <PhotoGrid
                    data = { this.state.items }
                    itemsPerRow = { 3 }
                    itemMargin = { 1 }
                    renderHeader = { this.renderHeader }
                    renderItem = { this.renderItem }
                  />
          </View>
      );
  }
  renderHeader() {
    return(
      <Text>I'm on top!</Text>
    );
  }
  renderFooter() {
    return(
      <Text>I'm on footer!</Text>
    );
  }
  renderItem(item, itemSize) {
      return(
        <TouchableOpacity
          key = { item.id }
          style = {{ width: itemSize, height: itemSize }}
          onPress = { () => {
            // Do Something
          }}>
          <Image
            resizeMode = "cover"
            style = {{ flex: 1 }}
            source = {{ uri: item.src }}

          >
            <Text style={{fontWeight: 'bold'}}>Item Name</Text>
            <View style={{marginTop: 40, marginLeft: 0}}>
              <Text style={{fontWeight: 'bold'}}>Open Now</Text>
              <Text style={{marginLeft: 30}}>{ Math.round(Math.random() * (5 - 1) + 1) } star</Text>
            </View>
          </Image>
        </TouchableOpacity>
      )
    }


}
