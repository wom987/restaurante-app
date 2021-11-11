import { StyleSheet } from "react-native";
const widthInputs = "100%";
const Styles = StyleSheet.create({
  image: {
    width: 110,
    height: 110,
    marginBottom: 8,
  },
  header: {
    fontSize: 21,
    color: "#560CCE",
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
    borderColor: "#560CCE",
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
    borderColor: "#7a42f4",
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
});
export default Styles;
