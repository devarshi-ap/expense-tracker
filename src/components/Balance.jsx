import { useSelector } from 'react-redux';

export default function Balance() {

    const balance = useSelector(state => state.transactions.balance)

    return (
        <div className="inline-flex flex-row h-20 w-full justify-between">
            <h2 className="w-fit ml-3 text-4xl font-mono bg-gradient-to-r bg-clip-text  text-transparent  from-metal via-[#c6b3d8] to-metal animate-text" data-cy="account-balance">Hey Guy!<br />${parseFloat(balance).toFixed(2)}</h2>
            <img src="https://i.imgur.com/LS0NftU.gif" className="h-20 w-auto mr-7 top-4 relative rounded-lg hover:cursor-pointer" alt="" onClick={() => window.location.reload(false)}/>
        </div>
    )
}