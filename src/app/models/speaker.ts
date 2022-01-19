import { Info } from "./info";

export interface Dob {
    date: string;
    age: number;
}

export interface Id {
    name: string;
    value: number;
}

export interface Coordinate {
    latitude: string;
    longitude: string;
}

export interface Street {
    number: number;
    name: string;
}

export interface Timezone {
    offset: string;
    description: string;
}

export interface Location {
    city: string;
    coordinates: Coordinate;
    country: string;
    postcode: string;
    state: string;
    street: Street;
    timezone: Timezone;
}

export interface Name {
    title: string;
    first: string;
    last: string;
}

export interface Login {
    md5: string;
    password: string;
    salt: string;
    sha1: string;
    sha256: string;
    username: string;
    uuid: string;
}

export interface Picture {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface Registered {
    date: string;
    age: number;
}

export interface Speaker {
    cell: string;
    dob: Dob;
    email: string;
    gender: string;
    id: Id;
    location: Location;
    login: Login;
    name: Name;
    nat: string;
    phone: string;
    picture: Picture;
    registered: Registered;
    mergedName?: string;
}

export interface SpeakerData {
    info: Info;
    results: Speaker[];
}