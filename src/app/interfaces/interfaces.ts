export interface RespuestaTopHeadLines {
    status: string;
    totalResults: number;
    articles: Article[];
}
export interface Article {
    source: Source;
    author?: string;
    title: String;
    descripcion: String;
    url: string;
    urlToImage: string;
    publishedAT: String;
    content?: string;
}
export interface Source {
    id?: String;
    name: String;
}