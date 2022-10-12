import React, {useState} from 'react';
import './App.css';
// @ts-ignore
import styles from "./styles/App.module.scss"

function App() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isOpen, setIsOpen] = useState(true);
    return (
        <div>
            <div className={styles.parent}>
                <h3 className={styles.header3}>Привет, я React-разработчик!</h3>
                <div className="">
                    <input
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="e-mail" type="text"/>
                    <input
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="password"/>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={styles.button}>Log in
                    </button>
                </div>
                {isOpen && <button className="animate-fade">TEST</button>}

            </div>
        </div>
    );
}

export default App;
