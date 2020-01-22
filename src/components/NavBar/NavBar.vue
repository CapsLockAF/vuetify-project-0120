<template>
    <div>
        <v-navigation-drawer app temporary>
      <!-- -->
        </v-navigation-drawer>

        <v-app-bar 
            app 
            dense 
            dark 
            color="deep-purple accent-4"
        > 
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <v-toolbar-title>Page title</v-toolbar-title>

            <v-spacer></v-spacer>

            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
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
    
}
</script>