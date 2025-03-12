import dayjs from "dayjs";
import { useBillsValue } from "../reducer/billsReducer";

const ReportPanel = () => {
  const { formOne, formTwo, formOneStatus, formTwoStatus } = useBillsValue();

  if (!(formOneStatus && formTwoStatus)) {
    return (
      <div>
        <p>Report Panel</p>
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
    <div>
      <div>
        <h3>Report Panel</h3>
        <button onClick={handleCopy}>Copy</button>
      </div>
      <div>
        <p><span>Borewell Bill (elec)</span><span>{formOne.total.toFixed(2)}</span></p>
        <p><span>Common Bill(elec)</span><span>{formTwo.total.toFixed(2)}</span></p>
        <p><span>Sweet water.</span><span>2125.00</span></p>
        <br />
        <p><span>Total.</span><span>{total.toFixed(2)}</span></p>
        <p><span>Car park less.</span><span>1200.00</span></p>
        <p><span>Room rent less.</span><span>1000.00</span></p>
        <p><span>Grand Total</span><span>{grandTotal.toFixed(2)}</span></p>
        <br />
        <p><span>{grandTotal.toFixed(0)}÷10=</span><span>{grandTotalPerFlat.toFixed(2)}</span></p>
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
