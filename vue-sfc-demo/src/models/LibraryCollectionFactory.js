import LibraryCollection from "@/models/LibraryCollection";
import LibraryItemFactory from "@/models/LibraryItemFactory";

export default class LibraryCollectionFactory {
    static createFromiTunesResults(results) {
        console.log(results);
        let collection = new LibraryCollection();
        for(const item of results) {
            let newItem = LibraryItemFactory.createFromiTunesApi(item);
            if(newItem) collection.addItem(newItem);
        }
        return collection;
    }
}