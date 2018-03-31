import React, { Component } from 'react' 
import {
	Platform,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
  Button,
  Modal
} from 'react-native'
import { Text, Divider } from 'react-native-elements'
import Image from 'react-native-scalable-image'
import ImageViewer from 'react-native-image-zoom-viewer'
import Layout from '../constants/Layout'
import ArtsyImage from '../models/ArtsyImage'
import Paragraph from '../components/Paragraph'

class Artwork extends Component {

  constructor(props) {
    super(props)

    this.state = {
      imageZoomed: false
    }
  }

	renderImage (model) {
    const image = new ArtsyImage(model._links.image.href)

    return (
      this.state.imageZoomed == false ?
        (<Image
          source={{ uri: image.large() }}
          width={Layout.window.width}
          onPress={() => this.setState({ imageZoomed: true })}
        />)
        :
        (
          <Modal visible={true} transparent={true} onRequestClose={() => this.setState({ imageZoomed: false })}>
            <ImageViewer imageUrls={[{ url: image.large() }]} />
          </Modal>
        )
    )
     
	}


  render() {
    const { model } = this.props.navigation.state.params

    return (
      <ScrollView style={styles.artwork}>
        <Text h4>{model.title}</Text>
        {this.renderImage(model)}
      </ScrollView>
    )
  }

}

const styles = StyleSheet.create({
  artwork: {
    flex: 1,
    paddingTop: 20
  }
})

export default Artwork