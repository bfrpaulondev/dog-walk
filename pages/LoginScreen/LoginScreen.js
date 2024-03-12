import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Modal } from 'react-native';
import LottieView from 'lottie-react-native';
import Toast from 'react-native-toast-message';
import { LoginScreenStyles } from './LoginScreenStyles';
import { MaterialIcons } from '@expo/vector-icons';

const colors = require("../../assets/colors")
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);

  const handleEmailChange = (text) => {
    // Converte apenas a primeira letra para minúscula
    const formattedEmail = text.charAt(0).toLowerCase() + text.slice(1);
    setEmail(formattedEmail);
  };

  const handlePasswordChange = (text) => {
    setPassword(text);
  };

  const handleLogin = () => {
    // Simulando uma validação simples de email e senha
    if (email === 'usuario@example.com' && password === 'senha123') {
      // Exibe uma mensagem de sucesso
      Toast.show({
        type: 'success',
        text1: 'Login Successful',
      });
    } else {
      // Exibe uma mensagem de erro
      Toast.show({
        type: 'error',
        text1: 'Invalid email or password',
      });
    }
  };

  const handleForgotPassword = () => {
    setShowForgotPasswordModal(true);
  };

  const handleResetPassword = () => {
    // Implementar lógica para redefinir a senha aqui
    console.log('Reset Password');
    setShowForgotPasswordModal(false);
  };

  return (
    <View style={LoginScreenStyles.container}>
      <Text style={{
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.colors.text100,
        textAlign: 'center',
        marginBottom: 20
      }}>
        Login Account
      </Text>
      <View>
        <LottieView
          style={styles.animation}
          source={require('./../../assets/Animation2.json')}
          autoPlay
          loop
        />
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
      }}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={handleEmailChange}
          value={email}
        />
      </View>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
      }}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={handlePasswordChange}
          value={password}
          secureTextEntry={!showPassword} // Oculta a senha se showPassword for false
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={{
          position:"absolute",
          right: 20,
        }}>
          <MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} size={24} color="black" />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text>Login</Text>
      </TouchableOpacity>

      {/* Botão para abrir o modal de recuperar a senha */}
      <TouchableOpacity style={styles.forgotPasswordButton} onPress={handleForgotPassword}>
        <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Modal para recuperar a senha */}
      <Modal
        visible={showForgotPasswordModal}
        animationType="slide"
        transparent={true}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text>Enter your email to reset password</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
            />
            <TouchableOpacity style={styles.button} onPress={handleResetPassword}>
              <Text>Reset Password</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowForgotPasswordModal(false)}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Toast Message */}
      <Toast style={styles.toast} ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
};

const styles = StyleSheet.create({
  animation: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
    backgroundColor: colors.colors.primary200,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  input: {
    flex: 1,
    height: 50,
    margin: 10,
    padding: 10,
    textAlign: 'center',
    borderWidth: 1,
    backgroundColor: colors.colors.primary300,
    borderColor: '#ccc',
    borderRadius: 100,
  },
  button: {
    backgroundColor: colors.colors.primary200,
    width: '40%',
    height: 50,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
  },
  forgotPasswordButton: {
    marginTop: 10,
    alignItems: 'center',
  },
  forgotPasswordText: {
    color: colors.colors.primary200,
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    backdropFilter: 'blur(1px)',
  },
  toast: {
    backgroundColor: '#333333',
    borderRadius: 20,
  },
});

export default LoginScreen;
