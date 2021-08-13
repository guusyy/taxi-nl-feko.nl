<template>
  <header class="header" id="nav">
    <b-navbar class="header-holder" toggleable="md" :class="{sticky:active}" type="light">
      <div class="nav-holder container">
        <g-link class="logo-home" to="/"><img class="logo-image" alt="logo" src="../assets/images/logo.png"></g-link>
        <g-link to="https://www.facebook.com/TAXI-NL-694443370997897/">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="white" class="bi bi-facebook" viewBox="0 0 16 16">
            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
          </svg>
        </g-link>
      </div>
    </b-navbar>
  </header>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      active: false
    }
  },
  methods: {
    toggleNavClass(){
      if(this.active == false){
        return 'nav'
      } else {
        return 'sticky-nav'
      }
    }
  },
  mounted(){
  window.document.onscroll = () => {
      let navBar = document.getElementById('nav');
      if(window.scrollY > navBar.offsetTop){
        this.active = true;
        } else {
        this.active = false;
      }
    }
  }
}
</script>

<style lang="scss">
nav {
  width: 100%;
  padding: 1rem 0;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 11rem;

  & .header-holder{
    background: var(--taxi-black);
    transition: All 0.2s ease;
    -webkit-transition: All 0.2s ease;
    -moz-transition: All 0.2s ease;
    -o-transition: All 0.2s ease;
    padding-left: 3rem;
    padding-right: 3rem;

    &.sticky {
      position: fixed;
      top: 0;
      z-index: 1000;
      background: white;
      box-shadow: 0px -2px 20px rgba(0,0,0,0.25);

      & .logo-home img {
        height: 8rem;
      }

      & svg {
        fill: var(--taxi-yellow);
      }
    }
  }
}

.nav-holder {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.logo-home {
  font-size: 24px;
  max-width: 75%;
  font-weight: bold;
  &:hover {
    text-decoration: none;
  }

  & img {
    height: 10rem;
    width: auto;
    transition: All 0.2s ease;
    -webkit-transition: All 0.2s ease;
    -moz-transition: All 0.2s ease;
    -o-transition: All 0.2s ease;
  }
}

.logo-desktop {
  @media(max-width: 419px) {
    display: none;
  }
  @media (min-width: 420px) {
    display: default;
  }
}

.logo–mobile {
  @media(max-width: 419px) {
    display: default;
  }
  @media (min-width: 420px) {
    display: none;
  }
}

.logo-image {
  width: 40px;
}

.nav--link {
  margin-left: 20px;
  @media (max-width: 419px) {
    margin: 0;
    padding: 15px 10px 10px 0;
  }
}

.active--exact {
  font-weight: bold;
}
</style>
