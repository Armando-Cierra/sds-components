import type { RefObject } from 'react';

export interface AudioPlayerProps
  extends React.DetailedHTMLProps<
    React.AudioHTMLAttributes<HTMLAudioElement>,
    HTMLAudioElement
  > {
  className?: string;
  src: string;
  onInteraction?: (e: AudioPlayerOnInteractionProps) => void;
  ref?: never;
}

export interface AudioPlayerOnInteractionProps {
  audioDuration: string;
  audioCurrentTime: string;
  track: RefObject<HTMLAudioElement>;
  isPlaying: boolean;
}

export type useAudioPlayerProps = Omit<AudioPlayerProps, 'src' | 'className'>;

export interface AudioStateProps {
  audioPlay: boolean;
  audioDuration: string;
  audioCurrentTime: string;
  inputCurrentPosition: number;
  inputMax: number;
}

export type AudioReducerActionProps =
  | { type: 'SET_AUDIO_PLAY'; payload: boolean }
  | { type: 'SET_AUDIO_DURATION'; payload: string }
  | { type: 'SET_AUDIO_CURRENT_TIME'; payload: string }
  | { type: 'SET_INPUT_CURRENT_POSITION'; payload: number }
  | { type: 'SET_INPUT_MAX'; payload: number };
