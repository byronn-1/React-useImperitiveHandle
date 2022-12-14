import { forwardRef, useImperativeHandle, useState } from "react";

export default forwardRef(function Counter(props, ref) {
    const [count, setCount] = useState(0);
    
    useImperativeHandle(ref, () => {
        return {
            reset: () => setCount(0)
        };
    });

    return (
        <>
            <button onClick={() => setCount(count + 1)}></button>
            <p>Count: {count}</p>
        </>
    );
});