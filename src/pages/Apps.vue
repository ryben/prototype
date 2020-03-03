<template>
  <div>
    Apps Page
    <br />
    <div v-for="app in apps" :key="app.url">
      <p>
        <a
          :href="clickUrl(app)"
          style="text-decoration: none; color: blue"
          target="_blank"
        >{{ app.title }}</a>
      </p>
      <p>{{ app.description }}</p>
      <embed :src="app.url" width="600px" height="350px" onfocus="this.blur()" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      apps: [
        {
          title: "HTML5 Exercise",
          description: "",
          url: "https://ryben.github.io/html5exer"
        },
        {
          title: "WebGL Sample",
          description:
            "A three-planet solar system model using ThreeJS library.",
          url: "https://ryben.github.io/"
        },
        {
          title: "Text Tab",
          description:
            "Simple Text editor. Bookmark it to utilize this as a browser tab!",
          url: "https://ryben.github.io/textab?nofocus",
          onClickUrl: "https://ryben.github.io/textab?confirmclose"
        },
        {
          title: "Memory Game",
          description: "",
          url: "https://ryben.github.io/memorygame"
        }
      ]
    };
  },
  methods: {
    clickUrl(app) {
      return app.onClickUrl != undefined ? app.onClickUrl : app.url;
    }
  }
};
</script>