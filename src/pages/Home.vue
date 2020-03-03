<template>
  <div>
    Home Page
    <div>
      <date-time-widget />
    </div>
  </div>
</template>

<script>
import DateTimeWidget from '../components/DateTimeWidget.vue'

export default {
  components: {
    'date-time-widget': DateTimeWidget
  }
};
</script>