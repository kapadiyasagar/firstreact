import logo from './logo.svg';
import './App.css';
import matchers from '@testing-library/jest-dom/matchers';
import Contry from './componet/container/contry';

function Medicine(props) {

    const data = [
      {
        id: 101,
        name: 'Abacavir',
        quantity: 25,
        price: 150,
        expiry: 2022,
        status: true
      },
      {
        id: 102,
        name: 'Eltrombopag',
        quantity: 90,
        price: 550,
        expiry: 2020,
        status: true
      },
      {
        id: 103,
        name: 'Meloxicam',
        quantity: 85,
        price: 450,
        expiry: 2025,
        status: false
      },
      {
        id: 104,
        name: 'Allopurinol',
        quantity: 50,
        price: 600,
        expiry: 2023,
        status: true
      },
      {
        id: 105,
        name: 'Phenytoin',
        quantity: 63,
        price: 250,
        expiry: 2021,
        status: false
      }
    ];
  
// console.log(detail[1 + 2].price);

let  filterdata = data.filter((value, index) => (value.status==true));

let total=filterdata.reduce((value,index)=>value+index.price,0);

console.log(total);
console.log(filterdata);

  return (
    <>
      <table border="1">
        <tr>
          <td>id</td>
          <td>name</td>
          <td>price</td>
          <td>expiry</td>
          <td>status</td>
          <td>total</td>
        </tr>
        {
          data.map((value, index) => {
            return (
              <tr>
                <td>{value.id}</td>
                <td>{value.name}</td>
                <td>{value.price}</td>
                <td>{value.expiry}</td>
                <td>{value.status}</td>
                <td>{value.total}</td>
                {index === 0 ? <td rowspan = {filterdata.length} > {total} </td> : null}  
              </tr>
            )
          }
          )
        }
      </table>
    </>
  )
}


export default Medicine;

