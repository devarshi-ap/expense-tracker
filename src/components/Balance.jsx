import { useSelector } from 'react-redux';

export default function Balance() {

    const balance = useSelector(state => state.transactions.balance)

    return (
        <div className="flex flex-col">
            <h2 className="w-full pl-3 pb-3 text-4xl font-mono text-metal">Hi Dev!<br />${balance}</h2>
        </div>
    )
}