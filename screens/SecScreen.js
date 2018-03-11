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

class SecScreen extends React.Component {
  static navigationOptions = {
		title: 'Sec Title'
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

export default SecScreen;