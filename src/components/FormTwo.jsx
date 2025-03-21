import { setFormTwo, useBillsDispatch } from "../reducer/billsReducer";
import { useInputs } from "../services/hooks";
import commonMarker from "../assets/CommonBillMarker.jpg";
import { useState } from "react";

const FormTwo = () => {
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
      setFormTwo(billsDispatch, total.value, days.value, units.value);
    }
    setFormDisable(!formDisable);
  };

  return (
    <div className="flex flex-col border-3 border-t-0 rounded-b-none md:rounded-bl-lg border-solid border-slate-800">
      <div className="p-2 border-b-3 border-solid border-slate-800 flex flex-row justify-between">
        <h3 className="text text-xl font-semibold text-slate-800">Common Bill</h3>
        <span className={`flex size-4 m-2 ${formDisable ? 'bg-green-500 border-green-500 glow-green' : 'bg-red-500 border-red-500 glow-red'} border-1 rounded-full place-self-center`}></span>
      </div>
      <form onSubmit={handleSubmit} className="p-2 flex flex-col">
        <fieldset disabled={formDisable}>
          <div className="flex flex-row">
            <div className="w-1/2 mx-auto flex flex-col text-sm lg:text-lg">
              <label className="my-1 flex flex-row justify-center">
                <span className="my-auto w-1/3 text-end font-semibold text-slate-800">Total</span>
                <input {...total} className="mx-2 px-1 lg:px-2 py-1 w-2/3 bg-white border border-2 border-solid border-slate-800 rounded-lg font-semibold text-slate-800" />
              </label>
              <label className="my-1 flex flex-row justify-center">
                <span className="my-auto w-1/3 text-end font-semibold text-slate-800">Days</span>
                <input {...days} className="mx-2 px-1 lg:px-2 py-1 w-2/3 bg-white border border-2 border-solid border-slate-800 rounded-lg font-semibold text-slate-800" />
              </label>
              <label className="my-1 flex flex-row justify-center">
                <span className="my-auto w-1/3 text-end font-semibold text-slate-800">Units</span>
                <input {...units} className="mx-2 px-1 lg:px-2 py-1 w-2/3 bg-white border border-2 border-solid border-slate-800 rounded-lg font-semibold text-slate-800" />
              </label>
            </div>
            <div className="w-1/2 mx-2 flex items-center justify-center">
              <img src={commonMarker} alt="Lift Text" className="border-2 border-solid border-slate-800" />
            </div>
          </div>
        </fieldset>
        <button className={`my-1 mx-3 px-2 py-1 border border-2 border-solid border-slate-800 rounded-sm text-lg font-semibold ${formFilled ? formDisable ? 'text-slate-800 bg-amber-500 hover:bg-amber-400 cursor-pointer' : 'text-slate-200 bg-indigo-600 hover:bg-indigo-400 cursor-pointer' : 'text-slate-800 bg-slate-200'}`} disabled={!formFilled ? 'disabled' : ''}>{formDisable ? 'Edit' : 'Submit'}</button>
      </form>
    </div>
  );
};

export default FormTwo;
