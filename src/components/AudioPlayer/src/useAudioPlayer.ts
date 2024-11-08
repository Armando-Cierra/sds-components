/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useReducer, useEffect, useRef } from 'react';
import { AudioReducer, initialState } from './AudioReducer';
import type { useAudioPlayerProps } from './types';

export const useAudioPlayer = (props: useAudioPlayerProps) => {
  const { onInteraction } = props;
  const track = useRef<HTMLAudioElement>(null);

  const [state, dispatch] = useReducer(AudioReducer, initialState);
  const {
    audioPlay,
    audioDuration,
    audioCurrentTime,
    inputCurrentPosition,
    inputMax,
  } = state;

  const setAudioPlay = (value: boolean) =>
    dispatch({ type: 'SET_AUDIO_PLAY', payload: value });
  const setAudioDuration = (value: string) =>
    dispatch({ type: 'SET_AUDIO_DURATION', payload: value });
  const setAudioCurrentTime = (value: string) =>
    dispatch({ type: 'SET_AUDIO_CURRENT_TIME', payload: value });
  const setInputCurrentPosition = (value: number) =>
    dispatch({ type: 'SET_INPUT_CURRENT_POSITION', payload: value });
  const setInputMax = (value: number) =>
    dispatch({ type: 'SET_INPUT_MAX', payload: value });

  const timeFormat = (time: number) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, '0');
    const seconds = String(Math.floor(time % 60)).padStart(2, '0');

    return `${minutes}:${seconds}`;
  };

  useEffect(() => {
    const audioElement = track.current;

    const handleLoadMetadata = () => {
      setInputMax(Math.floor(audioElement!.duration));
      setAudioDuration(`${timeFormat(audioElement!.duration)}`);
    };

    const handleTimeUpdate = () => {
      setInputCurrentPosition(Math.floor(audioElement!.currentTime));
      setAudioCurrentTime(
        `${timeFormat(Math.floor(audioElement!.currentTime))}`
      );
    };

    audioElement?.addEventListener('loadedmetadata', handleLoadMetadata);

    audioElement?.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audioElement?.removeEventListener('loadedmetadata', handleLoadMetadata);
      audioElement?.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const handleAudioEnd = () => {
    track.current?.pause();
    track.current!.currentTime = 0;
    setInputCurrentPosition(0);
    setAudioCurrentTime(audioCurrentTime);
    setAudioPlay(false);
  };

  useEffect(() => {
    if (audioCurrentTime === audioDuration) {
      handleAudioEnd();
    }
  }, [audioCurrentTime, audioDuration]);

  const switchAudioState = () => {
    const prevState = audioPlay;
    const audio = track.current;

    if (!prevState) {
      audio?.play();
      setAudioPlay(true);
    } else {
      audio?.pause();
      setAudioPlay(false);
    }

    if (onInteraction) {
      onInteraction({
        audioDuration,
        audioCurrentTime,
        track,
        isPlaying: audioPlay,
      });
    }
  };

  const changePosition = (e: { value: number }) => {
    const { value } = e;
    if (!value) return;

    track.current!.currentTime = value!;
    setAudioCurrentTime(`${timeFormat(value!)}`);

    if (onInteraction) {
      onInteraction({
        audioDuration,
        audioCurrentTime,
        track,
        isPlaying: audioPlay,
      });
    }
  };

  return {
    audioCurrentTime,
    inputCurrentPosition,
    inputMax,
    changePosition,
    audioDuration,
    isPlaying: audioPlay,
    switchAudioState,
    track,
  };
};
