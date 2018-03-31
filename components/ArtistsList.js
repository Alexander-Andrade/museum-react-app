import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import ArtsyImage from '../models/ArtsyImage'
import { List, ListItem, Card, Button } from 'react-native-elements'
import { ActivityIndicator } from 'react-native'
import { observer, inject } from 'mobx-react'

@inject("artistsModel") @observer
class ArtistsList extends Component {

  render() {
    const { artistsModel } = this.props

    if (artistsModel.list.length > 0 && !artistsModel.loading) {
      return (
        <List>
          {
            artistsModel.list.map((artist) => {
              const image_href = new ArtsyImage(artist._links.image.href).thumbnail()
              return <ListItem
                avatar={{ uri: image_href }}
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

