import React, { Component } from 'react' 
import {
	Platform,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
	Button
} from 'react-native'
import { Text } from 'react-native-elements'
import ArtsyImageView from '../components/ArtsyImageView'
import Paragraph from '../components/Paragraph'
import ArtworksList from '../components/ArtworksList'
import GenesList from '../components/GenesList'
import Category from '../components/Category'
import { observer, inject } from 'mobx-react'
import AccordionView from '../components/AccordionView'
import ArtsyModel from '../models/ArtsyModel'
import ArtsySettings from '../constants/ArtsySettings'


@observer
class Artist extends Component {
 
  constructor(props) {
    super(props)

    const { model } = this.props.navigation.state.params
    
    
    this.state = {
      artworksModel: new ArtsyModel({
        collection:'artworks', 
        href: model._links.artworks.href, 
        limit: ArtsySettings.queryLimit
      }),
      genesModel: new ArtsyModel({
        collection: 'genes',
        href: model._links.genes.href, 
        limit: ArtsySettings.queryLimit
      })
    }
    console.log(model._links.artworks.href)
    console.log(model._links.genes.href)
    this.state.artworksModel.loadNext();
    this.state.genesModel.loadNext();
    console.log('after warning')
  }

  renderHeader () {
    const { model } = this.props.navigation.state.params
    
    return (
      <View>
        <Text h4>{model.name}</Text>
        <Text>
          {model.birthday}
          {
            !!model.deathday &&
            <Text>- {model.deathday}</Text>
          }
        </Text>
      </View>
      )
  }

  renderInfo() {
    const { model } = this.props.navigation.state.params
    const sections = [
    {
      title: 'Artworks',
      content: <ArtworksList 
                  collection={this.state.artworksModel.list}  
                  loading={this.state.artworksModel.loading} 
                  containerStyle={{ marginTop: -20 }}/>
    
    },
    {
      title: 'Genes',
      content: <GenesList 
                  collection={this.state.genesModel.list} 
                  loading={this.state.genesModel.loading}
                  containerStyle={{ marginTop: -20 }}/>
    }]
    
    
    return (
      <View>
        {
          !!model.biography && 
          <Text><Paragraph>Biography: </Paragraph>{model.biography}</Text>
        }
        <Text style={{marginBottom: 20}}><Paragraph>Hometown: </Paragraph>{model.hometown}</Text>
        <AccordionView sections={sections} />

      </View>
    )
  }


  render() {
    const { model } = this.props.navigation.state.params

    return (
      <ScrollView style={styles.artist}>
        {this.renderHeader()}
        <ArtsyImageView imhref={model._links.image.href} size={'large'} />
        {this.renderInfo()}
      </ScrollView>
    )
  }
}


const styles = StyleSheet.create({
	artist: {
    flex: 1,
    marginTop: 20
  }
})

export default Artist