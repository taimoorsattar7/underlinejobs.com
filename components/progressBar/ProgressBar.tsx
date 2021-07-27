import React from 'react';

export default function ProgressBar(props: any) {
    // const MAX_STEPS = props.pbData.length;
    const dataLength = props.pbData.length-1;
    
    return (
        <>
            <div className="form-steps form-steps--four">
                

                {props.pbData.map((data: any, index: any) => (<>
                        <div 
                            key={index}
                            style={{ left: `${(100/dataLength)*index}%` }}
                            className={`pointer form-step 
                                        ${data.active == true
                                            ? 'form-step__active'
                                            // form-step__complete
                                            : 'form-step__inactive'
                            }`}>
                            <span className={`form-step--label
                                ${data.active == true
                                    ? 'form-step--label__complete'
                                    : 'form-step--label__inactive'
                                }
                            `}>
                                {data.name}</span>
                            
                        </div>
                        
                        {index !== dataLength && 
                            <div style={{ width: `${(100/dataLength)}%` }}
                                 className={`form-steps--bar
                                 ${data.active == true
                                            ? 'form-steps--bar__complete'
                                            : ''
                                    }
                                 `}></div>
                        }
                        
                    </>
                ))}
                
            </div>
        </>
    );
}
