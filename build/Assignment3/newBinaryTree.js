"use strict";
class Parcel {
    constructor(data) {
        this.data = data;
    }
}
class ParcelTree {
    addParcel(data) {
        const newParcel = new Parcel(data);
        if (!this.root) {
            this.root = newParcel;
        }
        else
            this.placeParcel(this.root, newParcel);
    }
    placeParcel(startPointParcel, parcelToPlace) { }
}
