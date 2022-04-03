<template>
  <h1 class="app__header">Наши топ&#8209;блогеры</h1>

  <p class="app__title">Лучшие специалисты в своем деле, средний опыт работы в профессии - 27 лет</p>

  <Slider class="app__slider" :users="users" @toggle="toggleUser" />

  <Posts class="app__posts" :username="selectedUser.name" :posts="selectedUser.posts" />
</template>



<script>
import Slider from './components/Slider.vue'
import Posts from './components/Posts.vue'

export default {
  name: 'App',
  components: { Slider, Posts },

  data() {
    return {
      users: [],
      posts: [],
      selectedUser: {
        name: '',
        posts: []
      },
    }
  },

  methods: {
    toggleUser(id) {
      this.selectedUser.name = this.users.find(item => item.id == id).username;
      this.selectedUser.posts = this.posts.filter(item => item.userId == id).slice(0, 3);
    }
  },

  created() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(res => this.users = res);

    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(res => this.posts = res);
  }
}
</script>



<style>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4em 5% 10em;
}

.app__header,
.app__title {
  text-align: center;
}

.app__title {
  margin: 2em 0;
}

.app__slider,
.app__posts {
  width: 100%;
  max-width: 1200px;
}

.app__posts {
  margin-top: 4em;
}



@media screen and (max-width: 640px) {
  .app__title,
  .app__slider,
  .app__posts {
    max-width: 375px;
  }
}

@media screen and (min-width: 641px) and (max-width: 960px) {
  .app__slider,
  .app__posts {
    max-width: 750px;
  }
}
</style>