function formatTitle() {
    return this.title.toUpperCase();
}

function Book(title, pages) {
    this.title = title ?? '';
    this.pages = pages ?? 0;
    this.formatTitle = formatTitle;
}
Book.type = "Book";

class Movie {
    static type = "Movie";
    constructor() {
        this.trackName = "";
        this.artistName = "";
    }
}

class Podcast {
    static type = "Podcast";
    constructor() {
        this.trackName = "";
        this.artistName = "";
    }
}

class TvShow {
    static type = "TvShow";
    constructor() {
        this.trackName = "";
        this.artistName = "";
    }
}

class Audiobook {
    static type = "Audiobook";
    constructor() {
        this.collectionName = "";
        this.artistName = "";
    }
}

class Song {
    static type = "Song";
    constructor() {
        this.trackName = "";
        this.artistName = "";
    }
}

export {Book, Movie, Podcast, TvShow, Audiobook, Song};
