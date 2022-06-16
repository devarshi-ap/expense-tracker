import { useSelector } from 'react-redux';
import Transaction from './Transaction';

export default function TransactionLog() {
    
    const transactions = useSelector(state => state.transactions.transactionsList)
    
    return (
        <>
            {transactions.map(item => (
                <Transaction 
                    name={item.transactionName}
                    category={item.transactionCategory}
                    type={item.transactionType}
                    date={item.transactionDate}
                    amount={item.transactionAmount}
                    key={item.transactionId}
                />
            ))}
        </>
    )
}