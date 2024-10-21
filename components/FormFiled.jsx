import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import icons from "../constants/icons";

const FormField = ({
  title,
  value,
  placeholder,
  handleChangeText,
  otherStyles,
  multText,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-xl text-blue-900 font-spaceMono">{title}</Text>

      <View className="w-full h-auto px-4 bg-black-100 rounded-xl border-2 border-blue-900 focus:border-blue-500 flex flex-row items-center">
        <TextInput
          className={`flex-1 text-blue-900 font-spaceMono text-base ${
            multText ? "min-h-[100px] pt-2" : "h-12"
          }`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7B7B8B"
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          multiline={multText} // Enable multiline input
          textAlignVertical={multText ? "top" : "center"} // Align text to the top if multText is true
          {...props}
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
