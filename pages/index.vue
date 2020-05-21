<template>
  <section class="section">
    <div class="columns">
      <div class="column is-6">
        <b-field label="Jira">
          <b-input
            type="textarea"
            v-model="jira"
            placeholder="h1. title

* list
** list2

[link|https://jira2md.web.app/]"
          ></b-input>
        </b-field>
      </div>

      <div class="column is-6">
        <b-field label="Markdown">
          <b-input
            type="textarea"
            :value="markdown"
            readonly
            placeholder="# title

* list
  * list2

[link](https://jira2md.web.app/)"
          ></b-input>
        </b-field>
      </div>
    </div>
  </section>
</template>

<script>
const j2m = require("jira2md");
export default {
  head() {
    return {
      titleTemplate: null,
      title: "Jira記法のテキストをMarkdownに変換するツール - Jira2MD"
    };
  },
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
