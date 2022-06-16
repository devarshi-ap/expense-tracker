export default function Form() {

    // https://images.squarespace-cdn.com/content/v1/52b4e622e4b09ec38d13e690/1586381935317-HYDDUF0KBXO24XV5J8PA/budgetlistcategories.png
    // https://mint.intuit.com/mint-categories/
    const categories = [
        'Bills & Utilities',
        'Childcare',
        'Debt',
        'Education',
        'Food & Dining',
        'Giving',
        'Health & Fitness',
        'Housing',
        'Income',
        'Medical',
        'Other',
        'Personal Care',
        'Rec. & Entertainment',
        'Savings',
        'Shopping',
        'Taxes',
        'Transportation',
    ];

    const categoryOptions = categories.map(category => (
        <option value={category}>{category}</option>
    ))
    

    return (
        <div className="m-2 block p-7 max-w-lg bg-[#f1f5f9] rounded-lg border border-gray-200 shadow-md dark:border-gray-700 dark:hover:bg-gray-700">
            <form>
                <input
                    className="w-full h-9 mb-1 rounded-sm text-center"
                    type="text" 
                    // value={}
                    // onChange={}
                    placeholder="Transaction Name"
                ></input>

                <select id="categoriesList" name="type" className="w-full my-2 h-9 rounded-sm">
                    {categoryOptions}
                </select>

                <div className="flex justify-between mt-1 mb-3">
                    <select name="type" className="w-4/12">
                        <option value="Expense">Expense</option>
                        <option value="Deposit">Deposit</option>
                    </select>

                    <input
                        className="w-7/12 h-9 rounded-sm text-center"
                        type="number" 
                        // value={}
                        // onChange={}
                        placeholder="Amount ($)"
                    ></input>
                </div>
                
                <button
                    className="w-full bg-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm hover:scale-105 transition duration-700"
                    type="submit"
                >+ Add Transaction</button>
            </form>
        </div>
    )
}