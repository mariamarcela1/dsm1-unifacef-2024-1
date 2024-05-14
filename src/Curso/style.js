import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F0F0F0",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#000",
    fontFamily: "Roboto", 
  },
  button: {
    marginTop: 10,
    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#90EE90",
    borderRadius: 5,
  },
  buttonText: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Roboto", 
  },
  text: {
    fontSize: 15,
    marginBottom: 10,
    marginTop: 10,
    fontFamily: "Roboto", 
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 7,
  },
});