import React, { Component } from 'react'
import { withNavigation } from 'react-navigation'
import imageHref from '../models/ArtsyImage'
import { List, ListItem, Card, Button } from 'react-native-elements'
import { ActivityIndicator } from 'react-native'
import _ from 'lodash'
import { observer, inject } from 'mobx-react'

@observer
class GenesList extends Component {

  
  render() {
    const { collection, loading } = this.props

    if (!_.isEmpty(collection) && collection.length > 0 && !loading) {
      console.log("collection")

      return (
        <List>
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

    } else {
      return <ActivityIndicator size="large" />
    }
  }
}

export default withNavigation(GenesList)

