import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Calculator } from '../components';

const Content = styled.div`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
`;

const Calc = ({ input }) => (
  <Content>
    <Calculator />
  </Content>
);

export default Calc;

Calc.propTypes = {
  input: PropTypes.object.isRequired,
};
