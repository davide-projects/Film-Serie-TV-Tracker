export interface Genre {
    id: number;
    name: string;
    emoji?: string;
}

export interface Title {
    id: number;
    title: string;
    type: 'movie' | 'series';
    genre: string;
    year: number;
    duration: number;
    rate: number;
    description?: string;
}

export interface ListItem {
    id: number;
    title: string;
    state: 'watched' | 'to-watch' | 'favorite';
    releaseDate?: string;
}