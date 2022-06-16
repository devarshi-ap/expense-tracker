import Balance from "./components/Balance";
import Form from './components/Form';
import TransactionLog from './components/TransactionLog';

export default function App() {
  return (
    <div className="grid place-content-center bg-[#e0f2fe] min-h-screen py-10">
        <div className="flex flex-col sm:flex-col md:w-[30rem]">
            <div>
                <Balance />
                <Form />
            </div>
            <div className="w-full mb-1 pl-3 py-2 text-xl font-mono font-semibold underline text-metal">Recent Transactions</div>
            <TransactionLog />
        </div>
    </div>
  );
}