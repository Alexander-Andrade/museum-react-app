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
import FavoriteButton from '../components/FavoriteButton'


@inject("favoriteArtworks") 
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

    this.state.artistsModel.loadNext();
    this.state.genesModel.loadNext();
  }


	renderImage (model) {
    
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

  renderFavoriteButton(){
    const { model, isFavorite } = this.props.navigation.state.params

    return (
      <View>
        {
          isFavorite == false ?
          (
            <Button
              large
              icon={{ name:'favorite' }}
              title = 'Add to Favorite'
              buttonStyle={styles.favoriteButton}
              onPress={()=> this.props.favoriteArtists.insert(model) } />
          )
          :
          (
            <Button
              large
              title = 'Remove from Favorite'
              buttonStyle={styles.favoriteButton}
              onPress={()=> this.props.favoriteArtists.remove({ _id: model._id }) } />
          )
          }
      </View>
      )
  }

  render() {
    const { model, isFavorite } = this.props.navigation.state.params

    const sections = [
      {
        title: 'Artists',
        content: <ArtistsList
                  isFavorite={false} 
                  collection={this.state.artistsModel.list}  
                  loading={this.state.artistsModel.loading} />
      
      },
      {
        title: 'Genes',
        content: <GenesList 
                  isFavorite={false} 
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
        <Text><Paragraph>Dimensions: </Paragraph>{model.dimensions.cm.text}</Text>
        {
          !!model.literature &&
          <Text><Paragraph>Literature: </Paragraph>{model.literature}</Text>
        }
        {
          !!model.exhibition_history &&
          <Text><Paragraph>Exhibition History: </Paragraph>{model.exhibition_history}</Text>
        }

        <View style={{marginBottom: 20}}></View>

        <AccordionView sections={sections} />

        <FavoriteButton 
          isFavorite={isFavorite}
          onNotFavorite={() =>  this.props.favoriteArtworks.insert(model)}
          onFavorite={() => this.props.favoriteArtworks.remove({ _id: model._id })}
        />
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