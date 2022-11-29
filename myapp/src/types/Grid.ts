import { Track } from "./Track";

export interface Grid {
  sessionTitle: string;
  author: string;
  tracks: Track[];
  parameters: string[];
  grid_id: string;
  user_id: string;
}
