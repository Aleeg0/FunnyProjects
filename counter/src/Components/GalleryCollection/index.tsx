import React, {useEffect, useState} from 'react';
import Collection from "./Collection";
import {MockApiResCategories, MockApiResCollections} from "../../API/MockApi/MockApi";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const GalleryCollection = () => {
    const [collections, setCollections] = useState<MockApiResCollections|null>(null);
    const [categories, setCategories] = useState<MockApiResCategories|null>(null);
    const [currentCategory, setCurrentCategory] = useState<number>(0);

    useEffect(() => {
        fetch("https://66881a730bc7155dc01a7986.mockapi.io/categories")
        .then(response => response.json())
        .then(data => {
            console.log(`categories: ${data}`);
            setCategories(data);
        })
        .catch(error=>console.log(error));

        const categoryID:string = (currentCategory !== 0 ? `?category=${currentCategory}` : ``);

        fetch(`https://66881a730bc7155dc01a7986.mockapi.io/collections${categoryID}`)
        .then(res => res.json())
        .then(data => {
            console.log(`collections: ${data}`);
            setCollections(data)
        })
        .catch(error => console.log(error));
    }, [currentCategory]);


    return (
        <div className="Gallery">
            <header className="Gallery__header">
                <h1>My photos collection</h1>
            </header>
            <nav className="Gallery__navBar">
                <ul>
                    {categories ?
                        categories.map((category,index) =>
                            <li
                                key={index}
                                className={index === currentCategory ? "active" : ""}
                                onClick={() => setCurrentCategory(index)}
                            >{category.name}</li>
                        )
                        :
                        <>
                        </>
                    }
                </ul>
                <input type="text" placeholder="Enter category"/>
            </nav>
            <div className="Gallery__collections">
                {collections ?
                    collections.map((obj,index) =>
                      <Collection
                          key={index}
                          title={obj.name}
                          images={obj.photos}
                      />
                    )
                    :
                    <h2>Please wait...</h2>
                }
            </div>
            <div className="Gallery__pagination">
                <ul>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                </ul>
            </div>
        </div>
    );
};

export default GalleryCollection;