import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import BaseLayout from '../../layouts/BaseLayout';

interface AboutProps extends RouteComponentProps {}

function About(props: AboutProps) {
  return <BaseLayout>This is About</BaseLayout>;
}

export default About;
