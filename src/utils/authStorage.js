import AsyncStorage from '@react-native-async-storage/async-storage';
export default class SetUser {
  constructor(userInfo = 'user-information') {
    this.userInfo = userInfo;
  }

  async storeInfo(credential) {
    const storedUser = await AsyncStorage.getItem(`${this.userInfo}:data`);
    if (storedUser) {
      await AsyncStorage.removeItem(`${this.userInfo}:data`)
      await AsyncStorage.setItem(`${this.userInfo}:data`, JSON.stringify( credential));
      return 'OLD done';
    }
    await AsyncStorage.setItem(`${this.userInfo}:data`, JSON.stringify( credential));
    return 'NEW done';
  }

  async getInfo() {
    const storedData = await AsyncStorage.getItem(`${this.userInfo}:data`);
    return storedData ? JSON.parse(storedData) : [];
  }

  async removeInfo() {
    await AsyncStorage.removeItem(`${this.userInfo}:data`);
  }
}