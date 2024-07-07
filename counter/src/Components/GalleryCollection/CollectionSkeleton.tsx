import React from 'react';
import ContentLoader from "react-content-loader";

const CollectionSkeleton = () => {
    return (
        <div className="collection">
            <ContentLoader
                speed={2}
                max-width={370}
                max-height={427}
                viewBox="0 0 370 427"
                backgroundColor="#ededed"
                foregroundColor="#c4c4c4"
            >
                <rect x={0} y={0} rx={16} ry={16} width="100%" height="17rem"/>
                <rect x={0} y="290" rx={10} ry={10} width="31%" height="5rem"/>
                <rect x="34%" y="290" rx={10} ry={10} width="31%" height="5rem"/>
                <rect x="68%" y="290" rx={10} ry={10} width="31%" height="5rem"/>
                <rect x="0" y="390" rx={6} ry={6} width="40%" height="2rem"/>
            </ContentLoader>
        </div>
    );
};

export default CollectionSkeleton;