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
import Artist from '../components/Artist'


@inject("artistsModel") @observer
class ArtistsScreen extends React.Component {
	
	static navigationOptions = {
		title: 'Artists'
	}
	
	constructor(props) {
		super(props);
		
		this.state = {};
	}

	
	renderArtists() {
		const { artistsModel } = this.props

		if (artistsModel.artists.length > 0){
			return artistsModel.artists.map((artist) => {
				return (<Artist model={artist} key={artist.id}/>)
			})
		}	else {
			return null
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<BasicHeader text = "Artists" />
				<ScrollView style={styles.container}>
					{this.renderArtists()}
					<Button
						title="Artworks"
						onPress={() => this.props.navigation.navigate('Artworks')}
					/>
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