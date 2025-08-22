import Link from "next/link";

export default function Error() {
  return (
    <>
      <head>
        <title>Page Not Found - TrickBuzz</title>
      </head>
      <div className="flex min-h-[50dvh] flex-col items-center justify-center">
        <h1 className="text-center text-4xl font-bold text-red-500">
          Something went wrong!
        </h1>
        <p className="mt-4 text-center text-gray-600 dark:text-gray-400">
          An error occurred. Please refresh the page or try again later.
        </p>

        <Link
          href="/"
          className="mt-6 rounded bg-blue-500 px-4 py-2 text-white"
        >
          Go to Homepage
        </Link>
      </div>
    </>
  );
}
