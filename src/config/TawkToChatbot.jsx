import React, { useEffect } from 'react';

const TawkToChatbot = ({ children }) => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {};
    var Tawk_LoadStart = new Date();
    (function () {
      var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/61bb612ec82c976b71c1c758/1fn1v77sb';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s0.parentNode.insertBefore(s1, s0);
    })();
  }, []);

  return (
    <div>
        {children}
    </div>
  );
};

export default TawkToChatbot;
