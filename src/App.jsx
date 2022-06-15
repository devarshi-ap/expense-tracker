import "./App.css";
import Form from './components/Form';
import Expenses from './components/Expenses';
import Balance from "./components/Balance";

export default function App() {
  return (
    <div className="grid place-content-center bg-[#e0f2fe] h-screen">
        <div className="flex flex-col sm:flex-col md:w-[28rem]">
            <div>
                <Balance />
                <Form />
            </div>
            <Expenses />
        </div>
    </div>
  );
}