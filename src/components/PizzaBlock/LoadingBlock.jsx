import React from 'react';
import ContentLoader from 'react-content-loader';

function LoadingBlock() {
    return (
          <ContentLoader
            speed={2}
            width={280}
            height={460}
            viewBox="0 0 280 460"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
          >
            <circle cx="134" cy="129" r="122" />
            <rect x="0" y="280" rx="4" ry="4" width="272" height="25" />
            <rect x="0" y="323" rx="10" ry="10" width="272" height="84" />
            <rect x="0" y="421" rx="10" ry="10" width="89" height="26" />
            <rect x="120" y="419" rx="10" ry="10" width="152" height="42" />
          </ContentLoader>
        );
}

export default LoadingBlock;