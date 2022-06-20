import React from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Pressable,
  Linking,
} from 'react-native';

const colorGitHub = '#010409';
const colorFontGitHub = '#C9D1D9';
const colorFontDarkGitHub = '#4F565E';
const imageProfileGitHub =
  'https://avatars.githubusercontent.com/u/103453296?v=4';
const urlGitHub = 'https://github.com/Victor23HD';
const handlePressGoToGitHub = async () => {
  const res = await Linking.canOpenURL(urlGitHub);
  if (res) {
    await Linking.openURL(urlGitHub);
  } else {
    console.log('Error');
  }
};

const App = () => {
  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
      <View style={style.content}>
        <Image style={style.avatar} source={{uri: imageProfileGitHub}} />
        <Text style={[style.defaultText, style.name]}> Victor Oliveira</Text>
        <Text style={style.username}> @Victor23HD</Text>
        <Text style={[style.defaultText, style.description]}>
          C# | SQL | Angular | NodeJs | ASP. NET
        </Text>
        <Pressable onPress={handlePressGoToGitHub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in GitHub
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGitHub,
    flex: 1,
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: '#daa520',
    borderWidth: 3,
  },
  defaultText: {
    color: colorFontGitHub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 26,
  },
  username: {
    fontSize: 20,
    color: colorFontDarkGitHub,
  },
  description: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colorFontDarkGitHub,
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
