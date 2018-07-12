import { DisplayItem } from "./display-item.interface";

export class FilterFacet implements DisplayItem {
    displayName: string;
    propertyName: string;
    propertyValue: string | number;
    selected: boolean;
}