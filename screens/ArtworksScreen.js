import React from 'react';
import {
	Image,
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';



class ArtworksScreen extends React.Component {
  static navigationOptions = {
		title: 'Artworks'
	}
  
  constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Sec screen</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
})

export default ArtworksScreen;