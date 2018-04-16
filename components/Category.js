import React, { Component } from 'react' 
import { StyleSheet, View, Text } from 'react-native'

class Category extends Component {

  render() {
    return (
      <View style={styles.headerContainer}>
        {/* <Icon color="white" name="invert-colors" size={62} /> */}
        <Text {...this.props} style={styles.heading} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
    backgroundColor: '#2288DC',
  },
  heading: {
    color: 'white',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 22,
  }
})

export default Category

