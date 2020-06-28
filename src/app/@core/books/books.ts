interface Author {
    name: string;
}
export interface Book {
    id?: number;
    isbnTen: number;
    isbnThirteen: number;
    title: string;
    subtitle: string;
    author: Author[];
    published: string;
    publisher: string;
    categories: string[];
    rating: number;
    picture: string;
    pages: number;
    description: string;
    website: string;
}
