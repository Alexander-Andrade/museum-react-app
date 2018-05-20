import React, { Component } from 'react' 
import { StyleSheet, View, Text } from 'react-native'
import Color from '../constants/Colors'
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'

class FavoriteButton extends Component {


  constructor(props) {
    super(props)
   
  }

  render() {
    const { isFavorite } = this.props

    return (
      <View>
        {
          isFavorite == false ?
          (
            <Button
              large
              icon={{ name:'favorite' }}
              title = 'Add to Favorite'
              buttonStyle={styles.favoriteButton}
              onPress={()=> this.props.onNotFavorite() } />
          )
          :
          (
            <Button
              large
              title = 'Remove from Favorite'
              buttonStyle={styles.favoriteButton}
              onPress={()=> this.props.onFavorite() } />
          )
          }
      </View>
      )
  }
}

const styles = StyleSheet.create({
  favoriteButton: {
    marginTop: 20
  }
})


export default FavoriteButton

