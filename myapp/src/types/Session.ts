import { Track } from "./Track";
import { Parameter } from "./Parameter";

export interface Session {
    id: string;
    author: string;
    tracks: Track[];
    parameters: string[];
}

