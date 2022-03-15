<template>
  <div class="calculator">
    <h1>{{ title }}</h1>

    <div class="table">
      <CalcControll />
      <div>
        <header class="row">
          <label><input type="checkbox" v-on:change="e=>onSelectItems(e.target.checked)" /></label>
          <div>Product name</div>
          <div>Price</div>
          <div>Qta</div>
          <div>Sum</div>
        </header>

        <div class="row" v-for="item in list" v-bind:key="item.id">
          <label><input type="checkbox" v-model="item.checked" /></label>
          <div>{{ item.name }}</div>
          <div>$ {{ item.price }}</div>
          <div>$ {{ item.qty }}</div>
          <div>$ {{ item.price * item.qty }}</div>
        </div>
      </div>

      <footer>
        <button type="button" @click="$store.dispatch('DELETE')">Delete</button>
        <span>Total: ${{ Total }}</span>
      </footer>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TheCalculator",
    props: {
      title: {
        type: String,
      },
    },
    data() {
      return {
        count: 0
      };
    },
    watch: {
      list: {
        handler(){
          localStorage.setItem('store', JSON.stringify(this.$store.state));
        },
        deep: true
      }
    },
    computed: {
      list () {
        return this.$store.state.list
      },
      Total () {
        let summ = 0;

        this.list.forEach(item => {
          summ += item.price * item.qty
        })

        return summ;
      }
    },
    methods: {
      onSelectItems (value) {
        this.$store.commit('onSelectItems',value)
      }
    },
    components: {
      CalcControll: () => import("./CalcControll.vue"),
    },
  };
</script>

<style scoped lang="scss">
a {
  color: #42b983;
}

button {
  cursor: pointer;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

footer {
  display: flex;
  justify-content: space-between;
}

.table {
  display: inline-block;
}

.row {
  text-align: left;
  display: flex;

  * {
    padding: 0.85rem 0.15em;
    border: 1px solid #aaa;
    border-right: none;
    border-bottom: none;
    margin: 0;
  }

  :nth-child(1) {
    width: 80px;
  }
  :nth-child(2) {
    width: 150px;
  }
  :nth-child(3) {
    width: 100px;
  }
  :nth-child(4) {
    width: 80px;
  }
  :nth-child(5) {
    width: 100px;
    border-right: 1px solid #aaa;
  }

  &:last-child {
    margin-bottom: 1rem;
    border-bottom: 1px solid #aaa;
  }
}
</style>
