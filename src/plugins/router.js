import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/Home'
import Product from '../components/Products/Product'
import NewProduct from '../components/Products/NewProduct'
import ProductList from '../components/Products/ProductList'
import Checkout from '../components/User/Checkout'
import Login from '../components/Auth/Login'
import Register from '../components/Auth/Register'


Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '',
            name: 'home',
            component: Home
        },
        {
            path: '/product/:id',
            name: 'product',
            component: Product
        },
        {
            path: '/list',
            name: 'list',
            component: ProductList
        },
        {
            path: '/new',
            name: 'new',
            component: NewProduct
        },
        {
            path: '/checkout',
            name: 'checkout',
            component: Checkout
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/register',
            name: 'register',
            component: Register
        },
        
    ],
    
    mode: 'history'
})