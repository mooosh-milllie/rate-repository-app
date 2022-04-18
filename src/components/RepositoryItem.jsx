import { View, Image, Text, StyleSheet, Pressable} from "react-native";
import { Button } from "./Button";


const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    backgroundColor: 'white',
    paddingTop: 10,
    paddingBottom: 10
  },
  item: {
    marginTop: 20
  },
  title: {
    fontSize: 15,
  },
  titleInfo: {
    fontSize: 15,
    fontWeight: '700'
  },
  stretch: {
    width: 60,
    height: 60,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 4
  },
  itemHeader: {
    display: "flex",
    flexDirection: 'row',
    marginBottom: 14
  },
  itemHeaderDetails: {
    display: "flex",
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexGrow: 0
  },
  achievementsCont: {
    display: "flex",
    flexDirection: "row"
  },
  achievements: {
    display: "flex",
    flexDirection: "column",
    alignItems: 'center',
    flex: 1,
  },
  fullName: {
    fontSize: 20,
    fontWeight: '700'
  },
  desc: {
    fontSize: 15,
    width: 230,
    marginTop: 10,
    marginBottom: 10
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
    width: 'auto'
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  }
});
const RepositoryItem = ({ title}) => (
  <View style={styles.container}>
    <View style={styles.itemHeader}>
      <Image
        style={styles.stretch}
        source={{ uri: title.ownerAvatarUrl }}
      />
      <View style={styles.itemHeaderDetails}>
        <Text style={styles.fullName}>{title.fullName}</Text>
        <Text style={styles.desc}>{title.description}</Text>
        <Button title={title.language} Pressable={Pressable} Text={Text} styles={styles}  />
      </View>
    </View>

    <View style={styles.achievementsCont}>
      <View style={styles.achievements}>
        <Text style={styles.titleInfo}>{title.stargazersCount}</Text>
        <Text style={styles.title}>Stars</Text>
      </View>
      <View style={styles.achievements}>
        <Text style={styles.titleInfo}>{title.forksCount}</Text>
        <Text style={styles.title}>Forks</Text>
      </View>
      <View style={styles.achievements}>
        <Text style={styles.titleInfo}>{title.reviewCount}</Text>
        <Text style={styles.title}>Reviews</Text>
      </View>
      <View style={styles.achievements}>
        <Text style={styles.titleInfo}>{title.ratingAverage}</Text>
        <Text style={styles.title}>Rating</Text>
      </View>
    </View>
  </View>
  
);

export default RepositoryItem;