import React, {useState} from "react";

export default function DocumentationPage() {
    let [name, setName] = useState('Dwi');
    let [count, setCount] = useState(0);
    let [username, setUsername] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    // Event listeners
    function handlerClick(event) {
        event.preventDefault();

        alert(`Hai, ${name}!`);
    }

    // React state (ubah nama)
    function changeNameHandler() {
        let newName = prompt('Masukan nama kamu yang baru!');

        setName(newName);
    }

    // React state (counter app)
    function plusCountHandler() {
        setCount(count + 1);
    }

    // React forms
    function minusCountHandler() {
        setCount(count - 1);
    }

    function updateUsername(event) {
        setUsername(event.target.value);
    }

    function updatePassword(event) {
        setPassword(event.target.value);
    }

    function updateEmail(event) {
        setEmail(event.target.value);
    }

    function formHandler(event) {
        event.preventDefault();

        alert(`
            Username : ${username}
            Email: ${email}
            Password: ${password}
        `);
    }

    // React map
    let elements = [
        {
            name: 'one',
            value: 1,
        },
        {
            name: 'two',
            value: 2,
        },
        {
            name: 'three',
            value: 3,
        }
    ]

    return (
        <div>
            <section>
                <a href="/" onClick={handlerClick}>Say Hai!</a>
            </section>

            <hr />

            <section className="ubah-nama">
                <h1>
                    {name}
                </h1>
                <button onClick={changeNameHandler}>
                    ubah nama
                </button>
            </section>
            
            <hr />

            <section className="count">
                <button className="count-button" onClick={plusCountHandler}>+</button>
                <span>{count}</span>
                <button className="count-button" onClick={minusCountHandler}>-</button>
            </section>

            <hr />

            <section className="form">
                <form onSubmit={formHandler}>
                    <input type="text" placeholder="Username" onChange={updateUsername} />
                    <input type="email" placeholder="Email" onChange={updateEmail} />
                    <input type="password" placeholder="Password" onChange={updatePassword} />
                    <input type="submit" value="Login" />
                </form>
            </section>

            <hr />

            <section className="map">
                {/* <ul>
                    {elements.map((element, index) => {
                        return <li key={index}>{element.name} | {element.value}</li>
                    })}
                </ul> */}
                <ul>
                    {elements.map((element, index) => (
                        <li key={index}>{element.name} | {element.value}</li>
                    ))}
                </ul>
            </section>
        </div>
    );
}