import { SelectItem } from "./select-item.interface";

export class FilterFacet implements SelectItem {
    displayName: string;
    propertyName: string;
    propertyValue: string | number;
    selected: boolean;
}