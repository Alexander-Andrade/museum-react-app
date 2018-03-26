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

class Artist extends Component {

  
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
      <ScrollView style={styles.artist}>
        {this.renderImage(model)}
        <Text h4>{model.name}</Text>
          <Text>
            {model.birthday}
            {
              !!model.deathday &&
              <Text>- {model.deathday}</Text>
            }
          </Text>
        <Divider />
        {
          !!model.biography && 
          <Text><Paragraph>Biography: </Paragraph>{model.biography}</Text>
        }
        <Text><Paragraph>Hometown: </Paragraph>{model.hometown}</Text>
      </ScrollView>
    )
  }

}


const styles = StyleSheet.create({
	artist: {
		flex: 1,
	},
  paragraph: {
    fontSize: 22
  }
})

export default Artist