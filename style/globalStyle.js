import { StyleSheet } from "react-native";

const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },
  sidebar: {
    width: "8%",
    height: "100%",
  },
  mainContainer: {
    width: "92%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#f8f9fa",
  },
  content: {
    height: "85%",
  },
  inputContent: {
    height: "15%",
  },
  fontBold: {
    fontWeight: "bold",
  },
  font20: {
    fontSize: 20,
  },
  font12: {
    fontSize: 12,
  },
  font14: {
    fontSize: 14,
  },
  font16: {
    fontSize: 16,
  },
  font18: {
    fontSize: 18,
  },
  font36: {
    fontSize: 36,
  },
  font24: {
    fontSize: 24,
  },
  font22: {
    fontSize: 22,
  },
  defaultFontFamily: {
    fontFamily: "Poppins_400Regular",
  },
  rowContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  defaultButton: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  radius20: {
    borderRadius: 20
  },  
  radius8: {
    borderRadius: 8
  },
  character: {
    backgroundColor: "white",
    borderRadius: 5,
    fontSize: 16,
    width: 25,
    height: 25,
    justifyContent: "center",
    textAlign: "center",
  },
});

export default GlobalStyles;
