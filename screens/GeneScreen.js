import React, { Component } from 'react' 
import {
	Platform,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
	Button
} from 'react-native'
import { Text, Divider } from 'react-native-elements'
import Image from 'react-native-scalable-image'
import Layout from '../constants/Layout'
import ArtsyImage from '../models/ArtsyImage'
import Paragraph from '../components/Paragraph'

class Gene extends Component {

  
	renderImage (model) {
    const image = new ArtsyImage(model._links.image.href)

    return (<Image 
              source={{uri: image.large()}}
              width={ Layout.window.width }
            />
    ) 
	}

  render() {
    const { model } = this.props.navigation.state.params

    return (
      <ScrollView style={styles.gene}>
      </ScrollView>
    )
  }

}


const styles = StyleSheet.create({
  gene: {
    flex: 1
  }
})

export default Gene