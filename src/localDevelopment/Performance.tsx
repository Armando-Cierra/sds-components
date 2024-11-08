import React, { Profiler, ProfilerOnRenderCallback, ReactNode } from 'react';

export const Performance = ({
  children,
  id,
  averageBasedOn = 10,
}: {
  children: ReactNode;
  id: string;
  averageBasedOn?: number;
}) => {
  const handleProfilerCallback: ProfilerOnRenderCallback = (
    id,
    phase,
    actualTime
  ) => {
    if (phase === 'mount' || phase === 'update') {
      const recentTimes: number[] = JSON.parse(
        sessionStorage.getItem('mostRecentTimes') || '[]'
      );
      recentTimes.push(actualTime);

      const lastTenTimes = recentTimes.slice(-averageBasedOn);
      const worstTime = Math.max(...lastTenTimes).toFixed(4);
      const bestTime = Math.min(...lastTenTimes);
      const mostRecentTime = recentTimes[recentTimes.length - 1].toFixed(2);
      const averageTime = (
        lastTenTimes.reduce((sum: number, time: number) => sum + time, 0) /
        lastTenTimes.length
      ).toFixed(2);

      const profilingData = {
        Component: id,
        WorstTime: `${worstTime}ms`,
        BestTime: `${bestTime}ms`,
        MostRecentTime: `${mostRecentTime}ms`,
        AverageTime: `${averageTime}ms`,
      };

      console.info(
        `Only showing average from the latest ${averageBasedOn} values`
      );
      console.table(profilingData);

      if (Number(averageTime) > 100) {
        console.warn(
          `The average rendering time for component "${id}" is high.`
        );
        console.warn(
          'Consider optimizing the component to improve performance.'
        );
      }

      sessionStorage.setItem(
        'mostRecentTimes',
        JSON.stringify(recentTimes.slice(-averageBasedOn))
      );
    }
  };

  return (
    <React.StrictMode>
      <Profiler id={id} onRender={handleProfilerCallback}>
        {children}
      </Profiler>
    </React.StrictMode>
  );
};
