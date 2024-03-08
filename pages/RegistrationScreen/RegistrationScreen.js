import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, Easing, Alert } from 'react-native';
import * as yup from 'yup'; // Importando yup para validação
import { RegistrationScreenStyles } from './RegistrationScreenStyles';
import { Divider } from 'react-native-elements';

const RegistrationScreen = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('prefer_not_to_say');
  const [imageScale] = useState(new Animated.Value(1)); // Para animação de escala da imagem
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    // Quando o gênero é alterado, anima a escala da imagem
    Animated.timing(imageScale, {
      toValue: 1.2,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, [gender]); // Executa a animação sempre que o gênero é alterado

  const handleRegister = async () => {
    try {
      // Validação dos inputs
      const schema = yup.object().shape({
        fullName: yup.string().required('* Full name is required'),
        email: yup.string().matches(/^[a-z].*@.*\..*$/, '* Invalid email').required('* Email is required'),
        password: yup.string().min(8, '* Password must be at least 8 characters').required('* Password is required'),
      });
      await schema.validate({ fullName, email, password }, { abortEarly: false });

      // Implemente sua lógica de registro aqui
      console.log('Registering...');
      console.log('Full Name:', fullName);
      console.log('Email:', email);
      console.log('Password:', password);
      console.log('Gender:', gender);
    } catch (error) {
      // Atualiza os estados de erro com mensagens de erro individuais
      const newErrors = {};
      error.inner.forEach(err => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
      Alert.alert('Validation Error', error.message);
    }
  };

  // Função para renderizar a imagem com base no gênero selecionado
  const renderUserImage = () => {
    switch (gender) {
      case 'male':
        return require('../../assets/Male.png');
      case 'female':
        return require('../../assets/Female.png');
      case 'prefer_not_to_say':
        return require('../../assets/PreferNotToSay.png');
      default:
        return require('../../assets/PreferNotToSay.png');
    }
  };

  return (
    <View style={RegistrationScreenStyles.Container}>
      <View style={RegistrationScreenStyles.ContainerTitles}>
        <Text style={RegistrationScreenStyles.Title}>New Account</Text>
        <Text style={RegistrationScreenStyles.SubTitle}>
          Account creation
        </Text>
      </View>
      <View style={RegistrationScreenStyles.ViewImageUser}>
        <Animated.Image source={renderUserImage()} style={{ width: 50, height: 50, transform: [{ scale: imageScale }] }} />
      </View>
      {errors.fullName !== '' && <Text style={RegistrationScreenStyles.ErrorText}>{errors.fullName}</Text>}
      <TextInput
        style={RegistrationScreenStyles.Inputs}
        placeholder="Full Name"
        value={fullName}
        onChangeText={setFullName}
      />
      {errors.email !== '' && <Text style={RegistrationScreenStyles.ErrorText}>{errors.email}</Text>}
      <TextInput
        style={RegistrationScreenStyles.Inputs}
        placeholder="Mail Address"
        value={email}
        onChangeText={text => setEmail(text.toLowerCase())}
        keyboardType="email-address"
        autoCapitalize="none" // Desativa o auto capitalize
      />
      {errors.password !== '' && <Text style={RegistrationScreenStyles.ErrorText}>{errors.password}</Text>}
      <TextInput
        style={RegistrationScreenStyles.Inputs}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <View style={RegistrationScreenStyles.ViewGender}>
        <Text style={RegistrationScreenStyles.TextDefault}>Gender:</Text>
        <TouchableOpacity onPress={() => setGender('male')}>
          <View style={RegistrationScreenStyles.ViewChoiceGender}>
            <View style={RegistrationScreenStyles.ViewRadioChoiceDefault}>
              {gender === 'male' && <View style={RegistrationScreenStyles.RadioChoiceDefault} />}
            </View>
            <Text style={RegistrationScreenStyles.TextDefault}>Male</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender('female')}>
          <View style={RegistrationScreenStyles.ViewChoiceGender}>
            <View style={RegistrationScreenStyles.ViewRadioChoiceDefault}>
              {gender === 'female' && <View style={RegistrationScreenStyles.RadioChoiceDefault} />}
            </View>
            <Text style={RegistrationScreenStyles.TextDefault}>Female</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setGender('prefer_not_to_say')}>
          <View style={RegistrationScreenStyles.ViewChoiceGender}>
            <View style={RegistrationScreenStyles.ViewRadioChoiceDefault}>
              {gender === 'prefer_not_to_say' && <View style={RegistrationScreenStyles.RadioChoiceDefault} />}
            </View>
            <Text style={RegistrationScreenStyles.TextDefault}>Prefer not to say</Text>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleRegister} style={RegistrationScreenStyles.ButtonDefault} >
        <Text style={RegistrationScreenStyles.TextDefault}>Create my account</Text>
      </TouchableOpacity>
      <Text style={[RegistrationScreenStyles.TextDefault, { marginTop: 10 }]}>
        You have an account? <Text onPress={() => navigate.navigate('Login')}>Login</Text>
      </Text>
    </View>
  );
};
export default RegistrationScreen;
