import React from 'react';

function Options(props) {
    let { question } = props
    switch (question.type) {
        case "MC1":
            return (
                <div className="Option">
                    {
                        question.options.map(option => (
                            <div key={100 + option.id} className="Option">
                                {
                                    question.new ?
                                        <input
                                            type="text"
                                            value={option.label}
                                            onChange={e => props.handleOptionChange(option.id, 'label', e.target.value)}
                                        />
                                        :
                                        <h6 className="option-label">{option.label}</h6>
                                }
                                <input
                                    type="radio"
                                    value={question.response === option}
                                    onChange={e => console.log(props.handleOptionChange)}
                                />
                            </div>
                        ))
                    }
                </div>
            )
        case "MCM":
            return (
                <div className="Option">
                    {
                        question.options.map(option => (
                            <div key={100 + option.id} className="Option">
                                {
                                    question.new ?
                                        <input
                                            type="text"
                                            value={option.label}
                                            onChange={e => props.handleOptionChange(option.id, 'label', e.target.value)}
                                        />
                                        :
                                        <h6 className="option-label">{option.label}</h6>
                                }
                                <input
                                    type="checkbox"
                                    value={option.response.includes(option)}
                                    onChange={e => props.handleOptionChange(option.id, 'label', e.target.value)}
                                />
                            </div>
                        ))
                    }
                </div>
            )
        case "RS":
            return (
                <div className="Option">
                    {/* 
                        create five stars here
                        allow stars to be filled
                        maybe add input to input a specific value
                    */}
                </div>
            )
        case "RB":
            return (
                <div className="Option">
                    <input
                        type="range"
                        min={question.min}
                        max={question.max}
                        step={question.step}
                        value={question.response}
                        onChange={() => { }}
                    />
                </div>
            )
        // case "OC":
        //     return (
        //         <div className="Option">
        //             {
        //                 question.options.sort({/*sort by option order*/ }).map(option => (
        //                     <div className="OC-Option">
        //                         {option.label}
        //                     </div>
        //                 ))
        //             }
        //         </div>
        //     )
        case "TXT":
            return (
                <div className="Option">
                    <input
                        type="text"
                        value={question.response}
                        maxLength={question.maxLength}
                    />
                </div>
            )
        case "FR":
            return (
                <div className="Option">
                    <textarea
                        value={question.response}
                    />
                </div>
            )
        case "SEL":
            return (
                <div className="Option">
                    <select>
                        {
                            question.options.map(option => (
                                <option key={100 + option.id} ></option>
                            ))
                        }
                    </select>
                </div>
            )
        // case "EM":  // Add HTML5 features after MVP
        //     return (
        //         <div className="Option">
        //             <input type="email" />
        //         </div>
        //     )
        default:
            return (
                <div className="Option">

                </div>
            )
    }
}

export default Options
