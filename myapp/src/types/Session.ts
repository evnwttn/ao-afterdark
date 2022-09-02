import { Track } from "./Track";

export interface Session {
    id: string;
    author: string;
    tracks: Track[];
}

