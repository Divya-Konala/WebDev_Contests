import React, { useState } from 'react'
import axios from 'axios'
import Result from './Result';
import ReactLoading from "react-loading";


const Search = () => {
    const [isBtnClicked,setBtnClick]=useState(false);
    const [pincode,setPincode]=useState("");
    const [postalData,setPostalData]=useState([]);
    const [errorMsg,setError]=useState('');
    const [isLoading, setIsLoading] = useState(false);

    function handleClick(){
        if(pincode.length==6){
            setIsLoading(true);
            axios.get(`https://api.postalpincode.in/pincode/${pincode}`)
            .then((res)=>{
                setIsLoading(false);
                setPostalData(res.data[0]);
                if(res.data[0].PostOffice!==null)
                    setBtnClick(true);
                else
                    setError("Couldn't find the postal data you're looking for…");
            })
            .catch((error)=>{
                setIsLoading(false);
                console.log(error.message);
                setError(error.message);
            })
        }else{
           setError("Invalid Pincode! Pincode should consist of 6 digits"); 
        }
    }
  return (
    <div>
        {
            (!isBtnClicked)
            ?<div className='Search'>
                <h2>Enter Pincode:</h2>
                <input value={pincode} type="number" onChange={(e)=>setPincode(e.target.value)} placeholder='Pincode'/>
                <button onClick={handleClick}>Lookup</button>
                <p id="errorMsg">{errorMsg}</p>
                <div className='Loading'>
                {
                    (isLoading)
                    ?<ReactLoading
                    type="balls"
                    color="black"
                    height={100}
                    width={100}
                    />
                    :""
                }
                </div>
            </div>
            :<Result pincode={pincode} postalData={postalData}/>
        }
    </div>
  )
}

export default Search