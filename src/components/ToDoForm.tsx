import React, { useRef } from "react";

export const ToDoForm: React.FC = () => {
    // const [title, setTitle] = useState<string>('');
    const ref = useRef<HTMLInputElement>(null);

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value);
    // }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            console.log(ref.current!.value);
            ref.current!.value = '';
            // console.log(title);
            // setTitle('');
        }
    }

    return (
        <div className="input-field mt2">
            <input
                //onChange={changeHandler}
                //value={title}
                ref={ref}
                type="text"
                id="title"
                placeholder="Enter name of task"
                onKeyPress={keyPressHandler}
            />

            <label htmlFor="title" className="active">Enter name of task</label>
        </div>
    )
}