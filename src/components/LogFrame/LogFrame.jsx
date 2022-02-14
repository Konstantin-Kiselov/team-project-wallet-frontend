import { ClassNames } from '@emotion/react';

const LogFrame = ({ src, alt, className }) => {
  const classes = ClassNames(className);

  return <img src={src} alt={alt} className={className} />;
};

export default LogFrame;
