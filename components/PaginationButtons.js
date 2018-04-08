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
          icon={{ name:'arrow-back' }}
          title='Previous'
          containerViewStyle={{width: '50%',  marginLeft: 0}}
          onPress={() => this.props.loadPrev()}
          
        />
        <Button
          iconRight={{ name:'arrow-forward' }}
          title='Next'
          containerViewStyle={{width: '50%', marginRight: 0}}
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
    justifyContent: 'space-around',
    marginTop: 20
	}
})


export default PaginationButtons

