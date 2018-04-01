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
import Layout from '../constants/Layout'
import ArtsyImageView from '../components/ArtsyImageView'
import Paragraph from '../components/Paragraph'

class Gene extends Component {

  render() {
    const { model } = this.props.navigation.state.params

    return (
      <ScrollView contentContainerStyle={styles.gene}>
        <Text h4>{model.display_name ? model.display_name : model.name }</Text>
        <ArtsyImageView imhref={model._links.image.href} size={'tall'} />
        <Text><Paragraph>Description: </Paragraph>{model.description}</Text>
      </ScrollView>
    )
  }

}



const styles = StyleSheet.create({
  gene: {
    flex: 1,
    paddingTop: 20
  }
})

export default Gene