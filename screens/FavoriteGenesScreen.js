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
import { observer, inject } from 'mobx-react'
import { List, ListItem, Card, Button, Divider } from 'react-native-elements'
import imageHref from '../models/ArtsyImage'
import ScrollViewScreenContainer from '../components/ScrollViewScreenContainer'
import SearchResultsList from '../components/SearchResultsList'
import _ from 'lodash'


@inject("favoriteGenes")
@inject("artsySearch") 
@observer
class GenesScreen extends React.Component {
	
	static navigationOptions = {
		title: 'Genes'
	}
	
	constructor(props) {
		super(props);
		
	}
	
	renderGenesList() {
		const { favoriteGenes } = this.props

		if (!_.isEmpty(favoriteGenes.list)) {
			return (
				<ScrollView>
				{
					favoriteGenes.list.map((gene) => {
						return (
							<TouchableOpacity 
								key={gene.id}
								onPress={() => this.props.navigation.navigate("Gene", { model: gene, isFavorite: true })}>
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

	renderBody() {
		return this.props.artsySearch.active == true ? (
			<SearchResultsList 
				searchModel={this.props.artsySearch}
				navigateTo={"Gene"}
				/>
		) : (
			<ScrollView>
				{this.renderGenesList()}
        
			</ScrollView>
		)
	}

	render() {
		return (
			<ScrollViewScreenContainer>
				<BasicHeader 
					text="Genes"
					artsySearch = {this.props.artsySearch}
					searchType = {"artwork"} 
				/>
        {this.renderBody()}
			</ScrollViewScreenContainer>
		)
	}
}


export default GenesScreen