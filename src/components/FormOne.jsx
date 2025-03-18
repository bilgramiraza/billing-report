import { setFormOne, useBillsDispatch } from "../reducer/billsReducer";
import { useInputs } from "../services/hooks";
import borewellMarker from "../assets/BorewellBillMarker.jpg";

const FormOne = () => {
  const total = useInputs('total', 'number');
  const days = useInputs('days', 'number');
  const units = useInputs('units', 'number');

  const billsDispatch = useBillsDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormOne(billsDispatch, total.value, days.value, units.value);
  };

  return (
    <div className="flex flex-col">
      <div className="p-2 border border-2 border-b-1 border-r-1 border-solid border-white rounded-tl-lg ">
        <h3 className="text text-lg font-semibold underline">Borewell Bill</h3>
      </div>
      <form onSubmit={handleSubmit} className="p-2 border border-2 border-t-1 border-solid border-white flex flex-col">
        <div className="flex flex-row">
          <div className="w-1/2 mx-auto flex flex-col">
            <label className="flex flex-row justify-center">
              Total: <input {...total} className="mx-2 px-2 py-1 w-3/5 border border-2 border-solid border-white rounded-lg" />
            </label>
            <label className="flex flex-row justify-center">
              Days: <input {...days} className="mx-2 px-2 py-1 w-3/5 border border-2 border-solid border-white rounded-lg" />
            </label>
            <label className="flex flex-row justify-center">
              Units: <input {...units} className="mx-2 px-2 py-1 w-3/5 border border-2 border-solid border-white rounded-lg" />
            </label>
          </div>
          <div className="w-1/2 mx-2 flex items-center justify-center">
            <img src={borewellMarker} alt="Comm Text" />
          </div>
        </div>
        <button className="m-1 px-2 py-1 border border-1 border-solid border-white rounded-sm cursor-pointer">Submit</button>
      </form>
    </div>
  );
};

export default FormOne;
