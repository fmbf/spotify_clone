export const TOGGLE_PLAY = "TOGGLE_PLAY";
export const TOGGLE_REPEAT = "TOGGLE_REPEAT";
export const TOGGLE_MUTE = "TOGGLE_MUTE";
export const NEXT_SONG = "NEXT_SONG";
export const PREV_SONG = "PREV_SONG";
export const QUEUE_SONGS = "QUEUE_SONGS";
export const QUEUE_SONGS_REPLACE = "QUEUE_SONGS_REPLACE";
export const QUEUE_HISTORY_REPLACE = "QUEUE_HISTORY_REPLACE";

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


export const queueSongsReplace = (songs) => ({
  type: QUEUE_SONGS_REPLACE,
  songs: songs
});

export const queueHistoryReplace = (songs) => ({
  type: QUEUE_HISTORY_REPLACE,
  songs: songs
});

export const queueSongs = () => ({
  type: QUEUE_SONGS
});
