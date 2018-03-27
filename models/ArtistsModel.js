import ArtsyModel from './ArtsyModel'

class ArtistsModel extends ArtsyModel {
 
  constructor() {
    super("https://api.artsy.net/api/artists?artworks=true&sort=-trending&size=5")
  }

}

export default ArtistsModel