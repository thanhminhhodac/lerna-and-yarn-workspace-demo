// libs
import * as React from 'react';

interface Props {
  onClick: () => void;
  // eslint-disable-next-line react/require-default-props
  children?: React.ReactNode;
}

const Button: React.FC<Props> = ({ children, ...rest }) => (
  <button {...rest} type='button'>
    {children}
  </button>
);

export default Button;
