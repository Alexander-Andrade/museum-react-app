import ArtsyModel from './ArtsyModel'

class GenesModel extends ArtsyModel {
 
  constructor() {
    super("https://api.artsy.net/api/genes?size=2")
  }

}

export default GenesModel