'use client';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
import React from 'react';

export default function ClientReduxProvider({ children }) {
  return <Provider store={appStore}>{children}</Provider>;
}
