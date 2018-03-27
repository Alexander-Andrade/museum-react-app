import React from 'react'
import {
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Button
} from 'react-native'
import BasicHeader from '../components/BasicHeader'
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

		if (artistsModel.list.length > 0) {
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
			return null
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<BasicHeader text = "Artists" />
				<ScrollView style={styles.container}>
					{this.renderArtistsList()}
					<View style={styles.buttonsPair}>
						<View style={styles.pairedButton}>
							<Button 
								title="<"
								onPress={() => this.props.artistsModel.loadPrev() }
							/>
						</View>
						<View style={styles.pairedButton}>
							<Button
								title=">"
								onPress={() => this.props.artistsModel.loadNext() }
							/>
						</View>
					</View>
					
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	},
	buttonsPair: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center'
	},
	pairedButton: {
		flex: 1
	}
})

export default ArtistsScreen;