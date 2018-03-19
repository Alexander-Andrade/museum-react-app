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

	render() {
		return (
			<View style={styles.container}>
				<BasicHeader text = "Artists" />
				<ScrollView>
					<Text>Artists</Text>
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
		flex: 1
	},

})

export default ArtistsScreen;