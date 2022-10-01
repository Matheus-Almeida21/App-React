import React from 'react';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className="appImageWrapper">
      {skeleton && <div className="appSkeleton"></div>}
      <img
        onLoad={handleLoad}
        className="appImageSkeleton"
        src=""
        alt={alt}
        {...props}
      />
    </div>
  );
};

export default Image;
