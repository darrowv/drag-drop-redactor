import Sidebar from "./components/Sidebar";
import Workarea from "./components/Workarea";
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
