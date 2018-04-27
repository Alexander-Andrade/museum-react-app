import { TabNavigator } from 'react-navigation'
import ArtistScreen from '../screens/ArtistScreen'
import ArtworkScreen from '../screens/ArtworkScreen'

export default TabNavigator({
    Artists: {
      screen: FavoriteArtistsScreen
    },
    Artworks: {
        screen: FavoriteArtworksScreen
    },
    Genes: {
      screen: FavoriteGenesScreen
    }
  },
  {
    initialRouteName: 'FavoriteArtists',
  }
)