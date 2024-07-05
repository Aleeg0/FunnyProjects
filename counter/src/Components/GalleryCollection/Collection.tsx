import React, {FC} from 'react';

interface CollectionProps {
    title: string;
    images: string[];
}

const Collection: FC<CollectionProps> = ({title,images}) => {
    return (
        <div className="collection">
            <img
                key={0}
                src={images[0]}
                className="collection__big"
                alt="bigImg"/>
            <div className="collection__bottom">
                {images.filter((_,i) => i !== 0).map((image, i) => (
                    <img
                        key={i}
                        className="collection__small"
                        src={image}
                        alt={"smallImg"}
                    />
                ))}
            </div>
            <h3>{title}</h3>
        </div>
    );
};

export default Collection;