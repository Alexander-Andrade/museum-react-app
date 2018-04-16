import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import imageHref from '../models/ArtsyImage'
import { List, ListItem, Card, Button } from 'react-native-elements'
import { ActivityIndicator } from 'react-native'
import _ from 'lodash'


class ArtistsList extends Component {

  render() {
    const { collection, loading } = this.props

    if (!_.isEmpty(collection) && collection.length > 0 && !loading) {
      return (
        <List>
          {
            collection.map((artist) => {
              return <ListItem
                avatar={{ uri: imageHref(artist._links.image.href, 'four_thirds') }}
                key={artist.id}
                title={artist.name}
                onPress={() => this.props.navigation.navigate("Artist", { model: artist })} />
            })
          }
        </List>
      )

    } else {
      return <ActivityIndicator size="large" />
    }
  }
}

export default withNavigation(ArtistsList)

