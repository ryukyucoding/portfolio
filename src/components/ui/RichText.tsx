import { Fragment } from 'react';

/**
 * Renders `[[phrase]]` markers from the content data as accent-coloured spans,
 * so copy stays plain text in `data/` instead of embedded markup.
 */
export function RichText({ text }: { readonly text: string }) {
  const parts = text.split(/\[\[(.+?)\]\]/g);
  return (
    <>
      {parts.map((part, index) =>
        index % 2 === 1 ? (
          <span className="highlight" key={index}>
            {part}
          </span>
        ) : (
          <Fragment key={index}>{part}</Fragment>
        ),
      )}
    </>
  );
}
