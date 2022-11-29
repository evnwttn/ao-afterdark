import { Track } from "./Track";

export interface Grid {
  parameters: string[];
  user: string;
  author: string;
  sessionTitle: string;
  tracks: Track[];
  id: string;
}
