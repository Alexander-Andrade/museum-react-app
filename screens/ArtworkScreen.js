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
import { Text } from 'react-native-elements'
import ImageViewer from 'react-native-image-zoom-viewer'
import ArtsyImageView from '../components/ArtsyImageView'
import Paragraph from '../components/Paragraph'
import ArtistsList from '../components/ArtistsList'
import GenesList from '../components/GenesList'
import { observer, inject } from 'mobx-react'
import Category from '../components/Category'
import artsyImageHref from '../models/ArtsyImage'
import AccordionView from '../components/AccordionView'
import ArtsyModel from '../models/ArtsyModel'
import ArtsySettings from '../constants/ArtsySettings'


@observer
class Artwork extends Component {

  constructor(props) {
    super(props)

    this.state = {
      imageZoomed: false
    }
    
    const { model } = this.props.navigation.state.params
    
    this.state = {
      artistsModel: new ArtsyModel({
        collection: 'artists',
        href: model._links.artists.href,
        limit: ArtsySettings.queryLimit
      }),
      genesModel: new ArtsyModel({
        collection: 'genes',
        href: model._links.genes.href,
        limit: ArtsySettings.queryLimit
      })
    }
  }


	renderImage (model) {
    console.log(model._links.image.href)
    return (
      this.state.imageZoomed == false ?
        ( <TouchableOpacity onPress={() => this.setState({ imageZoomed: true })}> 
            <ArtsyImageView imhref={model._links.image.href} size={'large'} />
          </TouchableOpacity>
        )
        :
        (
          <Modal visible={true} transparent={true} onRequestClose={() => this.setState({ imageZoomed: false })}>
            <ImageViewer imageUrls={[{ url: artsyImageHref(model._links.image.href, 'large') }]} />
          </Modal>
        )
    )
     
	}

  render() {
    const { model } = this.props.navigation.state.params

    const sections = [
      {
        title: 'Artists',
        content: <ArtistsList 
                  collection={this.state.artistsModel.list}  
                  loading={this.state.artistsModel.loading} />
      
      },
      {
        title: 'Genes',
        content: <GenesList 
                  collection={this.state.genesModel.list} 
                  loading={this.state.genesModel.loading}/>
      }]

    return (
      <ScrollView style={styles.artwork}>
        <Text h4>{model.title}</Text>
        <Text>{model.date}</Text>
        {this.renderImage(model)}
        <Text><Paragraph>Category: </Paragraph>{model.category}</Text>
        <Text><Paragraph>Medium: </Paragraph>{model.medium}</Text>
        <Text><Paragraph>Collecting Institution: </Paragraph>{model.collecting_institution}</Text>
        <Text style={{marginBottom: 20}}><Paragraph>Dimensions: </Paragraph>{model.dimensions.cm.text}</Text>
        <AccordionView sections={sections} />
      </ScrollView>
    )
  }

}


const styles = StyleSheet.create({
  artwork: {
    flex: 1,
    marginTop: 20
  },
  category: {
    marginBottom: -20
  }
})

export default Artwork