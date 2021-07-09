import { StyleSheet } from 'react-native';

const GlobalStyles = StyleSheet.create({
    container: {
      flex: 1,
      display: "flex",
      flexDirection: "row",
    },
    sidebar: {
      width: "30%",
      height: "100%",
    },
    mainContainer: {
      width: "70%",
      height: "100%",
      display: "flex",
      flexDirection: "column",
    },
    content: {
      height: "85%",
    },
    inputContent: {
      height: "15%",
    },
});

export default GlobalStyles