import { StyleSheet } from "react-native";
const widthInputs = "100%";
const primaryColor = "#560CCE";
const borderSize = 100;
const Styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
  header: {
    fontSize: 21,
    color: primaryColor,
    fontWeight: "bold",
    paddingVertical: 12,
  },
  content: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  paragraph: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: "center",
    marginBottom: 12,
  },
  buttonStyle: {
    width: widthInputs,
    marginVertical: 10,
    paddingVertical: 10,
    borderColor: primaryColor,
    borderWidth: 1,
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
    lineHeight: 30,
  },
  textInput: {
    height: 40,
    borderColor: primaryColor,
    borderWidth: 1,
    borderRadius: 5,
    width: widthInputs,
    marginBottom: 12,
    paddingLeft: 10,
  },
  label: {
    fontSize: 15,
    lineHeight: 21,
    marginBottom: 5,
  },
  error: {
    fontSize: 15,
  },
  //Menu items styles
  menuView: {
    alignItems: "center",
    justifyContent: "center",
  },
  touch: {
    width: borderSize,
    height: borderSize,
    borderRadius: borderSize / 2,
    alignItems: "center",
    justifyContent: "center",
  },
  imageMenuItem: {
    width: borderSize * 0.8,
    height: borderSize * 0.8,
    borderRadius: (borderSize * 0.8) / 2,
  },menuItemText:{
    color: "#000",
    fontWeight: "bold ",
    fontSize: 22,
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
  }
});
export default Styles;
