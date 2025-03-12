import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
import ReportPanel from "./components/ReportPanel";

function App() {

  return (
    <div>
      <h1>Billing Report</h1>
      <div>
        <FormOne />
        <FormTwo />
        <ReportPanel />
      </div>
    </div>
  );
}

export default App;
