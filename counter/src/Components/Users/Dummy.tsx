import React from 'react';
import ContentLoader from "react-content-loader";


const Dummy = () => {
    return (<ContentLoader
        speed={2}
        width={320}
        height={50}
        viewBox="0 0 320 50"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb">
        <circle cx="25" cy="25" r="24"/>
        <rect x="64" y="4" rx="6" ry="6" width="137" height="18"/>
        <rect x="64" y="32" rx="6" ry="6" width="183" height="12"/>
        <rect x="280" y="10" rx="8" ry="8" width="26" height="26"/>
    </ContentLoader>)
};

export default Dummy;