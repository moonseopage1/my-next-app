"use client";
import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    return (
        <div className="text-center space-y-3">
            <h1 className="text-3xl font-bold">{count}</h1>
            <p>This is Counter</p>
            <div className="flex gap-4 justify-center">
                <button
                    onClick={() => setCount(count + 1)}
                    className="bg-green-600 px-5 py-2 rounded-md"
                >
                    Increment
                </button>
                <button
                    onClick={() => setCount(count - 1)}
                    className="bg-red-600 px-5 py-2 rounded-md"
                >
                    Decrement
                </button>
            </div>
        </div>
    );
};

export default Counter;