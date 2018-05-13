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
import imageHref from '../models/ArtsyImage'
import ScrollViewScreenContainer from '../components/ScrollViewScreenContainer'
import _ from 'lodash'


@inject("genesModel") 
@observer
class GenesScreen extends React.Component {
	
	static navigationOptions = {
		title: 'Genes'
	}
	
	constructor(props) {
		super(props);
		
	}
	
	renderGenesList() {
		const { genesModel } = this.props

		if (!_.isEmpty(genesModel.list) && genesModel.list.length > 0) {
			return (
				<ScrollView>
				{
					genesModel.list.map((gene) => {
						return (
							<TouchableOpacity 
								key={gene.id}
								onPress={() => this.props.navigation.navigate("Gene", { model: gene })}>
								<Card
									title={ !!gene.display_name ? gene.display_name : gene.name }
									image={{ uri: imageHref(gene._links.image.href, 'tall') }} >
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
			<ScrollViewScreenContainer>
				<BasicHeader text = "Genes" />
        {this.renderGenesList()}
        <PaginationButtons 
          loadPrev={this.props.genesModel.loadPrev.bind(this.props.genesModel)}
          loadNext={this.props.genesModel.loadNext.bind(this.props.genesModel)} />
			</ScrollViewScreenContainer>
		)
	}
}


export default GenesScreen