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
            <div className="w-full mb-1 pl-3 py-2 text-xl font-mono font-semibold underline text-metal">Recent Transactions</div>
            <Expenses />
        </div>
    </div>
  );
}