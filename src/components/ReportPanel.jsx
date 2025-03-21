import dayjs from "dayjs";
import { useBillsValue } from "../reducer/billsReducer";

const ReportPanel = () => {
  const { formOne, formTwo, formOneStatus, formTwoStatus } = useBillsValue();

  if (!(formOneStatus && formTwoStatus)) {
    return (
      <div className=" p-2 border-3 border-t-0 md:border-t-3 md:border-l-0 border-solid border-slate-800 dark:border-slate-200 rounded-b-lg md:rounded-bl-none md:rounded-r-lg grow">
        <h3 className="text text-md md:text-lg font-semibold text-slate-800 dark:text-slate-200">Report Panel</h3>
      </div>
    );
  }
  const total = formOne.total + formTwo.total + 2125;
  const grandTotal = total - 1200 - 1000;
  const grandTotalPerFlat = Math.floor(grandTotal / 10);

  const handleCopy = (e) => {
    e.preventDefault();
    const report = `Borewell Bill (elec)   ${formOne.total.toFixed(2)}
Common Bill(elec)   ${formTwo.total.toFixed(2)}
Sweet water.            2125.00

Total.                        ${total.toFixed(2)}
Car park less.           1200.00
Room rent less.        1000.00
Grand Total              ${grandTotal.toFixed(2)}

${grandTotal.toFixed(0)}÷10=                 ${grandTotalPerFlat.toFixed(2)}

Expenses for ${dayjs().subtract(1, 'month').format('MMMM')} ${dayjs().year()} is ${grandTotalPerFlat.toFixed(2)} for each flat.
Funds to be transferred on or before the 10th of ${dayjs().format('MMMM')} to avoid disconnections

Pray to Almighty god togetherness and happiness amongst

Borewell units ${formOne.units} for ${formOne.days} days
Common units ${formTwo.units} for ${formTwo.days} days`;
    navigator.clipboard.writeText(report);
  };

  return (
    <div className=" p-2 border-3 border-t-0 md:border-t-3 md:border-l-0 border-solid border-slate-800 dark:border-slate-200 rounded-b-lg md:rounded-bl-none md:rounded-r-lg grow">
      <div className="flex flex-row justify-between">
        <h3 className="text text-md md:text-lg font-semibold text-slate-800 dark:text-slate-200">Report Panel</h3>
        <button onClick={handleCopy} className="m-1 px-2 py-1 border border-2 border-solid border-slate-800 dark:border-slate-200 rounded-sm text-md font-semibold text-slate-200 dark:text-black bg-indigo-600 dark:bg-indigo-400 hover:bg-indigo-400 dark:hover:bg-indigo-300 cursor-pointer">Copy</button>
      </div>
      <div className="flex flex-col grow text-sm md:text-md text-slate-800 dark:text-slate-200">
        <p className="flex flex-row justify-between">
          <span>Borewell Bill (elec)</span>
          <span>{formOne.total.toFixed(2)}</span>
        </p>
        <p className="flex flex-row justify-between">
          <span>Common Bill(elec)</span>
          <span>{formTwo.total.toFixed(2)}</span>
        </p>
        <p className="flex flex-row justify-between">
          <span>Sweet water.</span>
          <span>2125.00</span>
        </p>
        <br />
        <p className="flex flex-row justify-between">
          <span>Total.</span>
          <span>{total.toFixed(2)}</span>
        </p>
        <p className="flex flex-row justify-between">
          <span>Car park less.</span>
          <span>1200.00</span>
        </p>
        <p className="flex flex-row justify-between">
          <span>Room rent less.</span>
          <span>1000.00</span>
        </p>
        <p className="flex flex-row justify-between">
          <span>Grand Total</span>
          <span>{grandTotal.toFixed(2)}</span>
        </p>
        <br />
        <p className="flex flex-row justify-between">
          <span>{grandTotal.toFixed(0)}÷10=</span>
          <span>{grandTotalPerFlat.toFixed(2)}</span>
        </p>
        <br />
        <p>Expenses for {dayjs().subtract(1, 'month').format('MMMM')} {dayjs().year()} is {grandTotalPerFlat.toFixed(2)} for each flat.</p>
        <p>Funds to be transferred on or before the 10th of {dayjs().format('MMMM')} to avoid disconnections</p>
        <br />
        <p>Pray to Almighty god togetherness and happiness amongst</p>
        <br />
        <p>Borewell units {formOne.units} for {formOne.days} days</p>
        <p>Common units {formTwo.units} for {formTwo.days} days</p>
      </div>
    </div>
  );
};

export default ReportPanel;
