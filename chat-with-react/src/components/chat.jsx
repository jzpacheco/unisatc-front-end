import React, { useState, useEffect } from 'react';

export default function Chat() {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');

    const handleInputChange = (event) => {
        setNewMessage(event.target.value);
    };

    const handleSendMessage = (event) => {
        event.preventDefault();
        if (newMessage.trim() !== '') {
            setMessages((prevMessages) => [
                ...prevMessages,
                { text: newMessage, sender: 'user' },
                { text: 'Não estamos disponíveis no momento', sender: 'bot' },
            ]);
            setNewMessage('');
        }
    };


    return (
        <div className=" bg-white rounded-lg" id="chat">
            <div className="messages ">
                {messages.map((message, index) => (
                    <div key={index} className={`${message.sender}`}>
                        {message.text}
                    </div>
                ))}
            </div>
            <div>

                <form onSubmit={handleSendMessage} className="mt-auto border-top p-2 ">
                    <div className="input-group mb-3">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Digite sua mensagem..."
                            value={newMessage}
                            onChange={handleInputChange}
                        />
                        <div className="input-group-append ">
                            <button type="submit" className="btn btn-primary">
                                Enviar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}