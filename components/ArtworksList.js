import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import imageHref from '../models/ArtsyImage'
import { List, ListItem, Card, Button } from 'react-native-elements'
import { ActivityIndicator, Text } from 'react-native'
import _ from 'lodash'


class ArtworkstsList extends Component {

  
  render() {
    const { collection, loading } = this.props

    if (!_.isEmpty(collection) && !loading) {
      return (
        <List containerStyle={{marginTop: 0}}>
          {
            collection.map((artwork) => {
              return <ListItem
                avatar={{ uri: imageHref(artwork._links.image.href, 'small') }}
                key={artwork.id}
                title={artwork.title}
                onPress={() => this.props.navigation.navigate("Artwork", { model: artwork })} />
            })
          }
        </List>
      )

    } else if (_.isEmpty(collection)) {
      return <Text style={{fontSize: 22, textAlign: 'center'}}>There is no artworks</Text>
    } 
    else {
      return <ActivityIndicator size="large" />
    }
  }
}

export default withNavigation(ArtworkstsList)

