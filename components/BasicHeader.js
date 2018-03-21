import React, { Component } from 'react' 
import { withNavigation } from 'react-navigation'
import { Header } from 'react-native-elements'

class BasicHeader extends Component {

  render() {
    return (
      <Header
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.navigate('DrawerOpen') }}
        centerComponent={{ text: this.props.text, style: { color: '#fff' } }}
        rightComponent={{ icon: 'search', color: '#fff' }}
      />
    )
  }
}

export default withNavigation(BasicHeader)

