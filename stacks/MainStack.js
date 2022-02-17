import React, { useRef } from "react";
import {
  DrawerLayoutAndroid,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import Options from "../components/Options";
import MarketCap from "../screens/MarketCapScreen"

const SearchScreen = () => {
  const drawer = useRef(null);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={"left"}
      renderNavigationView={MarketCap}
      drawerBackgroundColor={"#5359D1"}
    >
      <View style={{
        padding: 10,
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexDirection: "row"
      }}>
        <TouchableOpacity
          onPress={() => {
            drawer.current.openDrawer();
          }}
        >
          <Ionicons
            name="menu"
            size={28}
            style={{
              marginRight: 40
            }}
          />
        </TouchableOpacity>
        <Text>Crypto Stats</Text>
      </View>
    </DrawerLayoutAndroid>
  );
};

export default SearchScreen;
