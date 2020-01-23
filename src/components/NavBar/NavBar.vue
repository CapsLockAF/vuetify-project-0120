<template>
    <div>
        <v-navigation-drawer 
            app 
            temporary
            v-model="sideNav"
        >
            <v-list>
                <v-list-item 
                    v-for="(link, i) in links" 
                    :key="i"
                    :to="link.url"
                >

                <v-list-item-icon>
                    <v-icon v-text="link.icon"></v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title v-text="link.title"></v-list-item-title>
                </v-list-item-content>

                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar 
            app 
            dense 
            dark 
            color="deep-purple accent-4"
           
        > 
            <v-app-bar-nav-icon
                class="hidden-md-and-up"
                @click="sideNav = !sideNav"
            >
            </v-app-bar-nav-icon>

            <v-toolbar-title>Online Store</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn 
            v-for="(link, i) in links" 
            :key="i" 
            color="transparent" 
            :to="link.url" 
            class="ma-1 hidden-sm-and-down">
                <v-icon left v-text="link.icon"></v-icon>
                {{ link.title }}
            </v-btn>

        </v-app-bar>

        <v-content>

            <router-view></router-view>
        
        </v-content>

        <v-footer app>
        <!-- -->
        </v-footer>
    </div>
</template>

<script>
export default {

    data () {
        return {
            sideNav: false,
            links: [
                {title: 'Login', icon: 'mdi-account-box', url: '/login'},
                {title: 'Registration', icon: 'mdi-face', url: '/register'},
                {title: 'Cart', icon: 'mdi-cart', url: '/checkout'},
                {title: 'New Product', icon: 'mdi-plus', url: '/new'},
                {title: 'My Products', icon: 'mdi-book', url: '/list'}
            ]
        }
    }
    
}
</script>