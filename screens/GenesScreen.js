import React from 'react'
import {
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from 'react-native'
import BasicHeader from '../components/BasicHeader'
import PaginationButtons from '../components/PaginationButtons'
import { observer, inject } from 'mobx-react'
import { List, ListItem, Card, Button, Divider } from 'react-native-elements'
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
				<ScrollView>
				{
					genesModel.list.map((gene) => {
						const image_href = new ArtsyImage(gene._links.image.href).tall()

						return (
							<TouchableOpacity onPress={() => this.props.navigation.navigate("Gene", { model: gene })}>
								<Card
									key={gene.id}
									title={ !!gene.display_name ? gene.display_name : gene.name }
									image={{uri: image_href}} >
								</Card>
							</TouchableOpacity>
						)
					})
				}
				</ScrollView>
			)	
		
		}	else {
			return null
		}
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<BasicHeader text = "Genes" />
        {this.renderGenesList()}
        <PaginationButtons 
          loadPrev={this.props.genesModel.loadPrev.bind(this.props.genesModel)}
          loadNext={this.props.genesModel.loadNext.bind(this.props.genesModel)} />
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column'
	}
})

export default GenesScreen