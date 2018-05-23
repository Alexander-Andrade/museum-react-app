import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import imageHref from '../models/ArtsyImage'
import { List, ListItem, Card, Button } from 'react-native-elements'
import { ActivityIndicator, Text } from 'react-native'
import _ from 'lodash'


class GenesList extends Component {

  
  render() {
    const { collection, loading, isFavorite } = this.props

    if (!_.isEmpty(collection) && !loading) {

      return (
        <List containerStyle={{marginTop: 0}}>
          {
            collection.map((gene) => {
              return <ListItem
                avatar={{ uri: imageHref(gene._links.image.href, 'thumb') }}
                key={gene.id}
                title={ gene.display_name ? gene.display_name : gene.name }
                onPress={() => this.props.navigation.navigate("Gene", { model: gene })} />
            })
          }
        </List>
      )

    } else if(_.isEmpty(collection)){
      return (
      
        <Text style={{fontSize: 22, textAlign: 'center'}}>There is no genes</Text>
      
     )
    }
    else {
      return <ActivityIndicator size="large" />
    }
  }
}

export default withNavigation(GenesList)

