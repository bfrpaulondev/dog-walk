import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Animated, Alert } from 'react-native';
import { RegistrationScreenStyles } from './RegistrationScreenStyles';
import { Path, Svg } from 'react-native-svg';
import { useSignUp } from "@clerk/clerk-expo"; // Import the useSignUp hook
import * as yup from 'yup'; // Importing yup for validation

const RegistrationScreen = () => {
  const { isLoaded, signUp } = useSignUp(); // Initialize the useSignUp hook
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('prefer_not_to_say');
  const [isChecked, setIsChecked] = useState(false);

  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const handleCheck = () => {
    setIsChecked(!isChecked);
  }

  const handleRegister = async () => {
    try {
      if (!isLoaded) {
        return;
      }

      if (!isChecked) {
        Alert.alert('Validation Error', 'You must accept the Terms and Conditions.');
        return;
      }

      // Validation of inputs
      const schema = yup.object().shape({
        fullName: yup.string().required('* Full name is required'),
        email: yup.string().matches(/^[a-z].*@.*\..*$/, '* Invalid email').required('* Email is required'),
        password: yup.string().min(8, '* Password must be at least 8 characters').required('* Password is required'),
      });
      await schema.validate({ fullName, email, password }, { abortEarly: false });

      // Sign up the user
      await signUp.create({
        firstName: fullName, // Assuming the full name is split into first name and last name in your Clerk configuration
        lastName: '', // Assuming no last name in your Clerk configuration
        emailAddress: email,
        password: password,
      });

      // Prepare email address verification
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });

      // Reset input fields after successful sign-up
      setFullName('');
      setEmail('');
      setPassword('');
      setGender('prefer_not_to_say');
    } catch (error) {
      // Update error states with individual error messages
      const newErrors = {};
      error.inner.forEach(err => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
      Alert.alert('Validation Error', error.message);
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
        autoCapitalize="none" // Disable auto capitalize
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
      <TouchableOpacity onPress={handleRegister} style={RegistrationScreenStyles.ButtonDefault} >
        <Text style={RegistrationScreenStyles.TextDefault}>Create my account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationScreen;
