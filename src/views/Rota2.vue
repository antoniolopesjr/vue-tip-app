<!-- eslint-disable max-len -->
<template>
  <v-app>
    <v-app-bar flat>
      <v-container class="fill-height d-flex align-center">
        <v-avatar>
          <BaseAppIcon />
        </v-avatar>
        <v-btn variant="text" @click="$router.push({name: 'home'})"> Vue Le/Tip App </v-btn>
        <v-btn variant="text" @click="$router.push({ name: 'rota2' })"> Rota 2 </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-lighten-3">
      <v-container>
        <v-row>
          <v-col>
            <v-dialog width="500">
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props" text="Open Dialog">Open Dialog</v-btn>
              </template>

              <template v-slot:default="{ isActive }">
                <v-card title="Dialog">
                  <v-card-text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text="Close Dialog" @click="isActive.value = false"></v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-col>
          <v-col>
            <v-row justify="space-around">
                <v-col cols="auto">
                  <v-dialog transition="dialog-bottom-transition" width="auto">
                    <template v-slot:activator="{ props }">
                      <v-btn color="primary" v-bind="props">From the bottom</v-btn>
                    </template>
                    <template v-slot:default="{ isActive }">
                      <v-card>
                        <v-toolbar color="primary" title="Opening from the bottom"></v-toolbar>
                        <v-card-text>
                          <div class="text-h2 pa-12">Hello world!</div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                          <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>

                <v-col cols="auto">
                  <v-dialog transition="dialog-top-transition" width="auto">
                    <template v-slot:activator="{ props }">
                      <v-btn color="primary" v-bind="props">From the top</v-btn>
                    </template>
                    <template v-slot:default="{ isActive }">
                      <v-card>
                        <v-toolbar color="primary" title="Opening from the top"></v-toolbar>
                        <v-card-text>
                          <div class="text-h2 pa-12">Hello world!</div>
                        </v-card-text>
                        <v-card-actions class="justify-end">
                          <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                        </v-card-actions>
                      </v-card>
                    </template>
                  </v-dialog>
                </v-col>
            </v-row>
          </v-col>
          <v-col>
            <v-card>
              <v-layout>
                <v-navigation-drawer
                  expand-on-hover
                  rail
                >
                  <v-list>
                    <v-list-item
                      prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
                      title="Sandra Adams"
                      subtitle="sandra_a88@gmailcom"
                    ></v-list-item>
                  </v-list>

                  <v-divider></v-divider>

                  <v-list density="compact" nav>
                    <v-list-item prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
                    <v-list-item prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
                    <v-list-item prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
                  </v-list>
                </v-navigation-drawer>

                <v-main style="height: 250px"></v-main>
              </v-layout>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import BaseAppIcon from '@/components/BaseAppIcon/BaseAppIcon.vue';

export default {
  name: 'HomeView',

  components: {
    BaseAppIcon,
  },

  data: () => ({
    euroValue: 0,
    dollarValue: 0,
    loading: true,
    isMobile: false,
  }),
};
</script>
