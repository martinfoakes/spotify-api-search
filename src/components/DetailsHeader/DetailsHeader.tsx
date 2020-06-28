// tslint:disable: jsx-no-lambda
import React from 'react';
import { useHistory } from 'react-router-dom';
import { PageHeader } from 'antd';

export const DetailsHeader = () => {
  const history = useHistory();
  return (
    <PageHeader
      style={{ marginBottom: '2rem' }}
      onBack={() => history.goBack()}
      title="Back"
    />
  );
};
