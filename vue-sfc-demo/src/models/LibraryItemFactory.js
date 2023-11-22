import {Audiobook, Movie, Podcast, Song, TvShow} from "@/models/Media";

export default class LibraryItemFactory {
    static createFromiTunesApi(obj){
        switch (obj.kind) {
            case "song":
                return Object.assign(new Song(), obj);
            case "tv-episode":
                return Object.assign(new TvShow(), obj);
            case "feature-movie":
                return Object.assign(new Movie(), obj);
            case "podcast":
                return Object.assign(new Podcast(), obj);
        }
        switch (obj.wrapperType) {
            case "audiobook":
                return Object.assign(new Audiobook(), obj);
            default:
                return false;
        }
    }
}

