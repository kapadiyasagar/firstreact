import logo from './logo.svg';
import './App.css';
import matchers from '@testing-library/jest-dom/matchers';
import Contry from './componet/container/contry';

function App() {


  const empolay = [
    {
        name: "amit",
        age: 35,
        salary: 40000,
        bonus: 1000,
        status: true
    },
    {
        name: "ajay",
        age: 25,
        salary: 38000,
        bonus: 2000,
        status: false
    },
    {
        name: "mayur",
        age: 23,
        salary: 50000,
        bonus: 500,
        status: true
    },
    {
        name: "jay",
        age: 29,
        salary: 35000,
        bonus: 600,
        status: true
    },
    {
        name: "raj",
        age: 33,
        salary: 22000,
        bonus: 2000,
        status: true
    },
]

let filterdata=empolay.filter((d,i)=>(d.status==true))
console.log(filterdata)

let total=filterdata.reduce((acc,d) =>acc +d.salary+d.bonus,0)
console.log(total);

return (
  <>
      <table border="1">
          <tr>
              <td>name</td>
              <td>age</td>
              <td>salary</td>
              <td>bonus</td>
              <td>status</td>
              <td>salary+bonus</td>
              <td>total</td>
          </tr>
          {
              empolay.map((d, i) => {
                  return (
                      <tr>
                          <td>{d.name}</td>
                          <td>{d.age}</td>
                          <td>{d.salary}</td>
                          <td>{d.bonus}</td>
                          <td>{d.status.toString()}</td>
                          <td>{d.salary+d.bonus}</td>
                          {i==0?<td rowSpan={filterdata.length}>{total}</td>:null}
                      </tr>
                  )
              }
              )
          }
      </table>
  </>
)
}


export default App;

