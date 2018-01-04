export class Movie {
    public id: string;
    public added: Date = new Date();
    public clickCount = 0;

    constructor(
        public title: string,
        public description: string,
        public year: number,
        public director: string,
        public genre: string,
        public runtime: number,
        public language: string,
        public subtitles: string,
    ) {
    }
}
