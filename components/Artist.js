import React, { Component } from 'react' 
import {
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Button
} from 'react-native'
import Image from 'react-native-scalable-image'
import Layout from '../constants/Layout'
import ArtsyImage from '../models/ArtsyImage'

class Artist extends Component {

  
	renderImage () {
		const { model } = this.props;
    const image = new ArtsyImage(model._links.image.href)

    return (<Image 
              source={{uri: image.large()}}
              width={ Layout.window.width }
            />
    ) 
	}

  render() {
    return (
      <View style={styles.artist}>
        {this.renderImage()}
      </View>
    )
  }

}

const styles = StyleSheet.create({
	artist: {
		flex: 1,
	}

})

export default Artist