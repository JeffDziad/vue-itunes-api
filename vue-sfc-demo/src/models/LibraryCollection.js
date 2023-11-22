import LibraryItem from "@/models/LibraryItem";

export default function LibraryCollection() {
    let arr = [];
    arr.addItem = function(item) {
        this.push(new LibraryItem(item));

        //! for chaining
        return this;
    }

    arr.removeItem = function(item) {
        this.splice(this.indexOf(item), 1);
    }

    arr.findByStatus = function(status) {

    }

    return arr;
}