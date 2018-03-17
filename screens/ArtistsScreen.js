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
import { Header } from 'react-native-elements';

class MainScreen extends React.Component {
	
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
				<Header
					leftComponent={{ icon: 'menu', color: '#fff' , onPress: () => this.props.navigation.navigate('DrawerOpen') }}
					centerComponent={{ text: 'Artists', style: { color: '#fff' } }}
					rightComponent={{ icon: 'search', color: '#fff' }}
				/>
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

export default MainScreen;