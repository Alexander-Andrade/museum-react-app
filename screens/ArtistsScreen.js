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

		if (artistsModel.artists.length > 0){
			return (
				<List>
				{
					artistsModel.artists.map((artist) => {
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
					<View style={{flexDirection: 'row', flex: 1}}>
					<View>
							<Button 
								style={{flex: 1}}
								title="<"
								onPress={() => this.props.artistsModel.loadPrev() }
							/>
						</View>
						<View>
							<Button style={{flex: 1}}
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
	}

})

export default ArtistsScreen;