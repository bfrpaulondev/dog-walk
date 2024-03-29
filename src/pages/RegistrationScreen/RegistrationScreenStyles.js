// RegistrationScreenStyles.js

import { StyleSheet } from 'react-native';
const colors = require("../../assets/colors")

export const RegistrationScreenStyles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: colors.colors.bg100,
  },
  ContainerTitles: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  Title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.colors.text100,
    textAlign: 'center',
    marginBottom: 20
  },
  SubTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text100,
    textAlign: 'center',
    marginBottom: 20,
  },
  ViewImageUser: {
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    backgroundColor: colors.colors.primary200,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  Inputs: {
    width: '100%',
    height: 50,
    margin: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: colors.colors.primary300,
    borderRadius: 100,
    textAlign: 'center',
  },
  ViewGender: {
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
  },
  ViewChoiceGender: {
    flexDirection: 'row', alignItems: 'center', gap: 10
  },
  TextDefault: {
    color: colors.colors.text100,
    fontSize: 14,
    textAlign: 'center',
  },
  ViewRadioChoiceDefault:
  {
    width: 20, height: 20, borderRadius: 10, borderWidth: 1, justifyContent: 'center',
    borderColor: colors.colors.primary100, alignItems: 'center'
  },
  RadioChoiceDefault: {
    width: 10, height: 10, borderRadius: 5, backgroundColor: '#8aaeff'
  },
  ContainerSocialLogin: {
    marginTop: 20,
    flexDirection: "row",
    gap: 30,
  },
  ButtonDefault: {

    backgroundColor: colors.colors.primary200,
    width: "100%",
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    display: 'flex',
    shadowColor: colors.colors.shadow,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 5, // android
  },
  ErrorText: {
    color: "red",
    alignSelf: 'flex-start',
    fontSize: 14,
    textAlign: 'left',
    marginTop: 10,
  }
});


