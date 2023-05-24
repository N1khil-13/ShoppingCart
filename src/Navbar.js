import React from 'react';

const Navbar = (props) => {
    return (
        <div style={styles.nav}>
            <div style={styles.cartHeader}>Shopping Cart</div>

            <div style={styles.cartIconContainer}>
                <img style={styles.cartIcon} src="https://cdn-icons-png.flaticon.com/128/1170/1170678.png   " alt="cart-icon" />
                <span style={styles.cartCount}>{props.count}</span>
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
        justifyContent: 'space-between',
        alignItems: 'center',
        // width: '100%' ,
        // position: 'fixed'
        // alignContent: 'space-between'
    },
    cartIconContainer: {
        position: 'relative',
        marginRight: 5
    },
    cartCount: {
        background: 'yellow',
        borderRadius: '80%',
        padding: '0px 8px',
        position: 'absolute',
        right: 0,
        top: -10
    },
    cartHeader: {
        fontSize: '40px',
        display: 'flex',
        alignItems: 'left',
        marginLeft: '5px',
        marginBottom: '10px'   
    }       
};


export default Navbar;
