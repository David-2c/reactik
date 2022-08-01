import React, { useState } from "react";

export default function Element() {
    
    const [count, incr] = useState(0)
    
    return (
        <>
            <div><h1 className="title-">{'Счетчик :)'}</h1></div>
            <div className="part-1"><p1>Ты клинкул {count} раз</p1></div>
            <div>   
                <button onClick={() =>
                    incr(count + 1)} className='but'></button>
            </div>
        </>    
    )
}