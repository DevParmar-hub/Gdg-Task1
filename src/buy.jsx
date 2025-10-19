import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'


const buy = () => {
    const [email, setemail] = useState("")
     const [Id, setId] = useState("");
    const [date, setdate] = useState("");
    const [name,setname]=useState("")
    const patterns = {
        email: /^([a-z\d\.-])+@([a-z\d-]+\.([a-z]{2,8}))$/,
    }

    const validate = (regex, input) => {
        return patterns[regex].test(input);
    }

      const checkAll = () => {
    let flag = 0
    if (email === "" || !validate("email", email)) {
      flag = 1;
    }
    if (date ==="")
        flag=1;
    if (Id==="")
        flag=1;
    if(name==="")
        flag=1;

    if (flag == 1)
      alert("Please fill all of the Fiels");
    
    else
    {
      alert("Response submitted successfully");
      setemail("");
      setdate("");
      setId("");
      setname("");
    }
  };

    return (
        <div className='justify-center flex'>
            <div className='h-150 rounded-4xl w-200  mb-15 border '>
                <div className='h-20 pt-5 pl-5 bg-[#5937E0] rounded-t-4xl text-white text-4xl font-bold'>Please fill the Buyers form </div>
                <div className='flex flex-col items-center'>

                    <div className='ml-[17px] mt-[2vh] font-semibold text-2xl'>Name</div>
                    <input type="text" name="" id="" placeholder='Enter name' value={name} className='w-[30.5vw] h-[6vh] rounded-[5px] border border-gray-400 ml-[15px] mt-[2px] pl-2.5' onChange={(e) => setname(e.target.value)} />
                    <div className='ml-[17px] mt-[2vh] font-semibold text-2xl'>Email</div>
                    <input type="email" placeholder="Email Address" value={email} className="w-[30.5vw] h-[6vh] rounded-[5px] border border-gray-400 ml-[15px] mt-[2px] pl-2.5" onChange={(e) => setemail(e.target.value)} />
                    {
                        !validate("email", email) && email != ""
                        && <div className='Desc_Email' id='email'>Please enter a valid Email.</div>
                    }
                    <div className='ml-[17px] mt-[2vh] font-semibold text-2xl'>Car ID</div>
                    <input type="text" placeholder='Car Id ' value={Id} className='w-[30.5vw] h-[6vh] rounded-[5px] border border-gray-400 ml-[15px] mt-[2px] pl-2.5' onChange={(e) => setId(e.target.value)} />
                    <div className='ml-[17px] mt-[2vh] font-semibold text-2xl'>Schedule session</div>
                    <input type="date" name="" id="" value={date} className='w-[30.5vw] h-[6vh] rounded-[5px] border border-gray-400 ml-[15px] mt-[2px] pl-2.5' onChange={(e) => setdate(e.target.value)} />
                    <button className='h-15 w-90  mt-[4vh] text-2xl font-semibold rounded-xl text-white bg-[#FF9E0C] ml-[17px]' onClick={checkAll}>
                        Book now
                    </button>
                </div>

            </div>
        </div>
    )
}

export default buy