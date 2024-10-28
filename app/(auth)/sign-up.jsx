import { View, Text, SafeAreaView, ScrollView, Image, TouchableOpacity } from "react-native";
import React from 'react';
import { Link, router } from "expo-router";
import images from "../../constants/image";
import FormField from "../../components/FormFiled";
export default function SignUp() {
  return (
    <SafeAreaView className="flex-1">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="relative">
        <View className="bg-primary h-full opacity-90">
          {/* Add marginTop to move heading down */}
          <View className="flex justify-center p-5 mt-20"> 
            <Text className="text-secondary text-xl font-bold">Welcome!</Text>
            <Text className="text-secondary text-2xl mt-2 mb-4">
              Create your account
            </Text>

            {/* Form fields */}
            <FormField title="Name" />
            <FormField title="Email" />
            <FormField title="Password" />
            <FormField title="Confirm Password" />

            {/* Sign-up button */}
            <TouchableOpacity
              onPress={() => router.push("/sign-up")}
              className="bg-secondary rounded-full px-3 py-4 justify-center items-center mt-4">
                <Text className="text-white font-bold text-xl">Sign Up</Text>
            </TouchableOpacity>

            {/* Already have an account? Login section */}
            <View className="flex justify-center pt-5 flex-row gap-2">
              <Text className="text-lg text-blue-700 font-spaceMono">
                Already have an account?
              </Text>
              <Link
                href="/sign-in"
                className="text-lg font-psemibold text-blue-900"
              >
                Login
              </Link>
            </View>
          </View>
        </View>

        {/* Bottom background image */}
        <Image
          source={images.image3}
          className="w-screen h-[340px] absolute bottom-0 -z-40"
        />
      </ScrollView>
    </SafeAreaView>
  );
}
