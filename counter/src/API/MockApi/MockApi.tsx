interface aCollection {
    category: number,
    name: string,
    photos: string[]
}

interface aCategory {
    name: string
}

export type MockApiResCollections = aCollection[];
export type MockApiResCategories = aCategory[];