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
import imageHref from '../models/ArtsyImage'
import ScrollViewScreenContainer from '../components/ScrollViewScreenContainer'
import _ from 'lodash'


@inject("artworksModel") 
@observer
class ArtworksScreen extends React.Component {
	
	static navigationOptions = {
		title: 'Artworks'
	}
	

	constructor(props) {
		super(props);
		
	}
	
	renderArtworksList() {
		const { artworksModel } = this.props

		if (!_.isEmpty(artworksModel.list) && artworksModel.list.length > 0) {
			return (
				<ScrollView style={styles.artworksList}>
				{
					artworksModel.list.map((artwork) => {
						return (
							<TouchableOpacity 
								key={artwork.id}
								onPress={() => this.props.navigation.navigate("Artwork", { model: artwork })}>
								<Card
									key={artwork.id}
									title={artwork.title}
									image={{ uri: imageHref(artwork._links.image.href, 'large') }} >
								</Card>
							</TouchableOpacity>
						)
					})
				}
				</ScrollView>
			)	
		
		}	else {
			return null
		}
	}

	render() {
		return (
			<ScrollViewScreenContainer>
				<BasicHeader text="Artworks" />
				{this.renderArtworksList()}
				<PaginationButtons
					loadPrev={this.props.artworksModel.loadPrev.bind(this.props.artworksModel)}
					loadNext={this.props.artworksModel.loadNext.bind(this.props.artworksModel)} />
			</ScrollViewScreenContainer>
		);
	}
}


export default ArtworksScreen