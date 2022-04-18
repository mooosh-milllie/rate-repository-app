import { Pressable, Text } from "react-native";


export function Button(props) {
  const { onPress, title, styles } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
}