import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text, View, Pressable, Button, Image } from 'react-native';
import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type RootStackParamList = {
  MainView: undefined;
  MyHobbies: undefined;
  HobbyDetail: { hobby: Hobby };
  MyFriends: undefined;
  FriendDetail: { friend: Friend };
};

type Hobby = {
  name: string;
  picture: string;
};

type Friend = {
  name: string;
  age: string;
  picture: string;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function MainView({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
  return (
    <View style={styles.container}>
      <Button
        title="My Hobbies"
        onPress={() => navigation.navigate('MyHobbies')}
      />
      <Button
        title="My Friends"
        onPress={() => navigation.navigate('MyFriends')}
      />
    </View>
  );
}

function MyHobbiesView({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
  const [hobbies, setHobbies] = useState<Hobby[]>([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/EthicalHacker23/Basic-Navigation/main/hobbies.json')
      .then((response) => response.json())
      .then((data) => setHobbies(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={hobbies}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('HobbyDetail', { hobby: item })}>
            <Text style={styles.item}>{item.name}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

function HobbyDetailView({ route }: { route: { params: { hobby: Hobby } } }) {
  const { hobby } = route.params;
  return (
    <View style={styles.container}>
      <Text>{hobby.name}</Text>
      <Image source={{ uri: hobby.picture }} style={styles.image} />
    </View>
  );
}

function MyFriendsView({ navigation }: { navigation: NavigationProp<RootStackParamList> }) {
  const [friends, setFriends] = useState<Friend[]>([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/EthicalHacker23/Basic-Navigation/main/friends.json')
      .then((response) => response.json())
      .then((data) => setFriends(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.navigate('FriendDetail', { friend: item })}>
            <Text style={styles.item}>{item.name}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
}

function FriendDetailView({ route }: { route: { params: { friend: Friend } } }) {
  const { friend } = route.params;
  return (
    <View style={styles.container}>
      <Text>{friend.name}</Text>
      <Text>Age: {friend.age}</Text>
      <Image source={{ uri: friend.picture }} style={styles.image} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainView" component={MainView} />
        <Stack.Screen name="MyHobbies" component={MyHobbiesView} />
        <Stack.Screen name="HobbyDetail" component={HobbyDetailView} />
        <Stack.Screen name="MyFriends" component={MyFriendsView} />
        <Stack.Screen name="FriendDetail" component={FriendDetailView} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 15,
    fontSize: 18,
  },
  image: {
    width: 400,
    height: 400,
    marginTop: 20,
    resizeMode: 'cover',
  },
});
