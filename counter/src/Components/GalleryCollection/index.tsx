import React, {useEffect, useState} from 'react';
import Collection from "./Collection";
import {MockApiResCategories, MockApiResCollections} from "../../API/MockApi/MockApi";

const GalleryCollection = () => {
    // API data states
    const [collections, setCollections] = useState<MockApiResCollections|null>(null);
    const [categories, setCategories] = useState<MockApiResCategories|null>(null);
    // basic states for search
    const [currentCategory, setCurrentCategory] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchValue, setSearchValue] = useState<string>("");

    //TODO добавить логику isLoading и ничего не найденно
    //TODO добавить скелетоны для категорий и коллекций

    /*
        !!!
            I NOW THAT IT'S BAD TO USE STATIC PAGINATION LIMIT
            BUT IT BACKEND'S CARE
        !!!
    */
    const LIMIT_PAGES: number = 4;

    useEffect(() => {
        fetch("https://66881a730bc7155dc01a7986.mockapi.io/categories")
        .then(response => response.json())
        .then(data => {
            console.log(`categories: ${data}`);
            setCategories(data);
        })
        .catch(error=>console.log(error));

        const categoryID:string = (currentCategory !== 0 ? `?category=${currentCategory}` : ``);
        const collectionURL = new URL(`https://66881a730bc7155dc01a7986.mockapi.io/collections${categoryID}`);

        collectionURL.searchParams.append("page", currentPage.toString());
        collectionURL.searchParams.append("limit", LIMIT_PAGES.toString());

        fetch(collectionURL)
        .then(res => res.json())
        .then(data => {
            console.log(`collections: ${data}`);
            setCollections(data)
        })
        .catch(error => console.log(error));
    }, [currentCategory,currentPage]);


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
                <input
                    type="text"
                    placeholder="Enter category"
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
            </nav>
            <div className="Gallery__collections">
                {collections && categories ?
                    collections.filter((obj => {
                        const searchValueLow = searchValue.trim().toLowerCase();
                        // if choose ALL categories
                        if (currentCategory === 0) {
                            return (obj.name.toLowerCase().includes(searchValueLow) ||
                                categories[obj.category].name.includes(searchValueLow));
                        }
                        // if choose currentCategory which not equal ALL
                        return obj.category === currentCategory && (obj.name.toLowerCase().includes(searchValueLow) ||
                            categories[obj.category].name.includes(searchValueLow));
                    }))
                    .map((obj,index) =>
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
                    {[...Array<number>(Math.floor(28/LIMIT_PAGES))].map((_, i) => (
                        <li
                            key={i}
                            className={currentPage === i+1 ? "active" : ""}
                            onClick={() => setCurrentPage(i+1)}
                        >{i+1}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default GalleryCollection;