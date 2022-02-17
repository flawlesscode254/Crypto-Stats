import React, {useState} from 'react'
import { View, Text, TouchableOpacity } from "react-native";

const Options = () => {
  const [currentTab, setCurrentTab] = useState("Hello")
  return (
    <View>
      <TabButton currentTab={currentTab} setCurrentTab={setCurrentTab} title={"Hello"} />
      <TabButton currentTab={currentTab} setCurrentTab={setCurrentTab} title={"Go"} />
      <TabButton currentTab={currentTab} setCurrentTab={setCurrentTab} title={"Nerf"} />
    </View>
  )
}

export default Options

const TabButton = ({ currentTab, setCurrentTab, title }) => {
  return (
    <TouchableOpacity
      onPress={async () => {
        setCurrentTab(title);
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          backgroundColor: currentTab == title ? "white" : "transparent",
          paddingLeft: 13,
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 15,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            color: currentTab == title ? "#5359D1" : "white",
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};