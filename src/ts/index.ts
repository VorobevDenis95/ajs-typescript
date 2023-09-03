import Buyable from "./buyable";

export default class Movie implements Buyable {
    readonly title: string;
    readonly releaseYear: number;
    readonly country: string;
    readonly tagline: string;
    readonly genre: string;
    readonly time: number;

    constructor(title: string, releaseYear: number, country: string,
        tagline: string, genre: string, time: number) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.country = country;
        this.tagline = tagline;
        this.genre = genre;
        this.time = time;
    }
}
