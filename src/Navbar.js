import React from 'react';

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/2838/2838838.png" alt="cart-icon" />
                <span style={styles.cartCount}>3</span>
            </div>
        </div>
    );
}

const styles = {
    cartIcon: {
        height: 35,
        marginRight: 20
    },
    nav: {
        height: 70,
        background: '#4267b2',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    cartIconContainer: {
        position: 'relative',
        marginRight: 5
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '80%',
        padding: '0px 6px',
        position: 'absolute',
        right: 0,
        top: -10
    }
};


export default Navbar;