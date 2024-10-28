import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import React from 'react'
import { Link, router } from "expo-router";
import images from "../../constants/image";
import FormField from "../../components/FormFiled";

export default function SingnIn() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="relative">
        <View className="bg-primary h-full opacity-90">
          <Image
            source={images.image2}
            className="w-[260px] h-[260px] absolute top-0 right-0 z-50"
          />
          <Image
            source={images.image1}
            className="w-[180px] h-[280px] -rotate-90 top-16 -right-64 z-50"
          />
          <View className="flex justify-center  p-5 ">
            <Text className="text-secondary text-2xl font-bold">Hello!</Text>
            <Text className="text-secondary text-3xl">
              Let's Handle your Laguages
            </Text>

            <FormField title="Email" />
            <FormField title="Password" />
            <TouchableOpacity
              onPress={() => router.push("/sign-in")}
              className="bg-secondary rounded-full px-3 py-4 justify-center items-center mt-5"
            >
              <Text className="text-white font-bold text-xl">Login</Text>
            </TouchableOpacity>
            <View className="flex justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-blue-700 font-spaceMono">
                Don't have an account?
              </Text>
              <Link
                href="/sign-up"
                className="text-lg font-psemibold text-blue-900"
              >
                Signup
              </Link>
            </View>
          </View>
        </View>
        <Image
          source={images.image3}
          className="w-screen h-[340px] absolute  bottom-0 -z-40"
        />
      </ScrollView>
    </SafeAreaView>
  );
}