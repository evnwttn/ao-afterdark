import { Track } from "./Track";

export interface Grid {
  parameters: string[];
  user_id: string;
  author: string;
  session_title: string;
  tracks: Track[];
  grid_id: string;
}
