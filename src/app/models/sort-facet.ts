import { DisplayItem } from "./display-item.interface";

export class SortFacet implements DisplayItem {
    displayName: string;
    selected: boolean;
    sortAscending: boolean;
}