// importaciones
import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, SafeAreaView, StyleSheet, View, ImageBackground, Image, Alert, Linking } from 'react-native';
import { Card } from 'react-native-paper';


const YourApp = ({ navigation }) => {
  // Declaración de estados usando useState para el nombre, contraseña, mensaje de inicio.
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');

  // Función para manejar el inicio de sesión
  const handleLogin = () => {
    // Verificacion de usuario y contraseña 
    if (username === 'Raquel_meraz' && password === '123456') {
      setLoginMessage('¡Inicio de sesión exitoso!');
      // Navegacion a la pantalla principal
      navigation.navigate('Home');
    } else {
      setLoginMessage('Usuario o contraseña incorrectos');
    }
  };

  // Función para manejar el clic en el botón de Facebook
  const handleFacebookPress = () => {
    // enlace a facebook
    Linking.openURL('https://www.google.com/search?q=facebook');
  };

  // Función para manejar el clic en el botón de Instagram
  const handleInstagramPress = () => {
    // enlace a instagram
    Linking.openURL('https://www.google.com/search?q=instagram');
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/17/9b/fa/179bfaef8e1c7a622ab2fb1428c76e76.jpg' }}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        {/* Contenedor del logo */}
        <View style={styles.logoContainer}>
          <Image
            source={{ uri: 'https://www.zarla.com/images/zarla-fulgor-1x1-2400x2400-20210826-gf9fhf9qq387w7rff96b.png?crop=1:1,smart&width=250&dpr=2' }}
            style={{ width: 100, height: 100, marginBottom: 20 }}
          />
        </View>

        {/* Contenedor del campo de usuarioo */}
        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://as1.ftcdn.net/v2/jpg/06/19/26/46/1000_F_619264680_x2PBdGLF54sFe7kTBtAvZnPyXgvaRw0Y.jpg' }} style={styles.icon} />
          <TextInput
            placeholder="ingrese su usuario"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
          />
        </View>

        {/* Contenedor del campo de contraseña */}
        <View style={styles.inputContainer}>
          <Image source={{ uri: 'https://as1.ftcdn.net/v2/jpg/05/65/43/76/1000_F_565437623_6vP34sYqtLRcmN0ZqD4d8ABfCCjP4ITm.jpg' }} style={styles.icon} />
          <TextInput
            placeholder="Contraseña"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true}
            style={styles.input}
          />
        </View>

        {/* Botón de inicio de sesión */}
        <TouchableOpacity
          style={[styles.button, {backgroundColor: 'lightblue'}]}
          onPress={handleLogin} >
          <Text style={{ color: 'black', textAlign: 'center' }}>Iniciar sesión</Text>
        </TouchableOpacity>

        {/* Mensaje de inicio de sesión */}
        <Text style={styles.loginMessage}>{loginMessage}</Text>

        {/* Contenedor de registro y botones sociales */}
        <View style={styles.signupContainer}>
          <View style={styles.signupTextContainer}>
            <Text style={{ color: 'grey', marginBottom: 2 }}> ¿No tienes cuenta? </Text>
            <TouchableOpacity onPress={() => console.log('Ir a la página de registro')}>
              <Text style={{ color: 'blue', textDecorationLine: 'underline' }}>Regístrate aquí</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.logosContainer}>
            {/* Botón de Facebook */}
            <TouchableOpacity onPress={handleFacebookPress}>
              <Image source={{ uri: 'https://i.pinimg.com/564x/4d/9e/8d/4d9e8d6874e225fb61234afafccce8d6.jpg' }} style={styles.logo} />
            </TouchableOpacity>
            {/* Botón de Instagram */}
            <TouchableOpacity onPress={handleInstagramPress}>
              <Image source={{ uri: 'https://i.pinimg.com/564x/02/7a/12/027a12cc4565cbcbdf65026fe0d04cd2.jpg' }} style={styles.logo} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

// Estilos
const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%', 
    height: '100%', 
  },
  container: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 20,
    borderRadius: 20,
    width: 280,
    height: 'auto',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: 200,
    backgroundColor: 'white',
  },
  button: {
    backgroundColor: 'white',
    height: 40,
    width: 150,
    padding: 10,
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 15,
    borderWidth: 1,
  },
  signupContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  signupTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  logosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  logo: {
    width: 50,
    height: 50,
    margin: 5,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: 5,
  },
  loginMessage: {
    color: 'red',
    marginBottom: 10,
  },
});

export default YourApp;
