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

class MainScreen extends React.Component {
	
	static navigationOptions = {
		title: 'Main Title'
	}
	
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Main screen</Text>
				<Button
					title="Go to Sec"
					onPress={ () => this.props.navigation.navigate('Sec') }
				/>
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

export default MainScreen;