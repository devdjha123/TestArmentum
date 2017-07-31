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

import PhotoGrid from 'react-native-photo-grid';

export default class SecondScreen extends Component {
  constructor(props){
    super(props);
    this.state = {page:'first'};
  }
  render() {
    var self = this;
    return (
      <View style={styles.container}>

        { this.state.page == 'first' ? <HomePage /> : <Text></Text> }
        { this.state.page == 'second' ? <MenuPage /> : <Text></Text> }
        { this.state.page == 'third' ? <Cart /> : <Text></Text> }
          <Text style={styles.instructions}>
              Selected page: {this.state.page}
          </Text>
					<Tabs selected={this.state.page} style={{backgroundColor:'white'}}
								selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
							<Text name="first">Home</Text>
							<Text name="second" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Menu</Text>
							<Text name="third">Orders</Text>
							<Text name="fourth" selectedStyle={{color:'green'}}>Notifications</Text>
					</Tabs>
      </View>
    );
  }
}

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

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles1 = StyleSheet.create({
  foodIcon1: {
    width: 50,
    height: 50,
    // flex: 1,
    marginTop: 0,
    flexDirection: 'row'
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
	backdrop: {
    paddingTop: 60,
    width: 320,
    height: 120
  },
	headline: {
    fontSize: 25,
    position:'absolute',
    textAlign: 'left',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
		marginLeft: 5,
		marginTop: DEVICE_HEIGHT/2,
		marginRight: DEVICE_WIDTH/8
  },
	headline1: {
		fontSize: 30,
    textAlign: 'left',
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
		marginLeft: 5,
		marginTop: (DEVICE_HEIGHT/2+30),
		marginRight: DEVICE_WIDTH/8
	},
	backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch',
		height: DEVICE_HEIGHT,
	  width: DEVICE_WIDTH
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  banner_container: {

    flex: 1,
    resizeMode: 'cover', // or 'stretch',
    height: 400,
    width: DEVICE_WIDTH

    },
});
