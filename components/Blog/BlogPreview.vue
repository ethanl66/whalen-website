<template>
  <nuxt-link class="link" :to="link">
    <div class="blog-card" v-tilt="{ speed: 200, perspective: 1200, max: 2 }">
      <h4>{{ $prismic.asText(post.data.title) }}</h4>
      <!--  <img class="student-image" v-bind:src="post.data.poster.url" /> -->

      <!--  <h5 class="date">
        {{ formattedDate }}
      </h5> -->
    </div>
  </nuxt-link>
</template>

<script>
import LinkResolver from '~/plugins/link-resolver.js'
export default {
  props: ['post'],
  data: function () {
    return {
      link: '',
      formattedDate: '',
      tags: this.post.tags,
    }
  },
  name: 'blog-preview',

  methods: {
    // Function to get the first paragraph of text in a blog post and limit the displayed text at 300 characters
    getFirstParagraph(post) {
      const textLimit = 300
      const slices = post.data.body
      let firstParagraph = ''
      let haveFirstParagraph = false

      slices.map(function (slice) {
        if (!haveFirstParagraph && slice.slice_type == 'text') {
          slice.primary.text.forEach(function (block) {
            if (block.type == 'paragraph' && !haveFirstParagraph) {
              firstParagraph += block.text
              haveFirstParagraph = true
            }
          })
        }
      })

      const limitedText = firstParagraph.substr(0, textLimit)

      if (firstParagraph.length > textLimit) {
        return limitedText.substr(0, limitedText.lastIndexOf(' ')) + '...'
      } else {
        return firstParagraph
      }
    },
  },
  created() {
    ;(this.link = LinkResolver(this.post)),
      (this.formattedDate = Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
      }).format(new Date(this.post.data.date)))
  },
}
</script>

<style lang="scss">
.blog-card {
  transform-style: preserve-3d;
  backface-visibility: hidden;
  margin: 3rem auto;
  position: relative;
  height: 25rem;
  width: 50rem;
  @include flex-col;
  justify-content: center;
  border-radius: 2rem;
  overflow: hidden;
  box-shadow: var(--level-2);
  background-color: rgba(0, 0, 0, 0.6);
  margin: 3.5rem auto;
  padding: 1rem;
}
@include tablet {
  .blog-card {
    width: 45rem;
  }
}
.date {
  font-style: italic;
  color: #cba50e;
}
</style>
