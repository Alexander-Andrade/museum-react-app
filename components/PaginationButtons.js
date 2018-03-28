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
        <View style={styles.pairedButton}>
          <Button
            icon={
              <Icon
                name='arrow-left'
                size={15}
                color='white'
              />
            }
            text='Previous'
            style={styles.button}
            onPress={() => this.props.loadPrev()}
          />
        </View>
        <View style={styles.pairedButton}>
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
            style={styles.button}
            onPress={() => this.props.loadNext()}
          />
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
	buttonsPair: {
		flex: 1,
		flexDirection: 'row',
		// alignItems: 'center',
    // justifyContent: 'center'
    marginTop: 10
	},
	pairedButton: {
		flex: 1
  },
  button: {
    flex: 1
  }
})


export default PaginationButtons

