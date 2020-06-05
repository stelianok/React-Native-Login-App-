/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';

import styles from './styles';

import Header from '../../components/Header';

import Icon from 'react-native-vector-icons/Feather';

export default function Welcome({navigator}) {
  const windowWidth = useWindowDimensions().width;
  return (
    <View style={styles.container}>
      <Header
        title="Welcome"
        text="Please Login or sign up to continue using our app"
      />
      <View style={styles.bodyContainer}>
        <Image style={styles.image} source={require('../../../img/Logo.jpg')} />

        <Text style={[styles.bodyText, {color: '#383FDB', marginTop: -70}]}>
          Register With Facebook
        </Text>
        <TouchableOpacity
          style={[styles.facebookButton, {width: windowWidth - 55}]}>
          <Icon name={'facebook'} color={'white'} size={28} />
          <Text style={{color: '#FFF', fontSize: 25}}> Facebook </Text>
        </TouchableOpacity>
        <Text style={[styles.bodyText, {color: '#383FDB', marginTop: 30}]}>
          Or Register with email
        </Text>
        <TouchableOpacity
          style={[styles.signupButton, {width: windowWidth - 55}]}>
          <Text style={styles.signupButtonText}>SignUp</Text>
        </TouchableOpacity>

        <View style={styles.bottomContainer}>
          <Text style={[styles.headerText, {fontSize: 18}]}>
            You already have an account?
          </Text>
          <TouchableOpacity>
            <Text style={styles.registerButtonText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}