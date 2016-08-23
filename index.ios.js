import React, { Component } from "react";
import {
  AppRegistry,
  TabBarIOS,
  Text,
  View,
} from "react-native";

class Home extends Component {
  render() {
    return(
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          ホーム
        </Text>
      </View>
    );
  }
}

class MyPage extends Component {
  render() {
    return(
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          マイページ
        </Text>
      </View>
    );
  }
}

class Settings extends Component {
  render() {
    return(
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
          設定
        </Text>
      </View>
    );
  }
}

class amakani extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      selectedTab: "home",
    };
  }

  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          title="ホーム"
          icon={require("./images/home.png")}
          selected={this.state.selectedTab === "home"}
          onPress={() => {
            this.setState({ selectedTab: "home" });
          }}
        >
          <Home/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="マイページ"
          icon={require("./images/user.png")}
          selected={this.state.selectedTab === "my-page"}
          onPress={() => {
            this.setState({ selectedTab: "my-page" });
          }}
        >
          <MyPage/>
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title="設定"
          icon={require("./images/cog.png")}
          selected={this.state.selectedTab === "settings"}
          onPress={() => {
            this.setState({ selectedTab: "settings" });
          }}
        >
          <Settings/>
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent("amakani", () => amakani);
