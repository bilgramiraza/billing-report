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
    <div className="flex flex-col border-3 rounded-t-lg md:rounded-tl-lg md:rounded-tr-none border-solid border-slate-800 dark:border-slate-200">
      <div className="p-2 border-b-3 border-solid border-slate-800 dark:border-slate-200 flex flex-row justify-between">
        <h3 className="text text-xl font-semibold text-slate-800 dark:text-slate-200">Common Bill</h3>
        <span className={`flex size-4 m-2 ${formDisable ? 'bg-green-500 border-green-500 glow-green' : 'bg-red-500 border-red-500 glow-red'} border-1 rounded-full place-self-center`}></span>
      </div>
      <form onSubmit={handleSubmit} className="p-2 flex flex-col">
        <fieldset disabled={formDisable}>
          <div className="flex flex-row">
            <div className="w-1/2 mx-auto flex flex-col text-sm lg:text-lg">
              <label className="my-1 flex flex-row justify-center">
                <span className="my-auto w-1/3 text-end font-semibold text-slate-800 dark:text-slate-200">Total</span>
                <input {...total} className="mx-2 px-1 lg:px-2 py-1 w-2/3 bg-white dark:bg-slate-900 border border-2 border-solid border-slate-800 dark:border-slate-200 rounded-lg font-semibold text-slate-800 dark:text-slate-200" />
              </label>
              <label className="my-1 flex flex-row justify-center">
                <span className="my-auto w-1/3 text-end font-semibold text-slate-800 dark:text-slate-200">Days</span>
                <input {...days} className="mx-2 px-1 lg:px-2 py-1 w-2/3 bg-white dark:bg-slate-900 border border-2 border-solid border-slate-800 dark:border-slate-200 rounded-lg font-semibold text-slate-800 dark:text-slate-200" />
              </label>
              <label className="my-1 flex flex-row justify-center">
                <span className="my-auto w-1/3 text-end font-semibold text-slate-800 dark:text-slate-200">Units</span>
                <input {...units} className="mx-2 px-1 lg:px-2 py-1 w-2/3 bg-white dark:bg-slate-900 border border-2 border-solid border-slate-800 dark:border-slate-200 rounded-lg font-semibold text-slate-800 dark:text-slate-200" />
              </label>
            </div>
            <div className="w-1/2 mx-2 flex items-center justify-center">
              <img src={commonMarker} alt="Lift Text" className="border-2 border-solid border-slate-800 dark:border-slate-200" />
            </div>
          </div>
        </fieldset>
        <button className={`my-1 mx-3 px-2 py-1 border border-2 border-solid border-slate-800 dark:border-slate-200 rounded-sm text-lg font-semibold ${formFilled ? formDisable ? 'text-slate-800 dark:text-slate-900 bg-amber-500 hover:bg-amber-400 dark:bg-amber-400 dark:hover:bg-amber-300 cursor-pointer' : 'text-slate-200 dark:text-black bg-indigo-600 dark:bg-indigo-400 hover:bg-indigo-400 dark:hover:bg-indigo-300 cursor-pointer' : 'text-slate-800 dark:text-slate-200 bg-slate-200 dark:bg-slate-800'}`} disabled={!formFilled ? 'disabled' : ''}>{formDisable ? 'Edit' : 'Submit'}</button>
      </form>
    </div>
  );
};

export default FormTwo;
