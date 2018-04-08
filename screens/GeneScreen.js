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
import Category from '../components/Category'
import ArtistsList from '../components/ArtistsList'
import ArtworksList from '../components/ArtworksList'
import { observer, inject } from 'mobx-react'

@inject("artistsModel") 
@inject("artworksModel")
@observer
class Gene extends Component {

  constructor(props) {
    super(props)

    const { model } = this.props.navigation.state.params
    this.props.artistsModel.saveAndLoad(model._links.artists.href)
    this.props.artworksModel.saveAndLoad(model._links.artworks.href)
    console.log('genes constr')
  }

  render() {
    const { model } = this.props.navigation.state.params

    return (
      <ScrollView style={styles.gene}>
        <Text h4>{model.display_name ? model.display_name : model.name }</Text>
        <ArtsyImageView imhref={model._links.image.href} size={'tall'} />
        <Text><Paragraph>Description: </Paragraph>{model.description}</Text>
        <Category text={'Artists'} style={styles.category}/>
        <ArtistsList />
        <Category text={'Artworks'} style={styles.category}/>
        <ArtworksList />
      </ScrollView>
    )
  }


	componentWillUnmount () {
    this.props.artistsModel.loadPrev()
    this.props.artworksModel.loadPrev()
    console.log('genes unmount')
	}

}



const styles = StyleSheet.create({
  gene: {
    flex: 1,
    marginTop: 20
  }
})

export default Gene