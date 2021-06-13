import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NativeRouter, Route } from 'react-router-dom';

import ULogin from './calcuitem/Login.js';


function Apps() {
  return (
    <NativeRouter>
      <Route exact path="/" calcuitem={ULogin} />
      

      <StatusBar style="auto" />
    </NativeRouter>
  );
}

export default Apps;
