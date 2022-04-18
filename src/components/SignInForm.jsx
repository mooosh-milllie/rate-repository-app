import { View, StyleSheet } from "react-native";
import { Button } from "./Button";

import FormikTextInput from "./FormikTextInput";

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    elevation: 3,
    backgroundColor: "black",
    width: 'auto',
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 3
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})

const SignInForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput name={'username'} />
      <FormikTextInput name={'password'} />
      <Button title='sign in' onPress={onSubmit} styles={styles}/>
    </View>
  );
};

export default SignInForm;