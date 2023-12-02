const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header>
        <div className="container mx-auto px-4 py-4 bg-white my-4">
          <p className="flex items-center space-x-1 text-blue-600">
            <span>BlueBell</span>
          </p>
        </div>
      </header>
      <div className="flex flex-grow flex-row container mx-auto px-4 py-6 bg-white">
        <section>Section 1</section>
        <section>Section 2</section>
      </div>
      <footer>
        <div className="container mx-auto px-4 py-4 bg-white my-4">
          <p className="flex items-center space-x-1 text-gray-600">
            <span>All rights reserved</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
