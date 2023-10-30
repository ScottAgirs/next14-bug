'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    // eslint-disable-next-line no-console
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-lg p-4">
      <div className="rounded-xl border border-error bg-error/5 p-4">
        <h2>Sorry, something went wrong.</h2>

        <p className="text-xs">
          Located at <code>(default)</code>
        </p>

        <button
          className="mt-5 rounded bg-error/10 px-2 py-1 text-error"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          Reload
        </button>
      </div>
    </div>
  );
}
