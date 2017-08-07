import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
	Image,
  Button,
  TouchableOpacity
} from 'react-native';

import Dimensions from 'Dimensions';
import Tabs from 'react-native-tabs';
import landingImg from '../images/landing-page.png';
import ImageSlider from 'react-native-image-slider';
import foodIcon1 from '../images/imgmenu1.png';
import minus from '../images/minus.png';
import Head_Image from '../images/Head_Image.png';
import imgmenu1 from '../images/imgmenu1.png';
import imgmenu2 from '../images/imgmenu2.png';
import imgmenu3 from '../images/imgmenu3.png';
import imgmenu4 from '../images/imgmenu4.png';
import imgmenu5 from '../images/imgmenu5.png';
import imgmenu6 from '../images/imgmenu6.png';
import imgmenu7 from '../images/imgmenu7.png';
import imgmenu8 from '../images/imgmenu8.png';
import imgmenu9 from '../images/imgmenu9.png';
import imgmenu10 from '../images/imgmenu10.png';
import Notifi_Btn from '../images/Notifi_Btn.png';
import Home_Btn_nrm from '../images/Home_Btn_nrm.png';
import Menu_Btn from  '../images/Menu_Btn.png';
import Order_Btn_nrm from '../images/Order_Btn_nrm.png';
import Logo from '../images/Logo.jpg';

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
           { this.state.page == 'zero' ? <HomePage /> : <Text></Text> }
        { this.state.page == 'first' ? <HomePage /> : <Text></Text> }
        { this.state.page == 'second' ? <MenuPage /> : <Text></Text> }
        { this.state.page == 'third' ? <Cart /> : <Text></Text> }
          <Text style={styles.instructions}>
              Selected page: {this.state.page}
          </Text>
					<Tabs selected={this.state.page} style={{backgroundColor:'#000'}}
								selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>

							<Text name="first"selectedIconStyle={{borderTopWidth:2,borderTopColor:'#f00',backgroundColor:'#800'}}><Image source={Home_Btn_nrm} style={style3.homeimg}></Image></Text>
							<Text name="second" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red',backgroundColor:'#800'}}><Image source={Menu_Btn} style={style3.homeimg}></Image></Text>
							<Text name="third" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red',backgroundColor:'#800'}}><Image source={Order_Btn_nrm} style={style3.homeimg}></Image></Text>
							<Text name="fourth"selectedIconStyle={{borderTopWidth:2,borderTopColor:'red',backgroundColor:'#800'}}><Image source={Notifi_Btn} style={style3.homeimg}></Image></Text>
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
    let items = Array.apply(null, Array(18)).map((v, i) => {
      return { id: i, src: 'https://image.ibb.co/bupNba/imgmenu7.png', val: 'Cafe Kitchen ' + (i+1) }
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
                      `https://image.ibb.co/f5sm2F/Head_Image.png`,
                      `https://image.ibb.co/f5sm2F/Head_Image.png`,
                      `https://image.ibb.co/f5sm2F/Head_Image.png`,
                  ]}
                  position={this.state.position}
                  onPositionChanged={position => this.setState({position})}/>
                  <PhotoGrid
                    data = { this.state.items }
                    itemsPerRow = { 3 }
                    itemMargin = { 2 }
                    renderHeader = { this.renderHeader }
                    renderItem = { this.renderItem }
                  />
          </View>
      );
  }
  renderHeader() {
    return(
      <Text></Text>
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

          </Image>
          <View style={{flex:1,marginTop:2}}>
            <Text style={{fontWeight: 'bold'}}>Item Name</Text>
            <View style={{marginTop: 2, marginLeft: 0}}>
              <Text style={{fontWeight: 'normal',color:'red'}}>Open Now</Text>
              <Text style={{marginLeft: 80,color:'red',marginTop:-20}}>{ Math.round(Math.random() * (5 - 1) + 1) } *</Text>
            </View>
            </View>
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
      <View style={{flex: 1.2 ,marginTop:30,backgroundColor:'#ccc'}}>
      <View style={{flex: 1}}>
        <View style={{flexDirection: 'row',backgroundColor:'#f00'}}>

        <Text style={{textAlign:'left'}}>MOETS CURRY LEAF</Text>
        <Text style={{textAlign:'right',marginLeft:100}}>$2.0</Text>

        </View>
        <View style={{flexDirection: 'row',marginTop:30}}>
          <Image source={foodIcon1} style={styles1.foodIcon1} ></Image>
          <View style={{flexDirection: 'row',marginTop:20}}>

            <Text>
              Noodles Soup ~{"\n"} Boilde Noodless
            </Text>
            <Text>
                $3.5
            </Text>
            <Text>

            </Text>
            <Text style={{textAlign:'right',marginLeft:40}} >
                (-) 1 (+)
            </Text>

          </View>
        </View>
        </View>
        <View style={{flex: 1,marginTop:-140}}>
          <View style={{flexDirection: 'row',backgroundColor:'#f00'}}>

          <Text style={{textAlign:'left'}}>MOETS CURRY LEAF</Text>
          <Text style={{textAlign:'right',marginLeft:100}}>$2.0</Text>

          </View>
          <View style={{flexDirection: 'row',marginTop:30}}>
            <Image source={foodIcon1} style={styles1.foodIcon1} ></Image>
            <View style={{flexDirection: 'row',marginTop:20}}>

              <Text>
                Noodles Soup ~{"\n"} Boilde Noodless
              </Text>
              <Text>
                  $3.5
              </Text>
              <Text>

              </Text>
              <Text style={{textAlign:'right',marginLeft:40}} >
                  (-) 1 (+)
              </Text>

            </View>
          </View>
          <View style={{flexDirection: 'column',marginTop:30,alignItems:'center'}}>
          <Text>
           SubTotal $4.0
          </Text>
          <Text>
           ServiceTax $5.9
          </Text>
          <Text>
           Total $15.0
          </Text>


          </View>
<View style={{flexDirection: 'column',marginTop:30,alignItems:'center'}}>
          <Button

  title="Complete Order"
  color="#841584"
  accessibilityLabel="Learn more about this purple button"
/></View>

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

    marginTop: 9,
    flexDirection: 'row'
  }
})

const style3 = StyleSheet.create({
  homeimg:{
    width: 100,
    height: 100,
    //flex: 1,
  }
})
// const style5 = StyleSheet.create({
//   logoimg:{
//     width: 300,
//     height: 100,
//     flex: 1,
//     margin:5,
//     paddingTop:10,
//     paddingLeft:10,
//     marginRight:300
//
//   }
// })
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
		marginTop: (DEVICE_HEIGHT/2+25),
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
