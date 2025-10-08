import React, { createContext, useContext, useReducer, useEffect } from 'react';

// --------------------
// Types
// --------------------
export interface Song {
  title: string;
  artist: string;
  length: string; // mm:ss
  cover: string;
  src: string;
}

interface State {
  songs: Song[];
  currentIndex: number;
  isLoading: boolean;
  isPlaying: boolean;
  volume: number;
  playbackRate: number;
  shuffle: boolean;
  highlightColor: string;
  error: string | null;
}

type Action =
  | { type: 'SET_SONGS'; payload: Song[] }
  | { type: 'SET_CURRENT_INDEX'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_PLAYING'; payload: boolean }
  | { type: 'SET_VOLUME'; payload: number }
  | { type: 'SET_PLAYBACK_RATE'; payload: number }
  | { type: 'TOGGLE_SHUFFLE' }
  | { type: 'SET_HIGHLIGHT_COLOR'; payload: string }
  | { type: 'SET_ERROR'; payload: string }
  | { type: 'CLEAR_ERROR' };

// --------------------
// Initial State
// --------------------
const initialState: State = {
  songs: [],
  currentIndex: 0,
  isLoading: true,
  isPlaying: false,
  volume: 50,
  playbackRate: 1,
  shuffle: false,
  highlightColor: 'var(--color-emerald)',
  error: null,
};

// --------------------
// Reducer
// --------------------
function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'SET_SONGS':
      return { ...state, songs: action.payload };
    case 'SET_CURRENT_INDEX':
      return { ...state, currentIndex: action.payload };
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    case 'SET_PLAYING':
      return { ...state, isPlaying: action.payload };
    case 'SET_VOLUME':
      return { ...state, volume: action.payload };
    case 'SET_PLAYBACK_RATE':
      return { ...state, playbackRate: action.payload };
    case 'TOGGLE_SHUFFLE':
      return { ...state, shuffle: !state.shuffle };
    case 'SET_HIGHLIGHT_COLOR':
      return { ...state, highlightColor: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'CLEAR_ERROR':
      return { ...state, error: null };
    default:
      return state;
  }
}

// --------------------
// Context
// --------------------
const MusicPlayerContext = createContext<{
  state: State;
  dispatch: React.Dispatch<Action>;
} | null>(null);

// --------------------
// Provider
// --------------------
export const MusicPlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Optional: mimic highlight color update like in component
  useEffect(() => {
    const updateHighlight = () => {
      const isDark = document.body.classList.contains('dark');
      dispatch({ type: 'SET_HIGHLIGHT_COLOR', payload: isDark ? '#9b59b6' : 'var(--color-emerald)' });
    };
    updateHighlight();
    const observer = new MutationObserver(() => updateHighlight());
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
    return () => observer.disconnect();
  }, []);

  return (
    <MusicPlayerContext.Provider value={{ state, dispatch }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

// --------------------
// Custom Hook
// --------------------
export const useMusicPlayer = () => {
  const context = useContext(MusicPlayerContext);
  if (!context) throw new Error('useMusicPlayer must be used within MusicPlayerProvider');
  return context;
};