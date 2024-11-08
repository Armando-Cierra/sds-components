import React from 'react';
import { fireEvent } from '@testing-library/react';
import { getComponent } from '../../../../TestUtils';
import { AudioPlayer } from '../../../';
import type { AudioPlayerProps } from '../types';

type testProps = Omit<AudioPlayerProps, 'src'>;

const AudioPlayerTest = (props: testProps) => {
  const { ...rest } = props;

  return (
    <>
      <AudioPlayer {...rest} src="https://www.djxd.tk/404.mp3" />
    </>
  );
};

describe('AudioPlayer', () => {
  const AudioPlayerTestID = 'sds_audioPlayer';

  it('Should be rendering', () => {
    const { getByTestId } = getComponent(<AudioPlayerTest />);
    const audioPlayer = getByTestId(AudioPlayerTestID);
    expect(audioPlayer).toBeInTheDocument();
  });

  it('Should be paused when the audio play button has not been clicked', () => {
    const { getByTestId } = getComponent(<AudioPlayerTest />);
    const button = getByTestId('sds_telicon_icon_name');
    // this means audio is paused
    expect(button).toHaveAttribute('href', '#media-play--fill');
  });

  it('Should start playing when onClick', () => {
    const { getByTestId } = getComponent(<AudioPlayerTest />);
    const button = getByTestId('sds_telicon_icon_name');
    fireEvent.click(button);
    // this means audio is playing
    expect(button).toHaveAttribute('href', '#media-pause--fill');
  });

  it('Should change the values when slider changes', () => {
    const { getByTestId } = getComponent(<AudioPlayerTest />);
    const input = getByTestId('sds_slider_input');
    fireEvent.change(input, { target: { value: 5 } });
    const val = getByTestId('sds_audioPlayer_current');
    expect(val.textContent).toBe('00:05');
  });

  it('Should accept the native HTML audio tag props', () => {
    const { getByTestId } = getComponent(<AudioPlayerTest about="Any" />);
    const audio = getByTestId(AudioPlayerTestID);
    expect(audio).toHaveAttribute('about', 'Any');
  });
});
