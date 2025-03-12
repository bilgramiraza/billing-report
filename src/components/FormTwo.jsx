import { setFormTwo, useBillsDispatch } from "../reducer/billsReducer";
import { useInputs } from "../services/hooks";

const FormTwo = () => {
  const total = useInputs('total', 'number');
  const days = useInputs('days', 'number');
  const units = useInputs('units', 'number');

  const billsDispatch = useBillsDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormTwo(billsDispatch, total.value, days.value, units.value);
  };

  return (
    <div>
      <p>Common Bill</p>
      <form onSubmit={handleSubmit}>
        <label>
          Total: <input {...total} />
        </label>
        <label>
          Days: <input {...days} />
        </label>
        <label>
          Units: <input {...units} />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default FormTwo;
