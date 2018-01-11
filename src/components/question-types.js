import React from 'react';
import Radio, { Checkbox, Option } from './option-types';

const MC1 = props => (
    <div className="options-wrapper">
        options
        {
            props.question.options.map(Radio)
        }
    </div>
)

export default MC1

export const MCM = props => (
    <div className="options-wrapper">
        options
        {
            props.question.options.map(Checkbox)
        }
    </div>
)

export const OC = props => (
    <div className="options-wrapper">
        options
    </div>
)

export const SEL = props => (
    <div className="options-wrapper">
        options
        <select>
            {
                props.question.options.map(Option)
            }
        </select>
    </div>
)

export const RS = props => (
    <div className="options-wrapper">
        options
    </div>
)

export const RB = props => (
    <div className="options-wrapper">
        options
    </div>
)

export const TXT = props => (
    <div className="options-wrapper">
        options
    </div>
)

export const FR = props => (
    <div className="options-wrapper">
        options
    </div>
)
