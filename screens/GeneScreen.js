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
import AccordionView from '../components/AccordionView'
import ArtsyModel from '../models/ArtsyModel'
import ArtsySettings from '../constants/ArtsySettings'
import FavoriteButton from '../components/FavoriteButton'
import _ from 'lodash'

@inject("favoriteGenes") 
@observer
class Gene extends Component {

  constructor(props) {
    super(props)

    const { model } = this.props.navigation.state.params

    this.state = {
      artistsModel: new ArtsyModel({
        collection: 'artists',
        href: model._links.artists.href,
        limit: ArtsySettings.queryLimit
    }),
      artworksModel: new ArtsyModel({
        collection: 'artworks',
        href: model._links.artworks.href, 
        limit: ArtsySettings.queryLimit
    }),
      isFavorite: false
    }

    this.state.artistsModel.loadNext();
    this.state.artworksModel.loadNext();

    this.props.favoriteGenes.store.findOne({name: model.name}, (err, doc) =>{
      if(!_.isEmpty(doc)){
        this.setState({isFavorite: true})
      }
    })
  }

  onFavorite(){
    const { model } = this.props.navigation.state.params
    this.props.favoriteGenes.remove({ name: model.name })
    this.setState({isFavorite: false})
  }

  onNotFavorite(){
    const { model } = this.props.navigation.state.params
    this.props.favoriteGenes.insert(model)
    this.setState({isFavorite: true})
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
        title: 'Artworks',
        content: <ArtworksList 
                  collection={this.state.artworksModel.list} 
                  loading={this.state.artworksModel.loading}/>
      }]

    return (
      <ScrollView style={styles.gene}>
        <Text h4>{model.display_name ? model.display_name : model.name }</Text>
        <ArtsyImageView imhref={model._links.image.href} size={'tall'} />
        <Text style={{marginBottom: 20}}><Paragraph>Description: </Paragraph>{model.description}</Text>
        <AccordionView sections={sections} />

         <FavoriteButton 
          isFavorite={this.state.isFavorite}
          onNotFavorite={() =>  this.onNotFavorite() }
          onFavorite={() => this.onFavorite() }
        />
      </ScrollView>
    )
  }

}



const styles = StyleSheet.create({
  gene: {
    flex: 1,
    marginTop: 20
  }
})

export default Gene