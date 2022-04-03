<template>
  <li class="person">
    <input :id="`p-${id}`"
      class="person__selector"
      type="radio"
      name="username"
      @change="toggleUser" >

    <label :for="`p-${id}`" class="person__content">
      <div class="person__avatar" :style="styleObject"></div>

      <h2 class="person__name">{{ name }}</h2>

      <p class="person__nickname">{{ username }}</p>
    </label>
  </li>
</template>



<script>
export default {
  name: 'Slider',
  props: ['name', 'username', 'id'],

  data() {
    return {
      styleObject: {
        backgroundImage: `url('https://i.pravatar.cc/500?img=${Math.floor(Math.random() * 70) + 1}')`
      }
    }
  },

  methods: {
    toggleUser() {
      this.$emit('toggle', this.id);
    }
  },
}
</script>



<style>
  .person__selector {
    display: block;
    width: 0;
    height: 0;
  }

  .person__selector:checked + .person__content {
    color: #FE8700;
  }

  .person__selector:checked + .person__content > .person__avatar {
    border-color: #FE8700;
  }

  .person__content {
    cursor: pointer;
  }

  .person__avatar {
    border-bottom: 3px solid transparent;
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 100%;
  }

  .person__name {
    margin: 16px 0 4px;
  }
</style>