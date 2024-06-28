import { FunctionComponent } from 'react';

/*
    label
    placeholder
    onchangeHandler()
    invalid?
    required?
    password?
    type
*/
interface InputProps {
    label: string;
    id: string;
    placehoder: string;
    type?: 'password' | 'email';
}

/***
 *
 *  Input component
 *  @param type (optional) password, email or text. With text as the default value.
 *
 */
const Input: FunctionComponent<InputProps> = (props) => {
    // use forward ref along with imperative handle to get input value.
    // then put those input values inside a complex state or a reducer? (how about mobx? ✅).
    return (
        <div className="w-full">
            <label
                htmlFor={props.id}
                className="mb-2 block text-md font-medium text-gray-900"
            >
                {props.label}
            </label>
            <input
                type={props.type ?? 'text'}
                id={props.id}
                className="block w-full rounded-lg border border-gray-300 p-2.5 text-sm text-gray-900
                focus:border-blue-500 focus:ring-blue-500 focus:outline-blue-500"
                placeholder={props.placehoder}
                required
            />
        </div>
    );
};

export default Input;
