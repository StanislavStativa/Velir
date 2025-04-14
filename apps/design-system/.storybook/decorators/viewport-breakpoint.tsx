import React, { useRef, useEffect, useState } from 'react';
import {
  useContainerQuery,
  containerBreakpoints,
  type ContainerBreakpoint,
} from '../../../demo/src/hooks/use-container-query';
import { Badge } from '../../../demo/src/components/ui/badge';
import { useChannel } from '@storybook/preview-api';
import { STORY_RENDERED } from '@storybook/core-events';
// Component to display in the toolbar
export default {};
export const ViewportBreakpointIndicator = () => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>('');
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  // Use Storybook's channel API
  useChannel({
    [STORY_RENDERED]: () => {
      updateBreakpoint();
    },
  });

  useEffect(() => {
    // Find the Storybook iframe - in Storybook 7 it's in a different location
    const iframe =
      (document.querySelector('#storybook-preview-iframe') as HTMLIFrameElement) ||
      (document.querySelector('iframe[title="storybook-preview"]') as HTMLIFrameElement);
    iframeRef.current = iframe;

    const updateBreakpoint = () => {
      if (!iframe?.contentWindow) return;

      const width = iframe.contentWindow.innerWidth;

      // Determine current breakpoint based on width
      let current = 'xs';

      // Check each breakpoint in ascending order
      const breakpointEntries = Object.entries(containerBreakpoints).sort(
        ([, sizeA], [, sizeB]) => sizeA - sizeB
      );

      for (const [name, size] of breakpointEntries) {
        if (width >= size) {
          current = name;
        } else {
          break;
        }
      }

      setCurrentBreakpoint(current);
    };

    // Update on resize
    window.addEventListener('resize', updateBreakpoint);

    // Initial update
    updateBreakpoint();

    return () => {
      window.removeEventListener('resize', updateBreakpoint);
    };
  }, []);

  return (
    <div className="bg-primary/10 text-primary flex items-center rounded px-3 py-1 font-medium">
      <span className="mr-1">Breakpoint:</span>
      <span className="font-bold">{currentBreakpoint}</span>
    </div>
  );
};

// Decorator for stories
export const WithViewportBreakpoint = (StoryFn: React.ComponentType, context: any) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeBreakpoint, setActiveBreakpoint] = useState<string>('');

  // Check all breakpoints
  const breakpointChecks = Object.keys(containerBreakpoints).map((breakpoint) => {
    const isActive = useContainerQuery(containerRef, breakpoint as ContainerBreakpoint, 'min');
    return { breakpoint, isActive };
  });

  useEffect(() => {
    // Find the largest active breakpoint
    const activeBreakpoints = breakpointChecks
      .filter((check) => check.isActive)
      .map((check) => check.breakpoint);

    if (activeBreakpoints.length > 0) {
      // Get the largest active breakpoint
      const largest = activeBreakpoints.reduce((prev, current) => {
        const prevSize = containerBreakpoints[prev as ContainerBreakpoint];
        const currentSize = containerBreakpoints[current as ContainerBreakpoint];
        return currentSize > prevSize ? current : prev;
      });

      setActiveBreakpoint(largest);
    } else {
      setActiveBreakpoint('xs');
    }
  }, [breakpointChecks]);

  return context.parameters.withBreakpointUi ? (
    <>
      <StoryFn />
      <div
        ref={containerRef}
        className="text-muted-foreground gap sticky bottom-0  flex h-full w-full gap-2 bg-black p-2 opacity-90 hover:opacity-100"
      >
        {containerRef.current && (
          <>
            <Badge variant="default">@{activeBreakpoint}</Badge>
            <Badge variant="default">
              {containerRef.current?.clientWidth}px /{' '}
              {Math.round(containerRef.current?.clientWidth / 16)}rem
            </Badge>
          </>
        )}
      </div>
    </>
  ) : (
    <StoryFn />
  );
};
