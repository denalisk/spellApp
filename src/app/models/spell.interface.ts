import { UserData } from "./userData";

export interface Spell {
    id: number
    name: string;
    description: string;
    higherLevel: string;
    page: string;
    range: string;
    components: string;
    material: string;
    ritual: string;
    duration: string;
    concentration: string;
    archetype?: string[];
    castingTime: string;
    level: number;
    school: string;
    class: string[];
}

export interface UserSpell extends Spell {
    userData: UserData;
}

export interface PreSpell {
    id: number
    name: string;
    description: string;
    higherLevel: string;
    page: string;
    range: string;
    components: string;
    material: string;
    ritual: string;
    duration: string;
    concentration: string;
    archetype?: string;
    castingTime: string;
    level: string;
    school: string;
    class: string;
}