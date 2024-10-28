import { Image, SafeAreaView, ScrollView, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { router } from "expo-router";
import images from "../constants/image";


// Make sure you import or require the logo image correctly.
// const logoImage = require("../../assets/logo.png"); // Replace with the actual path to your logo image

export default function Index() {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full justify-center items-center min-h-[100vh] px-4">
          {/* Insert the logo image here */}
          {/* <View>
            <Text className="font-extrabold text-blue-900 text-3xl">
              SafeCube
            </Text>
          </View> */}
          <Image  source={images.logho} className="w-[190px] h-[190px]"/>
          <View className="flex flex-col gap-4 items-center justify-center relative top-24 px-10">
            <Text className="text-secondary text-3xl">Welcome!</Text>
            <Text className="text-secondary text-center text-md">
              Let's handle your languages, walk hands-free, your bag is safe and secured, time to go around.
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/sign-in")}
              className="bg-secondary rounded-full p-3 justify-center items-center"
            >
              <Text className="text-white">Get Started</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
