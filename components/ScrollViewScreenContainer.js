import React, { Component } from 'react' 
import { StyleSheet, ScrollView } from 'react-native'

class ScrollViewScreenContainer extends Component {

  render() {
    return <ScrollView {...this.props} keyboardShouldPersistTaps='always' contentContainerStyle={styles.container}/>
  }
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'stretch',
		justifyContent: 'flex-start',
	}
})

export default ScrollViewScreenContainer;