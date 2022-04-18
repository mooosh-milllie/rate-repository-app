import { View, TextInput, StyleSheet } from 'react-native';
import { useField } from 'formik';

import Text from './Text';



const FormikTextInput = ({ name }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;
  const styles = StyleSheet.create({
    textInput: {
      height: 40,
      borderColor: showError? '#d73a4a' :  'gray',
      borderStyle: 'solid',
      borderWidth: 1,
      marginBottom: 15,
      marginLeft: 10,
      marginRight: 10,
      paddingLeft: 5
    },
    errorText: {
      color: '#d73a4a',
      fontSize: 12,
      textAlign: 'center',
      marginBottom: 5
    }
  })
  return (
    <View>
      <TextInput
        onBlur={() => helpers.setTouched(true)}
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        error={showError}
        placeholder={field.name}
        style={styles.textInput}
      />
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </View>
  );
};

export default FormikTextInput;