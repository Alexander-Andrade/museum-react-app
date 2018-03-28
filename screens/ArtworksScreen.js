import React from 'react'
import {
	Platform,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
	Button
} from 'react-native'
import BasicHeader from '../components/BasicHeader'
import PaginationButtons from '../components/PaginationButtons'
import { observer, inject } from 'mobx-react'
import { List, ListItem } from 'react-native-elements'
import ArtsyImage from '../models/ArtsyImage'
import _ from 'lodash'

@inject("artworksModel") @observer
class ArtworksScreen extends React.Component {
	
	static navigationOptions = {
		title: 'Artworks'
	}
	

	constructor(props) {
		super(props);
		
	}
	
	renderArtworksList() {
		const { artworksModel } = this.props

		if (artworksModel.list.length > 0) {
			return (
				<List>
				{
					artworksModel.list.map((artwork) => {
						const image_href = new ArtsyImage(artwork._links.image.href).thumbnail()
						// return	<ListItem	 
						// 					avatar={{uri: image_href}} 
						// 					key={artist.id} 
						// 					title={artist.name}
						// 					onPress={() => this.props.navigation.navigate("Artist", { model: artist })}  />
					})
				}
				</List>
			)	
		
		}	else {
			return null
		}
	}


	render() {
		return (
			<View style={styles.container}>
				<BasicHeader text = "Artworks" />
				<ScrollView style={styles.container}>
					{/* {this.renderArtworksList()} */}
					{/* <PaginationButtons 
						loadPrev={this.props.artworksModel.loadPrev}
						loadNext={this.props.artworksModel.loadNext} /> */}
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	}
})

export default ArtworksScreen