import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { FontAwesome } from "@expo/vector-icons";
import { color } from "react-native-reanimated";

const Stack = createStackNavigator();

const SignInScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="E-mail"
        placeholderTextColor={"white"}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        placeholderTextColor={"white"}
        secureTextEntry
      />
      <View style={styles.buttonRow}>
        <TouchableOpacity>
          <Text>Forget Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text>New User?</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <View style={styles.separator}>
        <Text style={styles.buttonText}>Or</Text>
      </View>
      <View style={styles.otherMethods}>
        <TouchableOpacity>
          <FontAwesome
            style={styles.icon}
            name="facebook"
            size={30}
            color="#3B5998"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome
            style={styles.icon}
            name="twitter"
            size={30}
            color="#55ACEE"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome
            style={styles.icon}
            name="google"
            size={30}
            color="#dd4b39"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const SignUpScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="E-mail"
        placeholderTextColor={"white"}
      />
      <TextInput
        style={styles.input}
        onChangeText={setPassword}
        value={password}
        placeholder="Password"
        placeholderTextColor={"white"}
        secureTextEntry
      />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("SignIn")}
      >
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
        <Text>Already have an account? Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SignIn"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    color: "white",
    backgroundColor: "pink",
    height: 60,
    width: "90%",
    borderRadius: 50,
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: "pink",
    padding: 10,
    marginBottom: 10,
    borderRadius: 50,
    paddingHorizontal: 30,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 20,
  },
  buttonText: {
    color: "white",
  },
  separator: {
    marginHorizontal: 30,
    padding: 5,
    borderRadius: 60,
    marginVertical: 20,
    backgroundColor: "pink",
    color: "white",
  },
  otherMethods: {
    marginHorizontal: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  icon: {
    paddingHorizontal: 50,
  },
});

export default App;
