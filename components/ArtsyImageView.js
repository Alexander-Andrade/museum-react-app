import React, { Component } from 'react' 
import imageHref from '../models/ArtsyImage'
import Image from 'react-native-scalable-image'
import Layout from '../constants/Layout'


class ArtsyImageView extends Component {

  render() {
    return (<Image 
              source={{ uri: imageHref(this.props.imhref, this.props.size) }}
              width={ Layout.window.width }
              
            />
    ) 
  }
}

export default ArtsyImageView

