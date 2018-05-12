import React, { Component } from 'react' 
import { withNavigation } from 'react-navigation'
import { Header } from 'react-native-elements'

class BasicHeader extends Component {

  constructor(props) {
    super(props)

    this.state = {
      searchMode: false
    }
  }


  render() {
    return this.state.searchMode == false ?
      (<Header
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.navigate('DrawerOpen') }}
        centerComponent={{ text: this.props.text, style: { color: '#fff' } }}
        rightComponent={{ icon: 'search', color: '#fff', onPress: () => this.setState({ searchMode: true}) }}
      />)
      :
      (
        <Header
        leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => this.setState({ searchMode: false}) }}
        centerComponent={{ text: this.props.text, style: { color: '#fff' } }}
      />
      )
  }
}

export default withNavigation(BasicHeader)

