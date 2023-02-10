import Sidebar from "./Components/Sidebar";
import Workarea from "./Components/Workarea";
import "./styles/app.css";

export default function App() {
  return (
    <>
      <h1>Simple Editor</h1>
      <main>
        <Sidebar />
        <Workarea />
      </main>
    </>
  );
}
