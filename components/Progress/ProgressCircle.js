import React from 'react';

const ProgressCircle = ({ minute, hasText=true, text='' }) => {
    const degrees = (minute / 90) * 360;
    const radius = 35;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (degrees / 360) * circumference;

    return (
        <div className="circle-container" >
            <svg className="circle-svg" >
                <circle
                    className="circle-background"
                    cx="50%"
                    cy="50%"
                    r={radius}
                />
                <circle
                    className="circle-progress"
                    cx="50%"
                    cy="50%"
                    r={radius}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                />
                <text className={`minute-text ${text}`} x="50%" y="50%">
                    {hasText ? (
                        `${text}`
                    ) :
                        `${minute} '`
                    }
                </text>
            </svg>
        </div>
    );
};

export default ProgressCircle;
