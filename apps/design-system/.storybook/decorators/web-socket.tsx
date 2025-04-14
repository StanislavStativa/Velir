import React, { useEffect, useState, useRef } from 'react';
import { StoryFn } from '@storybook/react';

const themeBasePath = 'themes/';

export const WithWebSocket = (Story: StoryFn, context) => {
  const [styleUrl, setStyleUrl] = useState(`${themeBasePath}${context.globals.theme}.css`);
  const socketRef = useRef<WebSocket | null>(null); // Using useRef for the WebSocket instance
  const linkRef = useRef<HTMLLinkElement | null>(null); // Using useRef for the link element
  const setURL = (url) => {
    // Only create and append link element once
    if (!linkRef.current) {
      const linkElement = document.createElement('link');
      linkElement.id = 'dynamic-theme';
      linkElement.rel = 'stylesheet';
      linkElement.type = 'text/css';
      document.head.appendChild(linkElement);
      linkRef.current = linkElement;
    }

    // Update href to the new styleUrl
    if (linkRef.current) {
      linkRef.current.href = url;
    }
  };
  // WebSocket setup
  useEffect(() => {
    if (!socketRef.current) {
      const socket = new WebSocket('ws://localhost:6061');
      socketRef.current = socket;
      setURL(`${themeBasePath}${context.globals.theme}.css?ts=${new Date().getTime()}`);

      // Listen for WebSocket messages
      socket.onmessage = (event) => {
        // Trigger style update based on the message (you can customize the logic here)
        console.log('WebSocket message received:', event.data);
        setStyleUrl(`${themeBasePath}${context.globals.theme}.css?ts=${new Date().getTime()}`);
      };

      // Handle WebSocket errors
      socket.onerror = (error) => {
        console.error('WebSocket Error:', error);
      };

      // Cleanup WebSocket connection when component unmounts
      return () => {
        socketRef.current?.close();
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Ensure the link element is created and updated
  useEffect(() => {
    setURL(styleUrl);
  }, [styleUrl]);

  //update url any time current theme changes
  useEffect(() => {
    setStyleUrl(`${themeBasePath}${context.globals.theme}.css?ts=${new Date().getTime()}`);
  }, [context.globals.theme]);

  // Render the wrapped Story
  return <Story />;
};
