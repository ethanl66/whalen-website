<template>
  <section>
    <h1>Articles</h1>

    <div class="blog-post">
      <BlogPreview
        class="preview"
        v-for="post in posts"
        :key="post.id"
        v-bind:post="post"
      ></BlogPreview>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: 'Articles',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Articles written to assist Staten Island Technical HS Students ',
        },
      ],
    }
  },

  methods: {},
  async asyncData({ $prismic, error }) {
    try {
      // Query to get blog home content
      //const homepageContent = (await $prismic.api.getSingle("blog_home")).data;

      // Query to get posts content to preview
      let blogPosts = await $prismic.api.query(
        $prismic.predicates.at('document.type', 'post'),
        { orderings: '[my.post.date desc]' }
      )

      return {
        posts: blogPosts.results,
      }
    } catch (e) {
      // Returns error page
      console.log(e)
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>

<style lang="scss">
.blog-post {
  display: grid;
  list-style: none;
  padding: 1rem;
  margin: 0 auto;
  grid-row-gap: 1rem;
  width: 80vw;
  grid-template-columns: repeat(2, 1fr);
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

.page-enter-active,
.page-leave-active {
  transition-property: opacity;

  transition-timing-function: ease-in-out;
  transition: all 300ms;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform-origin: 50% 50%;
}
div {
  text-align: center;
}
h2 {
  margin: 3rem auto;
}

.preview {
  display: inline-block;
}
</style>
