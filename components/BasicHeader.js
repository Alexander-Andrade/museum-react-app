import React, { Component } from 'react' 
import { withNavigation } from 'react-navigation'
import { Header, SearchBar } from 'react-native-elements'
import { TextInput } from 'react-native'
import Layout from '../constants/Layout'
import { observer, inject } from 'mobx-react'


@observer
class BasicHeader extends Component {


  constructor(props) {
    super(props)
    
    this.state = {
      searchText: ''
    }
  }

  enterSearchMode() {
    this.props.artsySearch.activate()
  }

  leaveSearchMode() {
    this.props.artsySearch.disactivate()
  }


  clearSearchInput() {
    this.setState({searchText: ''})
    this.searchBar.clear()
  }

  onSearch(text) {
    this.setState({searchText: text})
    
    this.props.artsySearch.search(text, this.props.searchType)
  }


  render() {

    const searchBar = <TextInput
            ref={input => { this.searchBar = input }} 
            style={{ 
              width: Layout.window.width - 80,
              color: 'white' 
            }}
            placeholder="Type Here..."
            autoFocus={true}
            onChangeText={ (text) => this.onSearch(text) }
            value={this.state.searchText}
          />

    return this.props.artsySearch.active == false ?
      (<Header
        leftComponent={{ icon: 'menu', color: '#fff', onPress: () => this.props.navigation.navigate('DrawerOpen') }}
        centerComponent={{ text: this.props.text, style: { color: '#fff' } }}
        rightComponent={{ icon: 'search', color: '#fff', onPress: () => this.enterSearchMode()  }}
      />)
      :
      (
        <Header
          leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => this.leaveSearchMode() }}
          centerComponent={ searchBar }
          rightComponent={{ icon: 'close', color: '#fff', onPress: () => this.clearSearchInput() }}
      />
      )
  }
}


export default withNavigation(BasicHeader)

