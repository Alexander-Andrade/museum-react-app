import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { withNavigation } from 'react-navigation'
import { List, ListItem, Card, Button } from 'react-native-elements'
import axios from 'axios'
import _ from 'lodash'



@observer
class SearchResultsList extends Component {

  async onDetailsPress(result) {
    const model = await this.props.searchModel.loadResult(result)
    console.log(model)
    this.props.navigation.navigate(this.props.navigateTo, { model:  model, isFavorite: false})
  }

  render() {
    const { searchModel } = this.props
    
    if (!_.isEmpty(searchModel.searchResults)) {
      return (
        <List containerStyle={{marginTop: 0}}>
          {
            _.map(searchModel.searchResults, (result, i) => {
              return <ListItem
                avatar={{ uri: result._links.thumbnail.href }}
                key={i}
                title={result.title}
                onPress={() => this.onDetailsPress(result) } 
                />
            })
          }
        </List>
      )

    }
    else{
      return null
    }
  }
}

export default withNavigation(SearchResultsList)

