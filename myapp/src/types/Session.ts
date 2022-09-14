import { Track } from "./Track";

export interface Session {
    id: string;
    sessionTitle: string;
    author: string;
    tracks: Track[];
    parameters: string[];
}

