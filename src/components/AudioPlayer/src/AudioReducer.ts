import type { AudioReducerActionProps, AudioStateProps } from './types';

export const initialState = {
  audioPlay: false,
  audioDuration: '00:00',
  audioCurrentTime: '00:00',
  inputCurrentPosition: 0,
  inputMax: 100,
};

export function AudioReducer(
  state: AudioStateProps,
  action: AudioReducerActionProps
) {
  switch (action.type) {
    case 'SET_AUDIO_PLAY':
      return {
        ...state,
        audioPlay: action.payload,
      };
    case 'SET_AUDIO_DURATION':
      return {
        ...state,
        audioDuration: action.payload,
      };
    case 'SET_AUDIO_CURRENT_TIME':
      return {
        ...state,
        audioCurrentTime: action.payload,
      };
    case 'SET_INPUT_CURRENT_POSITION':
      return {
        ...state,
        inputCurrentPosition: action.payload,
      };
    case 'SET_INPUT_MAX':
      return {
        ...state,
        inputMax: action.payload,
      };
    default:
      return state;
  }
}
