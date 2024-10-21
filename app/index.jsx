import { Image, SafeAreaView, ScrollView, Text, View, ActivityIndicator, Button, TouchableOpacity } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Redirect, router } from "expo-router";


export default function Index() {
  return (
    <SafeAreaView className="bg-green-300 h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[100vh] px-4">
          {/* <Image /> */}
          <View>
            <Text className="font-extrabold text-blue-900 text-3xl">
              SafeCube
            </Text>
          </View>
          <View className="flex flex-col gap-4 items-center justify-center relative top-24 px-10">
            <Text className="text-blue-900 text-3xl">Welcome!</Text>
            <Text className="text-blue-900 text-center text-md">
              Let's handle your language, walk hand free, your bag is safe and
              secured, time to go around
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/sign-in")}
              className="bg-blue-900 rounded-full p-3 justify-center items-center"
            >
              <Text className="text-white">Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
