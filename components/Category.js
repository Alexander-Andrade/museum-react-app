import React, { Component } from 'react' 
import { StyleSheet, View, Text } from 'react-native'

class Category extends Component {

  render() {
    return (
      <View style={styles.headerContainer}>
        {/* <Icon color="white" name="invert-colors" size={62} /> */}
        <Text style={styles.heading}>{ this.props.text }</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    // padding: 10,
    // backgroundColor: 'blue',
  },
  heading: {
    // color: 'white',
    marginTop: 20,
    fontSize: 22,
  }
})

export default Category

