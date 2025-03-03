import React, { createContext, useState, useEffect, useCallback } from 'react';
import { createClient } from 'contentful';

// Initialize Contentful client
const client = createClient({
  space: '62qazwxhzqwq',
  accessToken: 'mtm6vmBbMpY9F_9bTcm7AjoirdN-j4zofvqrmWwq1CI',
  environment: 'master',
});

export const ContentfulContext = createContext();

export const ContentfulProvider = ({ children }) => {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState({});

  // Use useCallback to avoid re-creating function on every render
  const fetchContent = useCallback(async (contentType) => {
    if (content[contentType]) return; // Avoid re-fetching

    setLoading((prev) => ({ ...prev, [contentType]: true }));

    try {
      const response = await client.getEntries({ content_type: contentType });

      setContent((prev) => ({
        ...prev,
        [contentType]: response.items.map((item) => item.fields), // Store all items as an array
      }));
    } catch (error) {
      console.error(`Error fetching ${contentType}:`, error);
    }

    setLoading((prev) => ({ ...prev, [contentType]: false }));
  }, [content]);

  return (
    <ContentfulContext.Provider value={{ content, fetchContent, loading }}>
      {children}
    </ContentfulContext.Provider>
  );
};