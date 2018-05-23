import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import imageHref from '../models/ArtsyImage'
import { List, ListItem, Card, Button } from 'react-native-elements'
import { ActivityIndicator, Text } from 'react-native'
import _ from 'lodash'


class ArtistsList extends Component {

  render() {
    const { collection, loading, isFavorite } = this.props

    if (!_.isEmpty(collection) && !loading) {
      return (
        <List containerStyle={{marginTop: 0}}>
          {
            collection.map((artist) => {
              if(!_.isEmpty(_.get(artist, '_links.image.href'))) {
                return <ListItem
                  avatar={{ uri: imageHref(artist._links.image.href, 'four_thirds') }}
                  key={artist.id}
                  title={artist.name}
                  onPress={() => this.props.navigation.navigate("Artist", { model: artist })} />
              }else{
                return <ListItem
                  key={artist.id}
                  title={artist.name}
                  onPress={() => this.props.navigation.navigate("Artist", { model: artist })} />
              }
            })
          }
        </List>
      )
      
      
    }else if (_.isEmpty(collection)) {
      return <Text style={{fontSize: 22, textAlign: 'center'}}>There is no artists</Text>
    }  else {
      return <ActivityIndicator size="large" />
    }
  }
}

export default withNavigation(ArtistsList)

