import FormOne from "./components/FormOne";
import FormTwo from "./components/FormTwo";
import ReportPanel from "./components/ReportPanel";

function App() {

  return (
    <div className="w-full h-lvh overflow-auto bg-slate-200 flex flex-col items-center">
      <h1 className="py-3 text text-2xl font-bold text-center text-slate-800">Billing Report</h1>
      <div className="w-4/5 flex flex-col md:flex-row items-center md:items-stretch">
        <div className="w-4/5 md:w-1/3 flex flex-col justify-between">
          <FormOne />
          <FormTwo />
        </div>
        <div className="w-4/5 md:w-2/3 flex flex-col">
          <ReportPanel />
        </div>
      </div>
    </div>
  );
}

export default App;
