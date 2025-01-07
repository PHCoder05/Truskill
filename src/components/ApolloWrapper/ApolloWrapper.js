"use client";

import { ApolloProvider } from '@apollo/client';
import client from '../../app/apolloClient';

const ApolloWrapper = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloWrapper;
