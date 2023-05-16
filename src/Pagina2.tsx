import React, { useState } from 'react';

interface MyInfo {
    name: string;
    age: number;
    id: string;
}

export function Pagina2() {
    const [myInfo, setMyInfo] = useState<MyInfo>({
        name: 'Gusanu Ovidiu',
        age: 20,
        id: 'CR-211',
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setMyInfo({
            ...myInfo,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div className="container">
            <h1>Informații student</h1>
            <form className="main">
                <div className="input_cont">
                    <label htmlFor="name">Nume:</label>
                    <input className="input"
                        type="text"
                        id="name"
                        name="name"
                        value={myInfo.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input_cont">
                    <label htmlFor="age">Vârsta:</label>
                    <input className="input"
                        type="number"
                        id="age"
                        name="age"
                        value={myInfo.age}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="input_cont">
                    <label htmlFor="id">ID:</label>
                    <input className="input"
                        type="text"
                        id="id"
                        name="id"
                        value={myInfo.id}
                        onChange={handleInputChange}
                    />
                </div>
            </form>
        </div>
    );
}


