export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const TOGGLE_REPEAT = "TOGGLE_REPEAT";
export const TOGGLE_MUTE = "TOGGLE_MUTE";
export const NEXT_SONG = "NEXT_SONG";
export const PREV_SONG = "PREV_SONG";

export const togglePlay = () => ({
  type: TOGGLE_PLAY
});

export const toggleRepeat = () => ({
  type: TOGGLE_REPEAT
});

export const toggleMute = () => ({
  type: TOGGLE_MUTE
});

export const nextSong = () => ({
  type: NEXT_SONG
});

export const prevSong = () => ({
  type: PREV_SONG
});
