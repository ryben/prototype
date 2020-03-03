<template>
  <div>
    Home Page
    <div>
      <date-time-widget />
      <apps />
    </div>
  </div>
</template>

<script>
import DateTimeWidget from "../components/DateTimeWidget.vue";
import Apps from "../components/Apps.vue";

export default {
  components: {
    "date-time-widget": DateTimeWidget,
    apps: Apps
  }
};
</script>