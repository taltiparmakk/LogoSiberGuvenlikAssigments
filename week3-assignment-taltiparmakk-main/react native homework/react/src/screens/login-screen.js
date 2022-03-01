import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { auth } from "../../firebase-config";

export default class LoginScreen extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // console.log("Constructor çalıştı");
    this.state = {
      userName: "",
      password: "",
    };
  }

  styles = StyleSheet.create({
    txtInput: {
      borderWidth: 1.5,
      backgroundColor: "white",
      borderColor: "#535353",
      height: "80",
      padding: 5,
      margin: 10,
    },
    buttonContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-around",
    },
    imageArea: {
      paddingTop: "50%",
    },
  });

  loginHandler = () => {
    console.log(this.props);
    // const { navigate } = this.props.navigation;
    // console.log(navigate);
    // auth
    //   .signInWithEmailAndPassword(this.state.userName, this.state.password)
    //   .then((uc) => {
    //     if (uc.user) {
    //       this.props.navigation.navigate("MainScreen");
    //     } else {
    //       console.log("Kullanıcı bulunamadı");
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  registerHandler = () => {
    auth
      .createUserWithEmailAndPassword(this.state.userName, this.state.password)
      .then((uc) => {
        if (uc.user) {
         // Geçiş yap
         this.props.navigation.navigate("MainScreen");
        } else {
          console.log("kullanıcı yaratılamadı");
        }
      })
      .catch((error) => {
        console.log(error);
      });


      auth.signOut().then(()=>{}).catch(error=>{})
  };

  render() {
    return (
      <View>
        <View style={this.styles.imageArea}></View>
        <TextInput
          style={this.styles.txtInput}
          value={this.state.userName}
          onChangeText={(text) => {
            this.setState({
              userName: text,
            });
          }}
        ></TextInput>
        <TextInput
          style={this.styles.txtInput}
          value={this.state.password}
          onChangeText={(text) => {
            this.setState({
              password: text,
            });
          }}
        ></TextInput>
        <View style={this.styles.buttonContainer}>
          <TouchableOpacity onPress={this.loginHandler}>
            <Text>Giriş</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.registerHandler}>
            <Text>Kayit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
