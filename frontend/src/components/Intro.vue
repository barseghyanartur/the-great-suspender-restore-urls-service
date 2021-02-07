<template>
  <div>
    <b-container fluid>
      <b-row class="justify-content-md-center">
        <b-col col md="4">
          <h1>About</h1>
          <h2>Background</h2>
          <p>
          If you used to use The Great Suspender Chrome extension, you would notice (as
          of 2021-02-04) that it has been banned by Google Chrome for being a malware.
          </p>
          <p>
          The last-known-good-version on GitHub, release
          <a href="https://github.com/greatsuspender/thegreatsuspender/releases/tag/v7.1.6">v7.1.6</a>,
          works well for me, if installed from source. However, your saved
          tabs won't reload as something has changed in between the `good` and the `bad`
          releases.
          </p>
          <p>
          What to do? Would you just loose all precious URLs and saved sessions? If you
          are OK with that, just pass by. Otherwise, read further.
          </p>
          <h2>How to fix the broken tabs</h2>
          <h3>Locally (with Python)</h3>
          <p>
          1. Use the <a href="https://chrome.google.com/webstore/detail/freshstart-cross-browser/nmidkjogcjnnlfimjcedenagjfacpobb">FreshStart - Cross Browser Session Manager</a>
             extension to export all your tabs into a JSON and save it into a file (for
             instance, name it <u>tabs.json</u>).
          </p>
          <p>
          2. Install <u>the-great-suspender-restore-urls</u> package:
            <br/>
            <code>
            pip install the-great-suspender-restore-urls
            </code>
          </p>
          <p>
          3. Fix your broken tabs:
            <br/>
            <code>
            restore-the-great-suspender-urls --in-file=tabs.json --out-file=tabs-restored.json
            </code>
          </p>
          <p>
          4. Use the <a href="https://chrome.google.com/webstore/detail/freshstart-cross-browser/nmidkjogcjnnlfimjcedenagjfacpobb">FreshStart - Cross Browser Session Manager</a>
             to import the tabs back (paste the contents of the <u>tabs-restored.json</u>
             in the import session window).
          </p>
          <h3>Online (this service)</h3>
          <p>
          1. Use the <a href="https://chrome.google.com/webstore/detail/freshstart-cross-browser/nmidkjogcjnnlfimjcedenagjfacpobb">FreshStart - Cross Browser Session Manager</a>
             extension to export all your tabs into a JSON and save it into a file (for
             instance, name it <u>tabs.json</u>).
          </p>
          <p>
            2. Paste the contents of the <u>tabs.json</u> in the <u>Data</u> field
               <router-link to="/index.html">here</router-link> and press submit to fix your
               broken tabs.
          </p>
          <p>
          3. Use the <a href="https://chrome.google.com/webstore/detail/freshstart-cross-browser/nmidkjogcjnnlfimjcedenagjfacpobb">FreshStart - Cross Browser Session Manager</a>
             to import the tabs back (paste the contents of the <u>Cleaned Data</u> in the import
             session window).
          </p>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Intro',
  components: {},
});
</script>
