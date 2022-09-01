export interface Session {
    id: string;
    author: string;
    tracks: Track[];
}

export interface Track {
    title: string;
}