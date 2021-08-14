<template>
  <Layout>
    <b-container>
      <b-row>
        <div class="d-flex image-container">
          <img class="" src="../assets/images/404.svg" />
        </div>
      </b-row>
    </b-container>
  </Layout>
</template>

<style scoped lang="scss">
img {
  width: 80%;
  margin: auto;

  @media (max-width: 500px) {
    width: 90%;
  }
  @media (max-width: 400px) {
    width: 100%;
  }
}

.image-container {
  min-height: 80vh;
}
</style>
