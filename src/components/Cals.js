import React, { useState } from 'react'
import '../components/Cals.css'

function Cals() {
    const [value, setValue] = useState('');
  return (
    <>
    <h1 className='heading'>Calculator</h1>
    <div className='container'>
        <div className='container-item'>
            <form >
                <div className='display'>
                    <input type='text' value={value} />
                </div>
                <div className='inputfeild'>
                    <input type='button' value='Clear' onClick={e => setValue('')}/>
                    <input type='button' value='Back' onClick={e => setValue(value.slice(0, -1))}/>
                    <input type='button' value='.' onClick={e => setValue(value + e.target.value)}/>
                    <input type='button' value='/' onClick={e => setValue(value + e.target.value)}/>
                </div>
                <div className='inputfeild'>
                    <input type='button' value='7' onClick={e => setValue(value + e.target.value)}/>
                    <input type='button' value='8' onClick={e => setValue(value + e.target.value)}/>
                    <input type='button' value='9' onClick={e => setValue(value + e.target.value)}/>
                    <input type='button' value='*' onClick={e => setValue(value + e.target.value)}/>
                </div>
                <div className='inputfeild'>
                    <input type='button' value='4' onClick={e => setValue(value + e.target.value)}/>
                    <input type='button' value='5' onClick={e => setValue(value + e.target.value)}/>
                    <input type='button' value='6' onClick={e => setValue(value + e.target.value)}/>
                    <input type='button' value='+' onClick={e => setValue(value + e.target.value)}/>
                </div>
                <div className='inputfeild'>
                    <input type='button' value='1' onClick={e => setValue(value + e.target.value)}/>
                    <input type='button' value='2' onClick={e => setValue(value + e.target.value)}/>
                    <input type='button' value='3' onClick={e => setValue(value + e.target.value)}/>
                    <input type='button' value='-' onClick={e => setValue(value + e.target.value)}/>
                </div>
                <div className='inputfeild'>
                    <input type='button' value='000' onClick={e => setValue(value + e.target.value)}/>
                    <input type='button' value='00' onClick={e => setValue(value + e.target.value)}/>
                    <input type='button' value='0' onClick={e => setValue(value + e.target.value)}/>   
                    < input type='button' value='=' onClick={e => setValue(eval(value))} />
                </div>
            </form>

        </div>
    </div>
    </>
  )
}

export default Cals
