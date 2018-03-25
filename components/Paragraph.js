import React from 'react'
import { Text } from 'react-native-elements'

export class Paragraph extends React.Component {

  render() {
    return <Text {...this.props} style={{fontWeight: 'bold'}} />
  }
}

export default Paragraph