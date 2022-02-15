import React,{useState,useEffect} from 'react';
import Addusers from './Addusers';

import './App.css';
import Userlist from './components/Users/Userlist';

let userData=[];
function App() {


  const [userList,setUserList]=useState([]);
  const [userName,setUserName]=useState();
  const [age,setAge]=useState();
  const [userdata,setUserData]=useState([]);

  useEffect(()=>{
    console.log('check');
  },[userdata])
  function accessingInput(event){
    setUserName(event.target.value)
  }
  function accessingInputAge(event){
    setAge(event.target.value)
  }
  function handlingClick(){
    // console.log(age,userName)

    if(userName!=='' && age !==''){
    let tmpobj={
      name:'',
      age:''
    }
    tmpobj.name=userName;
    tmpobj.age=age;
    userData.push(tmpobj);
    setUserData(userData);
    console.log(userData)
  }
  }

  const addUserhandle=(uName,uAge)=>{
    setUserList((prevUserList)=>{
      return[...prevUserList,{'name':uName,'age':uAge}]
    })
  }
  return (
    // <div className='container'>

    //   <div className='insideConatiner'>
    //     <div className='box'>
          
    //     <h3>Username</h3>
    //     <input type='text' className='input' onChange={accessingInput}/>
    //     <h3>Age (Years)</h3>
    //     <input type='number' className='input' onChange={accessingInputAge}/>
    //     <button className='btn' onClick={handlingClick}>
    //       Add User

    //     </button>

    //     </div>

    //     <div>
        
    //   </div>
    //   <div className='insideConatiner1'>
    //   <div className='box'>
          
        
          
    //      {
    //        userdata.map((item)=>{
    //             console.log(item,'-------------')
    //         return(
    //           <div className='rectangularBox'>
    //               {/* <h6>}</h6>
    //               <h6></h6> */}
    //               <h3>{item.name}</h3>
    //               <h6>{item.age}</h6>

    //           </div>

    //         )
    //        })
    //      }
  
    //       </div>
    //     </div>
    //     </div>
    // </div>
    <>
    <Addusers onAddUser={addUserhandle}/>
    <Userlist userlist={userList}/>
    </>
  );
}

export default App;
