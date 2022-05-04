import logo from './logo.svg';
import './App.css';
import matchers from '@testing-library/jest-dom/matchers';

function App() {

  // arry-copy

  // let arr =[10,20,30];

  // // copy-arr

  // let arr1=[...arr];
  // console.log(arr1);

  // // merge-arr

  // let arr2 =[90,...arr,100];
  // console.log(arr2);

  // // destructure-arr

  // let [eng,guj,ss,sci]=arr;
  // console.log(ss);
}

// Object-copy


let obj={
  id:101,
  name:"sagar"
};

// copy

let obj1={...obj};
console.log(obj1);


// merge

let obj2={
  ...obj,
  place:"surat",
  name:"ajay"
};

// destructure

let{id,name}=obj
console.log(id,name);

console.log(obj2);
export default App;
