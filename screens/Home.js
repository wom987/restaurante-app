import React from "react";
import MenuHeader from "./MenuHeader";
import Options from "./Options";
import { View } from "react-native";

function Home() {
  const data = {
    banner: "Fly",
    mainWord: "ya vamos llegando!",
  };

  return (
    <View>
      <MenuHeader url={require("./../assets/main.png")} datas={data} />
      <Options />
    </View>
  );
}

export default Home;
