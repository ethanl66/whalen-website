<template>
  <section class="section">
    <h2 class="blog-header">{{ $prismic.asText(document.title) }}</h2>

    <p class="blog-post-meta">
      <span class="created-at">{{ formattedDate }}</span>
    </p>
    <slices-block :slices="slices" />
  </section>
</template>

<script>
export default {
  name: 'post',

  head() {
    return {
      title: 'Prismic Nuxt.js Blog',
    }
  },
  async asyncData({ $prismic, params, error }) {
    try {
      // Query to get post content
      const post = (await $prismic.api.getByUID('post', params.uid)).data

      // Returns data to be used in template

      return {
        document: post,
        slices: post.body, //returns array of objects
        formattedDate: Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'short',
          day: '2-digit',
        }).format(new Date(post.date)),
      }
    } catch (e) {
      // Returns error page
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
}
</script>
<style lang="scss">
.blog-header {
  margin-top: 5rem;
}

.back {
  color: white;
  font-size: 3rem;
}

@media screen and (max-width: 768px) {
  .blog-title {
    font-size: 4rem;
  }
}

.blog-post-meta {
  text-align: center;
  margin: 2rem;
}
p {
  margin-bottom: 2rem;
  text-align: start;
  @media screen and (max-width: 768px) {
    margin-bottom: 3rem;
  }
}
.textslice {
  color: #fff;
  text-align: start;

  font-size: var(--h4);
  width: 60vw;
  margin: 0 auto;
  @media screen and (max-width: 768px) {
    width: 90vw;
  }
}
p {
  line-height: 3rem;
  text-align: start;
}
.created-at {
  font-size: var(--h5);
  font-style: italic;
}
</style>
