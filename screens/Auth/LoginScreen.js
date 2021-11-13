import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import Input from "./../components/Input";
import Styles from "./../Util";
import Button from "./../components/Button";
import { emailValidator } from "./../helpers/emailValidator";
import { passwordValidator } from "./../helpers/passwordValidator";
import firebase from "./../../database/Db";
import Backbutton from "../components/Backbutton";
//react redux imports
import {useDispatch, useSelector} from 'react-redux';

const LoginScreen = ({ navigation }) => {
  //ref to store from redux
  const userId = useSelector(state=>state);
  //dispatch ref
  const dispatch = useDispatch();

  const initalState = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  //users data
  const [users, setUsers] = useState([]);
  //login states
  const [state, setState] = useState(initalState);
  //error states
  const [eError, setEError] = useState("");
  const [pError, setPError] = useState("");
  const [vError, setVError] = useState("");
  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const login = () => {
    const emailError = emailValidator(state.email);
    const passwordError = passwordValidator(state.password);
    if (emailError || passwordError) {
      setEError(emailError);
      setPError(passwordError);
    } else {
      for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.email == state.email && user.password == state.password) {
          handleChangeText("", "email");
          handleChangeText("", "password");
          navigation.navigate("Home");
          //updated the state with the user id
          dispatch({
            type: "USER/SETID",
            payload: {
              userId: user.id,
            },
          });
          return;
        } else {
          setVError("Error en correo y/o contraseña");
        }
      }
    }
  };
  //load users data
  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { email, name, password } = doc.data();
        users.push({
          id: doc.id,
          name,
          email,
          password,
        });
      });
      setUsers(users);
    });
  }, []);
  return (
    //local view
    <View style={Styles.content}>
      <Backbutton goBack={navigation.goBack} />
      <View style={{ alignItems: "center", flex: 1, justifyContent: "center" }}>
        {/*image view*/}
        <Image
          source={require("../../assets/logo.png")}
          style={[Styles.image, { marginBotton: 35 }]}
        />
        {/*//header */}
        <Text style={Styles.header}>Restaurante Sin nombre</Text>
        {/*//inputs and setiing the new this.state.*/}
        <Input
          title={"Email:"}
          onTextChange={(value) => handleChangeText(value, "email")}
          value={state.email}
          error={eError}
        />
        <Input
          title={"Contraseña:"}
          onTextChange={(value) => handleChangeText(value, "password")}
          value={state.password}
          password={true}
          error={pError}
        />
        <Text style={[Styles.error, { color: "red" }]}>{vError}</Text>
        {/* Register now button */}
        <Button
          mode="contained"
          onPress={() => {
            login();
          }}
          text="INICIAR SESSION"
        />
      </View>
    </View>
  );
};

export default LoginScreen;
