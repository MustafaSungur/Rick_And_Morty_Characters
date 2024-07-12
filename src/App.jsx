// src/App.js
import CharacterTable from "./components/CharacterTable";
import logo from "./assets/logo.jpg";
function App() {
  return (
    <div className=" mx-10">
      <h1 className="text-2xl mt-2 mb-1 font-sans p-5 text-slate-700">
        Rick and Morty Characters
      </h1>
      <CharacterTable />
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
}

export default App;
