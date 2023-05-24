import React from 'react';
// import CartItem from './CartItem';
import Cart from './Cart';
// eslint-disable-next-line
import Navbar from './Navbar';
// import * as firebase from 'firebase';
import firebase from 'firebase/app';




class App extends React.Component {

  constructor() {
    super();

    // state 

    this.state = {
      products: [],
      loading: true,
      // {
      //   price: 99,
      //   title: 'Watch',
      //   qty: 1,
      //   img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
      //   id: 1
      // },
      // {
      //   price: 999,
      //   title: 'Phone',
      //   qty: 10,
      //   img: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80',
      //   id: 2
      // },
      // {
      //   price: 9999,
      //   title: 'Laptop',
      //   qty: 2,
      //   img: 'https://plus.unsplash.com/premium_photo-1681286768130-b9da2bdc6695?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
      //   id: 3
      // }

    };
    this.db = firebase.firestore();

    // this.increaseQuantity = this.increaseQuantity.bind(this); 
  }

  componentDidMount() {
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .get()
    //   .then((snapshot) => {
    //     // console.log(snapshot);

    //     snapshot.docs.map((doc) => {
    //       console.log(doc.data())
    //     });

    //     const products = snapshot.docs.map((doc) => {
    //       const data = doc.data();

    //       data['id'] = doc.id
    //       return data;
    //     })

    //     this.setState({
    //       products,
    //       loading: false 
    //     })
    //   })

    this.db
      .collection('products')
      .onSnapshot((snapshot) => {
        // console.log(snapshot);

        // snapshot.docs.map((doc) => {
        //   console.log(doc.data());

        // });

        const products = snapshot.docs.map((doc) => {
          const data = doc.data();

          data['id'] = doc.id
          return data;
        })

        this.setState({
          products,
          loading: false
        })
      })
  }

  handleIncreaseQuantity = (product) => {
    console.log('Increase quantity of', product);

    const { products } = this.state;
    const index = products.indexOf(product);

    // products[index].qty += 1;

    // this.setState({
    //   products: products
    // })
    const docRef = this.db.collection('products').doc(products[index].id);

    docRef.update({
      qty: products[index].qty + 1
    })
      .then(() => {
        console.log('Updated successfully')
      })
      .catch((error) => {
        console.log('Error', error);
      })


  }
  handleDecreaseQuantity = (product) => {
    console.log('Decrease quantity of', product);

    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    }

    const docRef = this.db.collection('products').doc(products[index].id);

    docRef.update({
      qty: products[index].qty - 1
    })
      .then(() => {
        console.log('Updated successfully')
      })
      .catch((error) => {
        console.log('Error', error);
      })
  }
  handleDeleteProduct = (id) => {
    // const { products } = this.state;

    // const items = products.filter((item) => item.id !== id); // [ {} ]

    // this.setState({
    //   products: items
    // })
    const docRef = this.db.collection('products').doc(id);

    docRef
    .delete()
    .then(() => {
      console.log('Deleted Sucessfully');
    })
    .catch((error) => {
      console.log('error', error);
    })


  }

  getCartCount = () => {
    const { products } = this.state;

    let count = 0;

    products.forEach((product) => {
      count += product.qty
    })

    return count;
  }

  getCartTotal = () => {

    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
      return cartTotal;
    })

    return cartTotal;
  }

  render() {
    const { products, loading } = this.state;

    return (
      <div className="App" >
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
        {loading && <h1>Loading products..</h1>}
        <div style={{ fontSize: 20, padding: 10 }}> TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}


export default App;
