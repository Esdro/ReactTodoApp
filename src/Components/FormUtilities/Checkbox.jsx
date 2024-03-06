/**
 *
 * @param {string} label
 * @param {string} checked
 * @param {function} onChange
 * @returns {JSX.Element}
 * @constructor
 */
export function Checkbox({ checked, onChange }) {
    return (
        <>
            <input type='checkbox' checked={checked} onChange={e => onChange(e.target.checked)} />
        </>
    )
}