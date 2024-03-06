import {useId} from "react";

/**
 * Input Component
 * @param {string} value
 * @param {string} onChange
 * @param  {string} placeholder
 * @returns {JSX.Element}
 * @constructor
 */
export function Input({ value, onChange, placeholder }) {

    const uniqueId = useId();

    return (
        <>
            <input
                type="text"
                className="form-control "
                value={value} id={uniqueId}
                onChange={e => onChange(e.target.value)}
                placeholder={placeholder}
            />
            </>
    )

}

