// introScreenStyles.js

import { StyleSheet } from 'react-native';
const colors = require("../../assets/colors")

export const introScreenStyles = StyleSheet.create({

  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(207,210,235, 1)'
  },
  ViewTitle: {
    position: "absolute",
    bottom: 150,
    width: "90%"
  },
  Title: {
    top: 150,
    position: "absolute",
    fontSize: 40,
    fontWeight: "800",
    textAlign: "center",
    color: colors.colors.text100,
    fontStyle: 'italic',
  },
  SubTitle: {
    top: 10,
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    color: colors.colors.text100
  },
  Button: {
    backgroundColor: colors.colors.bg100,
    width: "90%",
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    display: 'flex',
    position: "absolute",
    bottom: 50,
    shadowColor: colors.colors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5, // android
  },
  ButtonTitle: {
    flex: 1,
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    color: colors.colors.text100,
  },
  Image: {
    width: "100%",
    height: "100%",
    objectFit: "contain"
  },
});

