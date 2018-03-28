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
import PaginationButtons from '../components/PaginationButtons'
import { observer, inject } from 'mobx-react'
import { List, ListItem } from 'react-native-elements'
import ArtsyImage from '../models/ArtsyImage'
import _ from 'lodash'

@inject("genesModel") @observer
class GenesScreen extends React.Component {
	
	static navigationOptions = {
		title: 'Genes'
	}
	

	constructor(props) {
		super(props);
		
	}
	
	renderGenesList() {
		const { genesModel } = this.props

		if (genesModel.list.length > 0) {
			return (
				<List>
				{
					genesModel.list.map((gene) => {
						const image_href = new ArtsyImage(gene._links.image.href).thumbnail()
						// return	<ListItem	 
						// 					avatar={{uri: image_href}} 
						// 					key={artist.id} 
						// 					title={artist.name}
						// 					onPress={() => this.props.navigation.navigate("Artist", { model: artist })}  />
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
				<BasicHeader text = "Genes" />
				<ScrollView style={styles.container}>
					{/* {this.renderGenesList()} */}
					{/* <PaginationButtons 
						loadPrev={this.props.genesModel.loadPrev}
						loadNext={this.props.genesModel.loadNext} /> */}
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

export default GenesScreen