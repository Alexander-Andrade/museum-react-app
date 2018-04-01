import ArtsyModel from './ArtsyModel'

class ArtworksModel extends ArtsyModel {
 
  constructor() {
    super("https://api.artsy.net/api/artworks?size=2")
  }

}

export default ArtworksModel