export interface Book {
    id?: number;
    isbnTen: number;
    isbnThirteen: number;
    title: string;
    subtitle: string;
    author: string[];
    published: string;
    publisher: string;
    categories: string[];
    rating: number;
    picture: string;
    pages: number;
    description: string;
    website: string;
}
