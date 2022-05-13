import logo from './logo.svg';
import './App.css';
import Branch from './container/branch';
import Branchname from './container/branch';
import Timefun from './container/class-life-cycle/funcation-cycle';
import { useEffect, useState } from 'react';
import Loading from './componet/loading';
import home from './container/home';


const HomewithLoading = Loading(home)

function App() {

  // debugger

  const [loading, setLoading] = useState(false);
  const [data, setdata] = useState([]);


  let orgdata = [
    { id: 101, name: "sagar" },
    { id: 102, name: "raju" }
  ]

  useEffect(
    () => {
      setLoading(true);
      setTimeout(() => { setLoading(false); setdata(orgdata) }, 2000);
    },
    []
  )

  console.log(loading, data);

  return (
    <>
      <HomewithLoading isLoading={loading} data={data} />
    </>
  );
}

export default App;
