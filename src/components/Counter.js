import React from 'react';

export const Counter = (total,doneTotal,undoneTotal) => {
    return (<tr className="footer">
    <td>
<b className="total">Итого: {total}</b>
    </td>
    <td>
<b className="doneTotal">Сделано: {doneTotal}</b>
    </td>
    <td>
<b className="undoneTotal">Осталось: {undoneTotal}</b>
    </td></tr>)
}