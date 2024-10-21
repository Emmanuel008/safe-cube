import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";


export default function TabLayout (){
    return (
      <Tabs>
        <Tabs.Screen
          name="search"
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color }) => (
              <Ionicons name="search" size={24} color="" />
            ),
          }}
        />
        <Tabs.Screen
            name="nearby"
            options={{
              tabBarLabel: "Nearby",
              tabBarIcon: ({ color }) => (
                <Ionicons name="map" size={24} color="" />
              ),
            }}
        />
        <Tabs.Screen
            name="menu"
            options={{
                tabBarLabel: "Menu",
                tabBarIcon: ({ color }) => (
                    <Ionicons name="menu" size={24} color="" />
                ),
            }}
        />
      </Tabs>
    );
}