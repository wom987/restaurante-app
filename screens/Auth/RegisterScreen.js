import React, { useState, useEffect } from "react";
import { Text, View, Image } from "react-native";
import Input from "./../components/Input";
import Styles from "./../Util";
import Button from "./../components/Button";
import { emailValidator } from "./../helpers/emailValidator";
import { nameValidator } from "./../helpers/nameValidator";
import { passwordValidator } from "./../helpers/passwordValidator";
import firebase from "./../../database/Db";
import Backbutton from "../components/Backbutton";

const RegisterScreen = ({ navigation }) => {
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
  const [nError, setNError] = useState("");
  const [eError, setEError] = useState("");
  const [pError, setPError] = useState("");
  const [cError, setCError] = useState("");
  const [vError, setVError] = useState("");
  const handleChangeText = (value, name) => {
    setState({ ...state, [name]: value });
  };

  const register = () => {
    const nameError = nameValidator(state.name);
    const emailError = emailValidator(state.email);
    const passwordError = passwordValidator(state.password);
    const confirmPasswordError = passwordValidator(state.confirmPassword);
    if (nameError || emailError || passwordError || confirmPasswordError) {
      setNError(nameError);
      setEError(emailError);
      setPError(passwordError);
      setCError(confirmPasswordError);
    } else {
      if (state.password == state.confirmPassword) {
        users.forEach((user) => {
          if (user.email == state.email) {
            setVError("Correo registrado/Iniciar Sesion!");
          } else {
            try {
              firebase.db.collection("users").add({
                name: state.name,
                email: state.email,
                password: state.password,
              });
              handleChangeText("", "name");
              handleChangeText("", "email");
              handleChangeText("", "password");
              handleChangeText("", "confirmPassword");
              navigation.navigate("LoginSCreen");
            } catch (error) {
              console.log(error);
            }
          }
        });
      } else {
        setVError("No coinciden las contraseñas!");
      }
    }
  };
  //load users data
  useEffect(() => {
    firebase.db.collection("users").onSnapshot((querySnapshot) => {
      const users = [];
      querySnapshot.docs.forEach((doc) => {
        const { name, email, password } = doc.data();
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
          title={"Nombre completo:"}
          onTextChange={(value) => handleChangeText(value, "name")}
          value={state.name}
          error={nError}
        />
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
        <Input
          title={"Repetir contraseña:"}
          onTextChange={(value) => handleChangeText(value, "confirmPassword")}
          value={state.confirmPassword}
          password={true}
          error={cError}
        />

        <Text style={[Styles.error, { color: "red" }]}>{vError}</Text>
        {/* Register now button */}
        <Button
          mode="contained"
          onPress={() => {
            register();
          }}
          text="REGISTRARSE"
        />
      </View>
    </View>
  );
};

export default RegisterScreen;
