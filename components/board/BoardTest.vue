<template>
  <v-container fluid>
    <v-icon>fas fa-edit</v-icon>

    <v-text-field
      v-model="itemText"
      type="text"
      label="Add Item Title"
      hide-details="auto"
      @keyup.enter="addItem"
    ></v-text-field>
    <br />
    <v-data-iterator
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :search="search"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
      hide-default-footer
    >
      <template v-slot:header>
        <v-toolbar dark color="blue darken-3" class="mb-1">
          <v-text-field
            v-model="search"
            clearable
            flat
            solo-inverted
            hide-details
            label="Search"
          ></v-text-field>
          <template v-if="$vuetify.breakpoint.mdAndUp">
            <v-spacer></v-spacer>
            <v-select
              v-model="sortBy"
              flat
              solo-inverted
              hide-details
              :items="keys"
              label="Sort by"
            ></v-select>
            <v-spacer></v-spacer>
            <v-btn-toggle v-model="sortDesc" mandatory>
              <v-btn large depressed color="blue" :value="false">
                <v-icon>mdi-arrow-up</v-icon>
              </v-btn>
              <v-btn large depressed color="blue" :value="true">
                <v-icon>mdi-arrow-down</v-icon>
              </v-btn>
            </v-btn-toggle>
          </template>
        </v-toolbar>
      </template>

      <BoardItem />
      <template v-slot:default="props">
        <v-row>
          <v-col
            v-for="item in props.items"
            :key="item.id"
            cols="12"
            sm="6"
            md="4"
            lg="3"
          >
            <v-card height="100%">
              <v-card-title class="subheading font-weight-bold"
                >board number : {{ item.id }}
                <!--delete 추가하기!-->
                <v-card-actions class="align-end">
                  <div>
                    <v-btn @click="deleteCard">Delete</v-btn>
                  </div>
                </v-card-actions>
              </v-card-title>

              <v-divider></v-divider>

              <v-list dense>
                <v-list-item v-for="(key, index) in filteredKeys" :key="index">
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }"
                    >{{ key }}:</v-list-item-content
                  >
                  <v-list-item-content
                    :class="{ 'blue--text': sortBy === key }"
                    >{{ item[key] }}</v-list-item-content
                  >
                </v-list-item>
              </v-list>
            </v-card>
          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Items per page</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-bind="attrs"
                v-on="on"
              >
                {{ itemsPerPage }}
                <v-icon>mdi-chevron-down</v-icon>
              </v-btn>
            </template>
            <v-list>
              <v-list-item
                v-for="(number, index) in itemsPerPageArray"
                :key="index"
                @click="updateItemsPerPage(number)"
              >
                <v-list-item-title>{{ number }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>

          <v-spacer></v-spacer>

          <span class="mr-4 grey--text"
            >Page {{ page }} of {{ numberOfPages }}</span
          >
          <v-btn
            fab
            dark
            color="blue darken-3"
            class="mr-1"
            @click="formerPage"
          >
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
          <v-btn fab dark color="blue darken-3" class="ml-1" @click="nextPage">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </v-row>
      </template>
    </v-data-iterator>
  </v-container>
</template>
<script>
import axios from 'axios'

export default {
  components: {
    BoardItem: () => import('@/components/board/boardItem'),
  },
  data() {
    return {
      itemsPerPageArray: [10, 15, 30],
      search: '',
      filter: {},
      sortDesc: false,
      page: 1,
      itemsPerPage: 10,
      sortBy: 'id',
      keys: ['userId', 'id', 'title'],
      items: [],
      itemText: '',
    }
  },
  computed: {
    numberOfPages() {
      return Math.ceil(this.items.length / this.itemsPerPage)
    },
    filteredKeys() {
      return this.keys.filter((key) => key !== `Name`)
    },
  },
  created() {
    axios
      .get('https://jsonplaceholder.typicode.com/albums')
      .then((res) => {
        this.items = res.data
        // console.log(res.data[0].id)
      })
      .catch((err) => {
        console.log(err)
      })
  },
  methods: {
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number
    },
    async deleteCard() {
      // this.itmes.splice(this.itmes.id, 1)
      try {
        return await axios
          .delete(
            'https://jsonplaceholder.typicode.com/albums?id=' + this.items
          )
          .then((res) => {
            console.log(this.items)
          })
      } catch (err) {
        console.log(err)
      }
    },

    addItem(e) {
      axios
        .post('https://jsonplaceholder.typicode.com/albums', {
          userId: this.items.userId + 1,
          id: this.items.length + 1,
          title: e.target.value,
        })
        .then((res) => {
          this.items.push(res.data)
          console.log(res.data)
        })
      this.todoText = ''
    },
  },
}
</script>
