import React from 'react'
import {
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
  Button,
  ActivityIndicator
} from 'react-native'
import BasicHeader from '../components/BasicHeader'
import PaginationButtons from '../components/PaginationButtons'
import { observer, inject } from 'mobx-react'
import { List, ListItem } from 'react-native-elements'
import ArtsyImage from '../models/ArtsyImage'
import ArtistsList from '../components/ArtistsList'
import _ from 'lodash'

@inject("artistsModel") @observer
class ArtistsScreen extends React.Component {
	
	static navigationOptions = {
		title: 'Artists'
	}
	

	constructor(props) {
		super(props);
		
	}
	
	render() {
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<BasicHeader text = "Artists" />
				<ArtistsList />
				<PaginationButtons 
					loadPrev={this.props.artistsModel.loadPrev.bind(this.props.artistsModel)}
					loadNext={this.props.artistsModel.loadNext.bind(this.props.artistsModel)} />
			</ScrollView>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
    flexDirection: 'column',
    alignContent: 'center',
    alignItems: 'stretch',
    justifyContent: 'space-between',
	}
})

export default ArtistsScreen;