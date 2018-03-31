import React, { Component } from 'react' 
import { Button } from 'react-native-elements'
import Icon from 'react-native-vector-icons/FontAwesome'
import {
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'

class PaginationButtons extends Component {

  render() {
    return (
      <View style={styles.buttonsPair}>
        <Button
          icon={
            <Icon
              name='arrow-left'
              size={15}
              color='white'
            />
          }
          text='Previous'
          onPress={() => this.props.loadPrev()}
        />
        <Button
          icon={
            <Icon
              name='arrow-right'
              size={15}
              color='white'
            />
          }
          iconRight
          text='Next'
          onPress={() => this.props.loadNext()}
        />
      </View>
    )
  }
}


const styles = StyleSheet.create({
	buttonsPair: {
		flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
	}
})


export default PaginationButtons

