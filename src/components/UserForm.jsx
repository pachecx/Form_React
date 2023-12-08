import { useState } from "react";

export const UserForm = () => {
    return(
        <div>
            <div className="form-control">
                <label htmlFor="name">Nome:</label>
                <input
                    type="text"
                    name="text"
                    id="name"
                    placeholder="Digite seu nome"
                    required
                />
            </div>
            <div className="form-control">
                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Digite seu Email"
                    required
                />
            </div>
        </div>
    );
};

export default UserForm;