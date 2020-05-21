<template>
  <section class="section">
    <div class="columns">
      <div class="column is-6">
        <b-field label="Jira">
          <b-input type="textarea" v-model="jira"></b-input>
        </b-field>
      </div>

      <div class="column is-6">
        <b-field label="Markdown">
          <b-input type="textarea" :value="markdown"></b-input>
        </b-field>
      </div>
    </div>
  </section>
</template>

<script>
const j2m = require("jira2md");
export default {
  name: "Jira2MD",

  data() {
    return {
      jira: ""
    };
  },

  computed: {
    markdown() {
      return j2m.to_markdown(this.jira);
    }
  }
};
</script>
