import InputBox from "./components/InputBox";

function App() {
  return (
    <div className="h-screen w-screen bg-cover flex justify-center items-center" style={{backgroundImage:`url('https://w.wallhaven.cc/full/nr/wallhaven-nrll21.jpg')`}}>
      <div className="m-10 bg-black/50 p-10 rounded-lg">
        <h1 className="text-4xl text-center mb-2 text-white">Currency Converter</h1>
      <InputBox />
      </div>
    </div>
  );
}

export default App;
