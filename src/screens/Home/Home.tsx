import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';

interface HomeProps extends RouteComponentProps {}

function Home(props: HomeProps) {
  return <BaseLayout>This is Home</BaseLayout>;
}

export default Home;
