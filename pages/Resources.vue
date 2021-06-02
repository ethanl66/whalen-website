<template>
  <section class="section">
    <div>
      <h2 class="resource-heading">Development Resources</h2>
      <div class="resource-grid">
        <ResourcesDevSlice
          v-for="resource in DevResources"
          :key="resource.id"
          v-bind:resource="resource"
        ></ResourcesDevSlice>
      </div>
      <h2 class="resource-heading">CSS Resources</h2>
      <div class="resource-grid">
        <ResourcesCSSSlice
          v-for="resource in CSSResources"
          :key="resource.id"
          v-bind:resource="resource"
        ></ResourcesCSSSlice>
      </div>
      <h2 class="resource-heading">JavaScript Resources</h2>
      <div class="resource-grid">
        <ResourcesJSSlice
          v-for="resource in JSResources"
          :key="resource.id"
          v-bind:resource="resource"
        ></ResourcesJSSlice>
      </div>
      <h2 class="resource-heading">Design Resources</h2>
      <div class="resource-grid">
        <ResourcesDesignSlice
          v-for="resource in DesignResources"
          :key="resource.id"
          v-bind:resource="resource"
        ></ResourcesDesignSlice>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Resources',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Resources for Full Stack Development',
        },
      ],
    }
  },

  data() {
    CSSResources: []
    JSResources: []
    DevResources: []
    DesignResources: []
  },

  async asyncData({ $prismic, error }) {
    try {
      let resources = await $prismic.api.query(
        [$prismic.predicates.at('document.type', 'resource')],
        { pageSize: 100 }
      )
      //console.log(resources.results);
      /* console.log(
        resources.results.filter(function(e) {
          return e.tags[0] === "css";
        })
      ); */

      return {
        resources: resources.results,

        JSResources: resources.results.filter(function (e) {
          return e.tags[0] === 'js'
        }),
        DevResources: resources.results.filter(function (e) {
          return e.tags[0] === 'Development'
        }),
        DesignResources: resources.results.filter(function (e) {
          return e.tags[0] === 'design'
        }),
        CSSResources: resources.results.filter(function (e) {
          return e.tags[0] === 'css'
        }),
      }
    } catch (e) {
      // Returns error page
      console.log(e)
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style lang="scss" scoped>
.test {
  font-size: 3rem;
}
.resource-heading {
  margin: 5rem auto 3rem auto;
}
.resource-grid {
  display: grid;
  list-style: none;
  padding: 1rem;
  margin: 0 auto;
  grid-row-gap: 1rem;
  width: 80vw;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 5vw;
  @media screen and (max-width: 1280px) {
    width: 90vw;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    width: 90vw;
  }
  @media screen and (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
