import React, { Component } from 'react'
import Accordion from 'react-native-collapsible/Accordion'
import { StyleSheet, View, Text } from 'react-native'
import Category from '../components/Category'

class AccordionView extends Component {

  _renderHeader(section) {
    return (
      <Category>{section.title}</Category>
    );
  }

  _renderContent(section) {
    return (
      <View style={styles.content}>
        {section.content}
      </View>
    )
  }

  render() {
    return (
      <Accordion
        sections={this.props.sections}
        renderSectionTitle={this._renderSectionTitle}
        renderHeader={this._renderHeader}
        renderContent={this._renderContent}
        underlayColor={'#f46e42'}
      />
    );
  }

}



const styles = StyleSheet.create({
  header: {
    flex: 1
  },
  headerText: {
    flex: 1
  },
  content: {
    flex: 1
  }
})

export default AccordionView
