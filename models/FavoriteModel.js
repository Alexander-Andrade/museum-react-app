import {observable, action} from 'mobx'
import Datastore from 'react-native-local-mongodb'
import ArtsySettings from '../constants/ArtsySettings'
import _ from 'lodash'



class FavoriteModel {

  @observable list = []
  @observable loading = true
  
  
  constructor(params){
    this.store = new Datastore({filename: params.collection, autoload: true})
    this.store.ensureIndex({fieldName: params.indexField, unique: true}, (err)=>{})

    this.store.find({}, (err, docs) => {
      this.list = docs
      this.loading = false
    })
  }

  @action
  insert(doc){
    this.store.insert(doc, (err, newDoc) => console.log(err))
    
    this.store.find({}, (err, docs) => {
      this.list = docs
    })
  }

  @action
  remove(params) {
    this.store.remove(params)

    this.store.find({}, (err, docs) => {
      this.list = docs
    })
  }
}

export default FavoriteModel