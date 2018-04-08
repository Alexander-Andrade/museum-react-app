import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import imageHref from '../models/ArtsyImage'
import { List, ListItem, Card, Button } from 'react-native-elements'
import { ActivityIndicator } from 'react-native'
import { observer, inject } from 'mobx-react'
import _ from 'lodash'

@inject("artworksModel") @observer
class ArtworkstsList extends Component {

  
  render() {
    const { artworksModel } = this.props

    if (!_.isEmpty( artworksModel.list) && artworksModel.list.length > 0 && !artworksModel.loading) {
      return (
        <List>
          {
            artworksModel.list.map((artwork) => {
              return <ListItem
                avatar={{ uri: imageHref(artwork._links.image.href, 'small') }}
                key={artwork.id}
                title={artwork.title}
                onPress={() => this.props.navigation.navigate("Artwork", { model: artwork })} />
            })
          }
        </List>
      )

    } else {
      return <ActivityIndicator size="large" />
    }
  }
}

export default withNavigation(ArtworkstsList)

