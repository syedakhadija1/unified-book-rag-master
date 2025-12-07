import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ChatWidget: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput] = useState('');

    const messagesEndRef = useRef<HTMLDivElement>(null);
    const location = useLocation();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = async () => {
        if (input.trim() === '') return;

        const userMessage = { role: 'user', content: input };
        const allMessages = [...messages, userMessage];
        setMessages(allMessages);
        setInput('');
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8000/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ messages: allMessages }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setMessages((prevMessages) => [
                ...prevMessages,
                { role: 'assistant', content: data.text },
            ]);
        } catch (error) {
            console.error('Error sending message:', error);
            setMessages((prevMessages) => [
                ...prevMessages,
                { role: 'assistant', content: 'Error: Could not connect to the chat service.' },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter' && !isLoading) {
            sendMessage();
        }
    };


    return (
        <>
            {isOpen && (
                <div style={{
                    position: 'fixed',
                    bottom: '100px',
                    right: '20px',
                    width: '350px',
                    height: '500px',
                    backgroundColor: '#ffffff', // Light background (White)
                    color: '#333333', // Dark text
                    borderRadius: '10px',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)', // Softer shadow
                    display: 'flex',
                    flexDirection: 'column',
                    zIndex: 9998,
                    overflow: 'hidden',
                    fontFamily: 'Arial, sans-serif'
                }}>
                    <div style={{
                        padding: '15px',
                        backgroundColor: '#e9ecef', // Light Gray Header
                        borderBottom: '1px solid #ced4da', // Light border
                        borderTopLeftRadius: '10px',
                        borderTopRightRadius: '10px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <h3 style={{ margin: 0, fontSize: '1.1em', color: '#333333' }}>Chat Support</h3>
                        <button
                            onClick={() => setIsOpen(false)}
                            style={{
                                background: 'none',
                                border: 'none',
                                color: '#333333',
                                fontSize: '1.5em',
                                cursor: 'pointer',
                                padding: '0 5px'
                            }}
                        >
                            &times;
                        </button>
                    </div>
                    <div style={{ flexGrow: 1, padding: '15px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '10px', backgroundColor: '#f9f9f9' }}> {/* Message area background */}
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                style={{
                                    alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                    /* 🟢 User message is Green */
                                    backgroundColor: msg.role === 'user' ? '#28a745' : '#e9ecef',
                                    /* 🟢 Assistant text is dark */
                                    color: msg.role === 'user' ? 'white' : '#333333',
                                    padding: '8px 12px',
                                    borderRadius: '15px',
                                    maxWidth: '80%',
                                    wordBreak: 'break-word',
                                    fontSize: '0.9em'
                                }}
                            >
                                {msg.content}
                            </div>
                        ))}
                        {isLoading && (
                            <div style={{ alignSelf: 'flex-start', padding: '8px 12px', borderRadius: '15px', backgroundColor: '#e9ecef', color: '#333333', fontSize: '0.9em' }}>
                                ...
                            </div>
                        )}
                        <div ref={messagesEndRef} />
                    </div>
                    <div style={{ padding: '15px', borderTop: '1px solid #ced4da', display: 'flex', alignItems: 'center', backgroundColor: '#e9ecef', borderBottomLeftRadius: '10px', borderBottomRightRadius: '10px' }}>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Ask me anything..."
                            style={{
                                flexGrow: 1,
                                padding: '10px',
                                borderRadius: '5px',
                                border: '1px solid #ced4da',
                                backgroundColor: 'white',
                                color: '#333333',
                                marginRight: '10px',
                                fontSize: '0.9em'
                            }}
                            disabled={isLoading}
                        />
                        <button
                            onClick={sendMessage}
                            style={{
                                /* 🟢 Send Button is Green */
                                backgroundColor: '#28a745',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                padding: '10px 15px',
                                cursor: 'pointer',
                                fontSize: '0.9em',
                                fontWeight: 'bold'
                            }}
                            disabled={isLoading}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    position: 'fixed',
                    bottom: '20px',
                    right: '20px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    /* 🟢 Floating Button is Green */
                    backgroundColor: '#28a745',
                    color: 'white',
                    fontSize: '2em',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
                    border: 'none',
                    zIndex: 9999
                }}
            >
                💬
            </button>
        </>
    );
};

export default ChatWidget;