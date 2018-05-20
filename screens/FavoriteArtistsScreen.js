import React from 'react'
import {
	Platform,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
  Button,
  ActivityIndicator
} from 'react-native'
import BasicHeader from '../components/BasicHeader'
import PaginationButtons from '../components/PaginationButtons'
import { observer, inject } from 'mobx-react'
import ArtistsList from '../components/ArtistsList'
import ScrollViewScreenContainer from '../components/ScrollViewScreenContainer'
import SearchResultsList from '../components/SearchResultsList'
import _ from 'lodash'


@inject("favoriteArtists")
@inject("artsySearch")  
@observer
class FavoriteArtistsScreen extends React.Component {
	
	static navigationOptions = {
		title: 'Artists',
	}
	

	constructor(props) {
		super(props);

	}
	

	renderBody() {
		return this.props.artsySearch.active == true ? (
			<SearchResultsList 
				searchModel={this.props.artsySearch}
				navigateTo={"Artist"}
				/>
		) : (
			<ScrollView>
				<ArtistsList 
					collection={this.props.favoriteArtists.list} 
					loading={this.props.favoriteArtists.loading}/>
			</ScrollView>
		)
	}

	render() {
		return (
			<ScrollViewScreenContainer>
				<BasicHeader 
					text = "Artists"
					artsySearch = {this.props.artsySearch}
					searchType = {"artist"} />
					{this.renderBody()}
			</ScrollViewScreenContainer>
		)
	}
}



export default FavoriteArtistsScreen;