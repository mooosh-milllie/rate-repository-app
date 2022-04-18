import { Formik } from "formik";
import * as yup from 'yup';
import { View, StyleSheet } from "react-native";
import SignInForm from "./SignInForm";
import Text from "./Text";
import useSignIn from "../hooks/useSignIn";
import { useNavigate } from "react-router-native";


const styles = StyleSheet.create({
  signInHeader: {
    textAlign: 'left',
    fontWeight: '700',
    textTransform: 'uppercase',
    marginTop: 10
  }
})
const validationSchema = yup.object().shape({
  username: yup
  .string()
  .min(5, 'Username must be atleast 5 characters')
  .required('Username is required'),
  password: yup
  .string()
  .min(8, 'Password must be atleast characters')
  .required('Password is required'),
});
const initialValues = {
  username: '',
  password: '',
};
const SignIn = () => {
  const [checkUser] = useSignIn();
  const navigate = useNavigate();
  const onSubmit = async(values) => {
    // const storage = new AuthStorage('user-information');
    
    try {
      const {data} = await checkUser(values);
      if (data) {
        navigate('/');
      }
    } catch (error) {
      console.log(error)
    }
    
  }
  return (
    <View>
      <Text style={styles.signInHeader}> sign in here</Text>
      
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
        {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
      </Formik>
    </View>
  );
};

export default SignIn;