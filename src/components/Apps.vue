<template>
  <div>
    <div v-for="app in apps" :key="app.url">
      <p>
        <a
          :href="urlOnClick(app)"
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
          description: "HTML & CSS: Animations and transitions sample",
          url: "https://ryben.github.io/html5exer"
        },
        {
          title: "WebGL Sample",
          description:
            "Three-planet solar system modeled using ThreeJS library.",
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
    urlOnClick(app) {
      return app.onClickUrl != undefined ? app.onClickUrl : app.url;
    }
  }
};
</script>