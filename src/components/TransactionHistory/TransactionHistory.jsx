import * as Lale from './Transaction.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={Lale.transactionHistory}>
            <thead>
                <tr className={Lale.transactionHistory__head}>
                    <th className={Lale.transactionHistory_item}>Type</th>
                    <th className={Lale.transactionHistory_item}>Amount</th>
                    <th className={Lale.transactionHistory_item}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map((item, index) => {
                    return (
                        <tr key={index} className={Lale.transaction__list}>
                            <td className={Lale.transaction__item}>{item.type}</td>
                            <td className={Lale.transaction__item}>{item.amount}</td>
                            <td className={Lale.transaction__item}>{item.currency}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
export default TransactionHistory;