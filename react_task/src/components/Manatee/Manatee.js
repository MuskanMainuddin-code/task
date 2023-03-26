import React, {useState} from "react";
const Manatee = () => {
    const [value, setValue] = useState(1);
    return (
        <div>
            <p>{value}</p>
            <button onClick={() => setValue((value + 1))}>Increment Value</button>
        </div>
    );
};

export default Manatee