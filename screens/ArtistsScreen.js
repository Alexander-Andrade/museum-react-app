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
import _ from 'lodash'

@inject("artistsModel") @observer
class ArtistsScreen extends React.Component {
	
	static navigationOptions = {
		title: 'Artists'
	}
	

	constructor(props) {
		super(props);
		
	}
	
	renderArtistsList() {
		const { artistsModel } = this.props

		if (artistsModel.list.length > 0 && !artistsModel.loading) {
			return (
				<List>
				{
					artistsModel.list.map((artist) => {
						const image_href = new ArtsyImage(artist._links.image.href).thumbnail()
						return	<ListItem	 
											avatar={{uri: image_href}} 
											key={artist.id} 
											title={artist.name}
											onPress={() => this.props.navigation.navigate("Artist", { model: artist })}  />
					})
				}
				</List>
			)	
		
		}	else {
			return <ActivityIndicator size="large"/>
		}
	}

	render() {
		return (
			<ScrollView contentContainerStyle={styles.container}>
				<BasicHeader text = "Artists" />
				{this.renderArtistsList()}
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