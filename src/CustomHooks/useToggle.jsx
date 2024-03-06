import {useState} from "react";

/**
 * Custom Hook which toggle a checkbox input
 * @param {boolean} initial
 * @returns {(boolean|(function(): void))[]}
 */
export function useToggle(initial = false) {

    const [state, setState] = useState(initial);
    const toggle = () => setState(prevState => !prevState)

    return [ state, toggle ]
}