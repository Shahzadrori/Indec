import React, { useState } from 'react';
import './indec.css'

const Change = () =>{
    const [num,setnum] = useState(0);
 const Inp = () =>{
   setnum(num + 1)
  }
  const Inp2 = () => {
      if (num > 0){
          setnum(num - 1)
      }else{
          setnum(0);
          alert('Min Value Reached')
      }
  }



    return(
        <>
        <div className='outer'>
            <h1 className='heading'>Incrementing & Decrementing</h1>
            <h1 className='dis'>{num}</h1>
            <div className='btn'>
                <button type='button' className='rig' onClick={Inp}>Add</button>
                <button type='button' className='lef' onClick={Inp2}>Sub</button>
            </div>
            </div>
        </>
    )
}

export default Change;