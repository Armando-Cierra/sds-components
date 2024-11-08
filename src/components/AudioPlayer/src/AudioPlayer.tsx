import React from 'react';
import classNames from 'classnames';
import { Button } from '../../Button';
import { Slider } from '../../Slider';
import { useAudioPlayer } from './useAudioPlayer';
import type { AudioPlayerProps } from './types';
import './audio-player.scss';

/**
  **Documentation:*
  [Gitbook](https://2600hz.gitbook.io/sds/v/sds-3.0/sds-components/components/audioplayer)

  **Demo:*
  [Codesandbox](https://codesandbox.io/p/sandbox/audioplayer-rjtkvl?file=/src/App.tsx:1,1)
*/

export const AudioPlayer = React.forwardRef<HTMLDivElement, AudioPlayerProps>(
  ({ className: customClassName, src, onInteraction, ...rest }, ref) => {
    const {
      track,
      switchAudioState,
      isPlaying,
      audioCurrentTime,
      inputCurrentPosition,
      inputMax,
      changePosition,
      audioDuration,
    } = useAudioPlayer({ onInteraction });
    return (
      <div
        className={classNames('sds_audioPlayer', {
          [customClassName as string]: customClassName,
        })}
        ref={ref}
      >
        <audio
          data-testid="sds_audioPlayer"
          preload="metadata"
          ref={track}
          src={src}
          {...rest}
        />
        <div className="sds_audioPlayer_box">
          <Button
            variant="ghost"
            iconOnly={isPlaying ? 'media-pause--fill' : 'media-play--fill'}
            onClick={switchAudioState}
          ></Button>
          <Slider>
            <Slider.Control
              tooltipBehavior="hide"
              value={inputCurrentPosition}
              max={inputMax}
              onChange={changePosition}
            />
          </Slider>
          <div className="sds_audioPlayer_time">
            <span data-testid="sds_audioPlayer_current">
              {audioCurrentTime}
            </span>
            <span> / </span>
            <span>{audioDuration}</span>
          </div>
        </div>
      </div>
    );
  }
);
