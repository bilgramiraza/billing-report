import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
import ReportPanel from "./components/ReportPanel";

function App() {

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <h1 className="pb-3 text text-2xl font-bold text-center">Billing Report</h1>
      <div className="w-4/5 flex flex-col lg:flex-row">
        <div className="w-1/3 flex flex-col justify-between">
          <FormOne />
          <FormTwo />
        </div>
        <div className="w-2/3 flex flex-col">
          <ReportPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
