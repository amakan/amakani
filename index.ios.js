/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

class Product extends Component {
  render() {
    return(
      <View style={styles.container}>
        <ProductImage />
        <ProductTitle />
      </View>
    );
  }
}

class ProductImage extends Component {
  render() {
    return(
      <Image
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg" }}
        style={{ width: 214, height: 300 }}
      />
    );
  }
}

class ProductTitle extends Component {
  render() {
    return(
      <Text style={styles.welcome}>
        さまざまなバナナ
      </Text>
    );
  }
}

class amakani extends Component {
  render() {
    return (
      <Product/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});

AppRegistry.registerComponent("amakani", () => amakani);
