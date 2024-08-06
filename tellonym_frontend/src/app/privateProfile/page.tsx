import React, { useEffect, useState } from 'react';
import './index.css';

interface Tell {
    id: number;
    text: string;
}

const Inbox: React.FC = () => {
    const [tells, setTells] = useState<Tell[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        // Simulate fetching data from an API
        const fetchTells = async () => {
            setLoading(true);
            // Replace this with actual API call
            const response = await new Promise<Tell[]>(resolve =>
                setTimeout(() => resolve([
                    { id: 1, text: 'This is the first tell' },
                    { id: 2, text: 'This is the second tell' },
                    { id: 3, text: 'This is the third tell' }
                ]), 1000)
            );
            setTells(response);
            setLoading(false);
        };

        fetchTells();
    }, []);

    return (
        <div className="inbox-container">
            <div className="header">Unanswered Tells</div>
            {loading ? (
                <div className="loading">Loading...</div>
            ) : tells.length === 0 ? (
                <div className="no-tells">No unanswered tells</div>
            ) : (
                tells.map(tell => (
                    <div key={tell.id} className="tell">
                        <p className="tell-text">{tell.text}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Inbox;
