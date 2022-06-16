import { useSelector } from 'react-redux';

export default function Balance() {

    const balance = useSelector(state => state.transactions.balance)

    return (
        <div className="inline-flex flex-row h-20 w-full justify-between">
            <h2 className="w-fit ml-3 text-4xl font-mono text-metal">Hi Dev!<br />${balance}</h2>
            <img src="https://i.imgur.com/LS0NftU.gif" className="h-20 w-auto mr-7 top-4 relative rounded-lg" alt="" />
        </div>
    )
}