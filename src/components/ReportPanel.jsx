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

  return (
    <div>
      <p>Report Panel</p>
      <p>Form One: </p>
      <p>Total: {formOne.total}</p>
      <p>Days: {formOne.days}</p>
      <p>Units: {formOne.units}</p>
      <p>Form Two: </p>
      <p>Total: {formTwo.total}</p>
      <p>Days: {formTwo.days}</p>
      <p>Units: {formTwo.units}</p>
    </div>
  );
};

export default ReportPanel;
