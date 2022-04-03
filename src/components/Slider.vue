<template>
  <div class="slider">
    <div class="controls">
      <button class="controls__button"></button>
      <button class="controls__button"></button>
    </div>

    <div class="slider__display">
      <ul class="slider__stack">
        <Person v-for="item of users"
          :key="item.id"
          :name="item.name"
          :username="item.username"
          :id="item.id"
          @toggle="toggleUser"
          class="slider__item" />
      </ul>
    </div>
  </div>
</template>



<script>
import Person from './Person.vue'
import Swiper from '../assets/swiper.js'

export default {
  name: 'Slider',
  props: ['users'],
  components: { Person },

  methods: {
    toggleUser(msg) {
      this.$emit('toggle', msg)
    }
  },

  mounted () {
    new Swiper(
      document.getElementsByClassName('slider__display')[0],
      document.getElementsByClassName('controls__button')[0],
      document.getElementsByClassName('controls__button')[1]
    );
  },
}
</script>



<style>
  .controls {
    display: flex;
    justify-content: space-between;
    padding: 0 2%;
  }

  .controls__button {
    background-image: url('~@/assets/left.svg');
    background-size: cover;
    width: 2em;
    height: 2em;
  }

  .controls__button:last-child {
    background-image: url('~@/assets/right.svg');
  }

  .slider__display {
    margin-top: 1.5em;
    overflow-x: hidden;
  }

  .slider__stack {
    width: 1000%;
    display: flex;
  }

  .slider__item {
    width: 10%;
  }

  @media screen and (min-width: 641px) and (max-width: 960px) {
    .slider__stack {
      column-gap: 0.5%;
    }

    .slider__item {
      width: 4.75%;
    }
  }

  @media screen and (min-width: 961px) {
    .slider__stack {
      column-gap: 0.2%;
    }

    .slider__item {
      width: 3.2%;
    }
  }
</style>