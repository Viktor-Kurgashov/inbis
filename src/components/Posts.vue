<template>
  <div class="posts">
    <h1 class="posts__header">3 актуальных поста {{ username }}</h1>

    <ul class="posts__list">
      <li v-for="item of posts" :key="item.id" class="posts__item">
        <h2>{{ item.title }}</h2>

        <p>{{ item.body }}</p>
      </li>
    </ul>

    <img class="posts__quotes" src="~@/assets/quotes.svg" alt="quotes">

    <img class="posts__figure" src="~@/assets/figure.svg" alt="">
  </div>
</template>



<script>
export default {
  name: 'Posts',
  props: ['username', 'posts'],
}
</script>



<style>
  .posts__list {
    display: flex;
    flex-direction: column;
    row-gap: 2em;
    margin-top: 2.5em;
  }

  .posts__item > p {
    margin-top: 0.5em;
  }

  .posts__quotes,
  .posts__figure {
    display: none;
  }



  @media screen and (min-width: 961px) {
    .posts {
      position: relative;
    }

    .posts__header,
    .posts__list {
      padding-left: 24%;
    }

    .posts__quotes {
      display: block;
      position: absolute;
      right: 80%;
      top: 0;
    }

    .posts__figure {
      display: block;
      position: absolute;
      right: 92%;
      top: 12em;
    }
  }
</style>