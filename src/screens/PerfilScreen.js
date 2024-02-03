import React from 'react';
import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';

const ProfileScreen = ({ navigation }) => {
  // Datos del perfil
  const profileData = {
    name: "Raquel Meraz",
    bio: "Apasionada por la moda y las tendencias. En constante búsqueda de prendas de tendencia.",
    location: "Durango, Dgo",
    image: "https://i.pinimg.com/564x/d9/7b/bb/d97bbb08017ac2309307f0822e63d082.jpg",
    backgroundImage: "https://i.pinimg.com/564x/17/9b/fa/179bfaef8e1c7a622ab2fb1428c76e76.jpg"
  };

  const handleCloseSession = () => {
    // Lógica para cerrar sesión
    // Redirigir a la pantalla de inicio de sesión
    navigation.navigate('Login');
  };

  return (
    <ImageBackground source={{ uri: profileData.backgroundImage }} style={styles.backgroundImage}>
      <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {/* Nombre del perfil */}
          <Text style={[styles.profileName, { color: 'black', fontSize: 28 }]}>{profileData.name}</Text>

          {/* Imagen del perfil */}
          <Image source={{ uri: profileData.image }} style={styles.profileImage} />

          {/* Bio del perfil */}
          <Text style={[styles.text, { color: 'black', fontSize: 18 }]}>{profileData.bio}</Text>
          {/* Ubicación del perfil */}
          <Text style={[styles.text, { color: 'black', fontSize: 18 }]}>Ubicación: {profileData.location}</Text>
        </ScrollView>

        {/* Botón de cerrar sesión */}
        <TouchableOpacity onPress={handleCloseSession} style={styles.closeButton}>
          <Text style={[styles.closeButtonText, { color: 'black' }]}>Cerrar Sesión</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  contentContainer: {
    alignItems: 'center',
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    alignItems: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: 550,
    right: 15,
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 40,
  },
  closeButtonText: {
    fontWeight: 'bold',
  },
});

export default ProfileScreen;
