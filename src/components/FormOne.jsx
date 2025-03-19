import { setFormOne, useBillsDispatch } from "../reducer/billsReducer";
import { useInputs } from "../services/hooks";
import borewellMarker from "../assets/BorewellBillMarker.jpg";
import { useState } from "react";

const FormOne = () => {
  const [formDisable, setFormDisable] = useState(false);

  const total = useInputs('total', 'number');
  const days = useInputs('days', 'number');
  const units = useInputs('units', 'number');

  const formFilled = Boolean(total.value) && Boolean(days.value) && Boolean(units.value);

  const billsDispatch = useBillsDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formFilled) return;
    if (!formDisable) {
      setFormOne(billsDispatch, total.value, days.value, units.value);
    }
    setFormDisable(!formDisable);
  };

  return (
    <div className="flex flex-col">
      <div className="p-2 border border-2 border-b-1 border-r-1 border-solid border-white rounded-tl-lg flex flex-row justify-between">
        <h3 className="text text-lg font-semibold underline">Borewell Bill</h3>
        <span className={`flex w-3 h-3 m-2 ${formDisable ? 'bg-green-500' : 'bg-red-500'} rounded-full place-self-center`}></span>
      </div>
      <form onSubmit={handleSubmit} className="p-2 border border-2 border-t-1 border-solid border-white flex flex-col">
        <fieldset disabled={formDisable}>
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
        </fieldset>
        <button className={`m-1 px-2 py-1 border border-1 border-solid border-white rounded-sm ${formFilled ? 'cursor-pointer' : ''}`} disabled={!formFilled ? 'disabled' : ''}>{formDisable ? 'Edit' : 'Submit'}</button>
      </form>
    </div >
  );
};

export default FormOne;
