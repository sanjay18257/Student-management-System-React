import React from 'react';

const Alert = (props) => {
    const capitalize = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <div style={{ height: '60px' }}>
            {props.alert && (
                <div>
                    <div
                        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
                        role="alert"
                    >
                        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Alert;
