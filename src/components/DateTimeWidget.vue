<template>
  <div>
    <strong>{{ time }}</strong>
    <br />
    {{ dayOfWeek }}
    <br />
    {{ date }}
  </div>
</template>

<script>
export default {
  created() {
    setInterval(this.updateTime, 500);
  },
  data: function() {
    return {
      dateTime: null
    };
  },
  computed: {
    time: function() {
      return this.formatDateTime(this.dateTime, "hh:MM TT");
    },
    dayOfWeek: function() {
      return this.formatDateTime(this.dateTime, "ddd");
    },
    date: function() {
      return this.formatDateTime(this.dateTime, "mmm d, yyyy");
    }
  },
  methods: {
    updateTime() {
      this.dateTime = new Date();
    },
    formatDateTime(dateTime, format) {
      let dateFormat = require("dateformat");
      return dateFormat(dateTime, format);
    }
  }
};
</script>