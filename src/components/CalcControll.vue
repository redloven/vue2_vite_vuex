<template>
  <div class="controll">
    <input v-model.trim="name" class="c-field c-field-name" :class="{ 'c-field--error': $v.name.$error }" placeholder="Product name">
    <input v-model="price" class="c-field c-field-price" :class="{ 'c-field--error': $v.price.$error }" placeholder="Price" type="number">
    <input v-model="qty" class="c-field c-field-qty" :class="{ 'c-field--error': $v.qty.$error }" placeholder="Qty" type="number">
    <button @click="add">Add</button>
  </div>
</template>

<script>
import { required, minLength, maxLength, between } from 'vuelidate/lib/validators'

export default {
  name: "CalcControll",

  data () {
    return {
      name: '',
      price: 0,
      qty: 0,
    }
  },

  methods: {
    add () {
      this.$v.$touch()
      if (!this.$v.$invalid) {

        this.$store.commit('addItem', {
          name: this.name,
          price: this.price,
          qty: this.qty
        })
      
      } else {
        console.error(this.$v.name.$error, this.$v.price.$error, this.$v.qty.$error)
      }
    }
  },

  validations: {
    name: {
      required,
      minLength: minLength(4),
      maxLength: maxLength(40),
    },
    price: {
      required,
      between: between(1, 10000)
    },
    qty: {
      required,
      between: between(1, 1000)
    }
  }

};
</script>

<style scoped lang="scss">
  .controll {
    text-align: left;
    margin-bottom: 1rem;
    button {
      margin: 0;
      float: right;
      padding: .5em;
    }
    
    .c-field {
      margin-right: 1rem;
      padding: .5em;
      &--error {
        border-color: red;
        color: red;
      }
      &-name {
        width: 175px;
      }
      &-price,
      &-qty {
        width: 100px;
      }
    }
  }
</style>