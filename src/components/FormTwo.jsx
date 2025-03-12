import { useInputs } from "../services/hooks";

const FormTwo = () => {
  const total = useInputs('total', 'number');
  const days = useInputs('days', 'number');
  const units = useInputs('units', 'number');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Form 2: \nTotal: ${total.value} \nDays: ${days.value}\nUnits: ${units.value}`);
  };

  return (
    <div>
      <p>Form Two</p>
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
