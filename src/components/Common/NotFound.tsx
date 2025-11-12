const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-8 bg-black/30">
      <h1 className="text-6xl font-bold text-red-600 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2">Page Not Found</h2>
      <p className="text-gray-600 mb-6">
        The page you’re looking for does not exist or has been moved.
      </p>
      <a
        href="/"
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md font-medium transition-colors"
      >
        Go Home
      </a>
    </div>
  );
};

export default NotFound;