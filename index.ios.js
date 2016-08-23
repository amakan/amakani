import React, { Component } from "react";
import {
  AppRegistry,
  Image,
  StatusBar,
  TabBarIOS,
  Text,
  TextInput,
  TouchableHighlight,
  View,
  WebView,
} from "react-native";

class Header extends Component {
  constructor(...args) {
    super(...args);
    this.state = { text: "" };
  }

  onChangeText(text) {
    this.setState({ text });
  }

  onHomeButtonClicked() {
    this.setState({ text: "" });
    this.props.onHomeButtonClicked();
  }

  onSubmitEditing() {
    this.props.onSearchRequested(this.state.text);
  }

  render() {
    return(
      <View style={{
        backgroundColor: "#262F40",
        paddingBottom: 12,
        paddingLeft: 12,
        paddingRight: 12,
        paddingTop: 12 + 20,
      }}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <View style={{ alignItems: "center", flex: 1, flexDirection: "row" }}>
            <TouchableHighlight onPress={this.onHomeButtonClicked.bind(this)}>
              <Image source={require("./images/home-white-32x32.png")} onClick/>
            </TouchableHighlight>
            <TextInput
              autoCorrect={false}
              editable={true}
              onChangeText={this.onChangeText.bind(this)}
              onSubmitEditing={this.onSubmitEditing.bind(this)}
              placeholder="Search"
              style={{
                backgroundColor: "#FFF",
                borderRadius: 3,
                marginLeft: 12,
                paddingBottom: 4,
                paddingLeft: 8,
                paddingRight: 8,
                paddingTop: 4,
                flex: 1,
              }}
              value={this.state.text}
            />
          </View>
        </View>
      </View>
    );
  }
}

class amakani extends Component {
  static baseUrl = "http://localhost:3000";

  constructor(...args) {
    super(...args);
    this.state = {
      loading: false,
      selectedTab: "home",
      url: amakani.baseUrl,
    };
  }

  onHomeButtonClicked() {
    this.setState({
      url: amakani.baseUrl,
    });
  }

  onNavigationStateChange (navigationState) {
    this.setState({
      loading: navigationState.loading,
      url: navigationState.url,
    });
  }

  onSearchRequested(text) {
    this.setState({
      url: `${amakani.baseUrl}/search?query=${text}`,
    });
  }

  render() {
    return (
      <View style={{
        flex:1
      }}>
        <StatusBar
          barStyle="light-content"
          networkActivityIndicatorVisible={this.state.loading}
        />
        <Header
          onHomeButtonClicked={this.onHomeButtonClicked.bind(this)}
          onSearchRequested={this.onSearchRequested.bind(this)}
        />
        <WebView
          automaticallyAdjustContentInsets={false}
          onNavigationStateChange={this.onNavigationStateChange.bind(this)}
          source={{ uri: this.state.url }}
          startInLoadingState={true}
          style={{
            backgroundColor: "#262F40",
            flex: 1
          }}
        />
      </View>
    );
  }
}

AppRegistry.registerComponent("amakani", () => amakani);
