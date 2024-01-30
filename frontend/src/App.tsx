const backend_port = 3333;
export const backend_url = `//localhost:${backend_port}`;

function App() {
  return (
    <div className="mt-4 text-center">
      <h1 className="text-3xl font-bold underline">
        ~Welcome to the full stack template~
      </h1>
      <div className="mt-4 text-blue-600">
        <a href={`//localhost:${backend_port}/hello/test`}>Test</a>
      </div>
    </div>
  );
}

export default App;
