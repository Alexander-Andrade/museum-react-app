import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Button
} from 'react-native';
import BasicHeader from '../components/BasicHeader'
import { observer, inject } from 'mobx-react';


@inject("artistsModel") @observer
class ArtistsScreen extends React.Component {
	
	static navigationOptions = {
		title: 'Artists'
	}
	
	constructor(props) {
		super(props);
		
		this.state = {};
	}

	renderImage () {
		const { artistsModel } = this.props;
		
		if (artistsModel.artists.length > 0){
			console.log(`href=${artistsModel.artists[0]._links.thumbnail.href}`)
			return (<Image 
							source={{uri: artistsModel.artists[0]._links.thumbnail.href}}
							style={styles.image}
							/>
			) 
		}
		else {
			return null
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<BasicHeader text = "Artists" />
				<ScrollView style={styles.container}>
					{this.renderImage()}
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
	},
	image: {
		width: 50,
		height: 50
	}

})

export default ArtistsScreen;