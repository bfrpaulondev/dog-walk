import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, Easing, Alert, CheckBox, Modal, ScrollView } from 'react-native';
import * as yup from 'yup'; // Importando yup para validação
import { RegistrationScreenStyles } from './RegistrationScreenStyles';
import { Divider } from 'react-native-elements';
import { Path, Svg } from 'react-native-svg';
import TermsAndConditionsModal from '../../components/TermsAndConditionsModal/TermsAndConditionsModal';
import { useNavigation } from '@react-navigation/native';

const RegistrationScreen = () => {
  const navigate = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('prefer_not_to_say');
  const [imageScale] = useState(new Animated.Value(1));
  const [isChecked, setIsChecked] = useState(false);
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar a visibilidade do modal

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const closeModal = () => {
    setModalVisible(false);
  }
  const openModal = () => {
    setModalVisible(true);
  }

  const handleCheck = () => {
    setIsChecked(!isChecked);
  }

  const handleRegister = async () => {
    try {
      if (!isChecked) {
        Alert.alert('Validation Error', 'You must accept the Terms and Conditions.');
        return;
      }

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
      <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", paddingTop: 10, paddingBottom: 10 }}>
        <TouchableOpacity onPress={handleCheck}>
          {isChecked ? <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-check" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /><Path d="M9 12l2 2l4 -4" /></Svg> : <Svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><Path stroke="none" d="M0 0h24v24H0z" fill="none" /><Path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" /></Svg>}
        </TouchableOpacity>
        <Text style={{ marginLeft: 10 }}>I agree to the Terms and Conditions</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', width: "100%", paddingTop: 10, paddingBottom: 10 }}>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={{ color: 'blue' }}>Read terms and conditions</Text>
        </TouchableOpacity>
        <TermsAndConditionsModal modalVisible={modalVisible} closeModal={closeModal} />
      </View>
      <TouchableOpacity onPress={handleRegister} style={RegistrationScreenStyles.ButtonDefault} >
        <Text style={RegistrationScreenStyles.TextDefault}>Create my account</Text>
      </TouchableOpacity>
      <Text style={[RegistrationScreenStyles.TextDefault, { marginTop: 10 , color: "blue" }]}>
        You have an account? <Text onPress={() => navigate.navigate('Login')}>Login</Text>
      </Text>
    </View>
  );
};

export default RegistrationScreen;
