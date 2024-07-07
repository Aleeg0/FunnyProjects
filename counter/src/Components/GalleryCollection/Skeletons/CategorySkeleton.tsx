import React from 'react';
import ContentLoader from "react-content-loader";

const CategorySkeleton = () => {
    return (
        <ContentLoader
            speed={2}
            height={30}
            width={60}
            viewBox="0 0 60 30"
            backgroundColor="#ededed"
            foregroundColor="#c4c4c4"
        >
            <rect x="0" y="0" rx={6} ry={6} width="60"  height="30" />
        </ContentLoader>
    );
};

export default CategorySkeleton;