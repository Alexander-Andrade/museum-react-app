class ArtsyImage {

  constructor(href){
    this.href = href
  }

  thumbnail() {
    return this.href.replace("{image_version}","four_thirds")
  }

  large() {
    return this.href.replace("{image_version}","large")
  }

  square() {
    return this.href.replace("{image_version}","square")
  }

  tall() {
    return this.href.replace("{image_version}","tall")
  }
}

export default ArtsyImage