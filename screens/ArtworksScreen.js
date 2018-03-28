import React from 'react'
import {
	Platform,
	ScrollView,
	StyleSheet,
	TouchableOpacity,
	View,
	Text
} from 'react-native'
import BasicHeader from '../components/BasicHeader'
import PaginationButtons from '../components/PaginationButtons'
import { observer, inject } from 'mobx-react'
import { List, ListItem, Card, Button } from 'react-native-elements'
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
						const image_href = new ArtsyImage(artwork._links.image.href).large()
						return (
							<Card
								key={artwork.id}
								text={artwork.title}
								image={{uri: image_href}}>
								<Button
									style={{marginBottom: 10}}
									backgroundColor='#03A9F4'
									fontFamily='Lato'
									buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
									title='VIEW' 
									onPress={() => this.props.navigation.navigate("Artwork", { model: artwork })}
									/>
							</Card>
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
			<View style={styles.container}>
				<BasicHeader text = "Artworks" />
				<ScrollView style={styles.container}>
					{this.renderArtworksList()}
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