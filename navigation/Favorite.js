import { createTabNavigator } from 'react-navigation'
import ArtistScreen from '../screens/ArtistScreen'
import ArtworkScreen from '../screens/ArtworkScreen'

export default createTabNavigator({
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