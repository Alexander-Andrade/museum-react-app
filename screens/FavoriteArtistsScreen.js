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
import ArtsySettings from '../constants/ArtsySettings'

@inject("artworksModel")
@inject("genesModel")  
@observer
class Artist extends Component {
 
  constructor(props) {
    super(props)

    const { model } = this.props.navigation.state.params
    this.props.artworksModel.saveAndLoad(model._links.artworks.href, ArtsySettings.queryLimit)
    this.props.genesModel.saveAndLoad(model._links.genes.href, ArtsySettings.queryLimit)
    console.log('artist constr')
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
                  collection={this.props.artworksModel.list}  
                  loading={this.props.artworksModel.loading} />
    
    },
    {
      title: 'Genes',
      content: <GenesList 
                  collection={this.props.genesModel.list} 
                  loading={this.props.genesModel.loading}/>
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

	componentWillUnmount () {
    this.props.artworksModel.loadPrev()
    this.props.genesModel.loadPrev()
    console.log('artist unmount')
	}

}


const styles = StyleSheet.create({
	artist: {
    flex: 1,
    marginTop: 20
  }
})

export default Artist