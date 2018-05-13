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

@inject("artistsModel")
@inject("artsySearch")  
@observer
class ArtistsScreen extends React.Component {
	
	static navigationOptions = {
		title: 'Artists'
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
			<View>
				<ArtistsList 
					collection={this.props.artistsModel.list} 
					loading={this.props.artistsModel.loading}/>
				<PaginationButtons 
					loadPrev={this.props.artistsModel.loadPrev.bind(this.props.artistsModel)}
					loadNext={this.props.artistsModel.loadNext.bind(this.props.artistsModel)} />
			</View>
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



export default ArtistsScreen;