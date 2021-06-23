import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { AddTransaction } from './AddTransaction';
import { FaTrash } from 'react-icons/fa';
import { FaPencilAlt } from 'react-icons/fa';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction, editTransaction } = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    

    return (
        <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <div className='icons'>
                <FaTrash
                onClick={() => deleteTransaction(transaction.id)}
                className='delete-btn'
                />
                <FaPencilAlt
                // onClick={() => setEdit({ id: transaction.id})}
                className='edit-btn'
                />
            </div>
        </li>
    )
}
