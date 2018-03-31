import React from 'react'
import {
	Platform,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
  Text,
  Modal
} from 'react-native'
import BasicHeader from '../components/BasicHeader'
import PaginationButtons from '../components/PaginationButtons'
import { observer, inject } from 'mobx-react'
import { List, ListItem, Card, Button, Divider } from 'react-native-elements'
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
				<List style={styles.artworksList}>
				{
					artworksModel.list.map((artwork) => {
						const image_href = new ArtsyImage(artwork._links.image.href).large()
						return (
							<TouchableOpacity onPress={() => this.props.navigation.navigate("Artwork", { model: artwork })}>
								<Card
									key={artwork.id}
									title={artwork.title}
									image={{uri: image_href}} >
								</Card>
							</TouchableOpacity>
						)
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
			<ScrollView style={styles.container}>
				<BasicHeader text="Artworks" />
				{this.renderArtworksList()}
				<PaginationButtons
					loadPrev={this.props.artworksModel.loadPrev.bind(this.props.artworksModel)}
					loadNext={this.props.artworksModel.loadNext.bind(this.props.artworksModel)} />
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
  },
  artworksList: {
    paddingBottom: 10
  }
})

export default ArtworksScreen