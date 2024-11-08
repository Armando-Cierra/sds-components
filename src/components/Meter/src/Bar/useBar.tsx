/* eslint-disable @typescript-eslint/no-non-null-assertion */
import type { BarProps, MeterScales } from './types';

function calculateScaleClass(percentage: number, scales: MeterScales): string {
  const sortedScales = Object.values(scales).sort((a, b) => b - a);

  const hasInvalidValues = sortedScales.some((scaleValue) => scaleValue > 100);

  if (hasInvalidValues) {
    throw new Error(
      'This component works with percentages, so values above 100 would not work. You can normalize the value to percentage  by using: (value / maxValue) * 100'
    );
  }

  const sortedKeys = Object.keys(scales).sort(
    (a, b) => scales[b as keyof MeterScales]! - scales[a as keyof MeterScales]!
  );

  for (let i = 0; i < sortedScales.length; i++) {
    const currentScale = sortedKeys[i];
    const nextScale = sortedKeys[i + 1];

    if (nextScale && percentage >= scales[nextScale as keyof MeterScales]!) {
      return `sds_meter_bar--variant_${currentScale}`;
    } else if (
      !nextScale &&
      percentage <= scales[currentScale as keyof MeterScales]!
    ) {
      return `sds_meter_bar--variant_${currentScale}`;
    }
  }

  return 'sds_meter_bar--variant_unknown';
}

export const useBar = ({ variant, percentage, scales }: BarProps) => {
  if (percentage > 100) {
    throw new Error(
      'This component works with percentages, so values above 100 would not work. You can normalize the value to percentage  by using: (value / maxValue) * 100'
    );
  }

  const initialScales: MeterScales = {
    safe: 50,
    warning: 75,
    danger: 100,
  };

  let currentScaleClass = '';

  if (variant !== 'scaled' && scales !== undefined) {
    throw new Error(
      'It looks like you are attempting to use a scale without specifying the correct variant. To make this work, ensure that the variant is "scaled." Without this, the variant would not function properly.'
    );
  }

  if (variant === 'scaled') {
    currentScaleClass = calculateScaleClass(
      percentage,
      scales ?? initialScales
    );
  }

  return {
    currentScaleClass,
  };
};
