<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="light" v-if="true">
    <h1><router-link to="/">T</router-link></h1>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <li class="nav-item">
          <router-link class="nav-link" to="/about">About</router-link>
        </li>
        <!-- <li class="nav-item">
          <router-link class="nav-link" to="/login">Sign In</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/join">Sign Up</router-link>
        </li> -->
        <li class="nav-item">
          <router-link class="nav-link" to="/parent">Parent</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/overlay">Overlay</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/list">List</router-link>
        </li>
        <!-- <b-nav-item href="#" disabled>Disabled</b-nav-item> -->
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <!-- <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form> -->

        <b-nav-item-dropdown text="Lang" right>
          <b-dropdown-item href="#">KR</b-dropdown-item>
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
          <b-dropdown-item href="#">FA</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: "Header"
    , computed: {
      ...mapState(['accessToken'])
    }
}
</script>

<style scoped>
a {
  text-decoration: none;
  color: rgb(3, 3, 3);
}

.nav-link {
  text-decoration: none;
  color: rgb(3, 3, 3) !important;
}

a:hover {
  color: #555;
}
</style>