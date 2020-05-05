import React from 'react';

const styles = {
    logo: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '0 auto'
    }
}

export default function Header() {
    return (
        <nav style={styles.logo}  className="navbar navbar-dark bg-primary">
            <a className="navbar-brand" style={styles.logo} href="#">TodoApp</a>
        </nav>
    )
}