<template>
  <div>

    <b-container fluid>
      <b-row class="justify-content-md-left">
        <b-col col lg="4">

          <h1>Clean Data</h1>
          <div v-if="errors.length">
            <ul>
              <li v-for="(error, index) in errors" v-bind:key="index">{{error}}</li>
            </ul>
          </div>

          <div v-else-if="statusDone()">
            <b-alert variant="success" show>Processed!</b-alert>
          </div>
          <div v-else-if="statusInProgress()">
            <b-alert variant="info" show>Processing...</b-alert>
          </div>

          <b-form class="clean-data-form"
                  v-on:submit.prevent="onSubmit">

            <b-form-group id="data-group"
                          label="Data:"
                          label-for="data">
              <b-form-textarea
                id="data"
                v-model="data"
                placeholder="Data"
                rows="15"
                max-rows="15"
                cols="15"
                max-cols="15"
              ></b-form-textarea>
            </b-form-group>

            <b-form-group id="sessionNameSuffix-group"
                          label="Session name suffix:"
                          label-for="sessionNameSuffix">
              <b-form-input
                id="sessionNameSuffix"
                v-model="sessionNameSuffix"
                placeholder="Session name prefix"
              ></b-form-input>
            </b-form-group>

            <b-form-group v-if="cleanedData"
                          id="cleanedData-group"
                          label="Cleaned Data:"
                          label-for="cleanedData">
              <b-form-textarea
                id="cleanedData"
                v-model="cleanedData"
                placeholder="Cleaned Data"
                rows="15"
                max-rows="15"
                cols="15"
                max-cols="15"
                readonly
              ></b-form-textarea>
            </b-form-group>

            <b-button variant="primary" type="submit">Submit</b-button>

          </b-form>

        </b-col>
      </b-row>
    </b-container>

  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import {
  StatusUnknown,
  StatusDone,
  StatusInProgress,
  apiBaseUrl,
} from '../helpers';

export default Vue.extend({
  name: 'ApiCleanData',
  data() {
    return {
      data: null as string | null,
      sessionNameSuffix: null as string | null,
      cleanedData: null as string | null,
      errors: [] as string[],
      status: StatusUnknown as number,
    };
  },
  methods: {
    onSubmit() {
      this.errors = [];
      if (this.data) {
        this.status = StatusInProgress;
        const payload = {
          data: this.data,
          sessionNameSuffix: this.sessionNameSuffix,
        };
        axios.post(`${apiBaseUrl}/clean-data/`, payload)
          .then((response) => {
            this.status = StatusDone;
            this.cleanedData = response.data;
          })
          .catch((e) => {
            this.errors.push(e);
          });
      } else {
        this.errors.push('Data is required');
      }
    },
    statusDone() {
      return this.status === StatusDone;
    },
    statusInProgress() {
      return this.status === StatusInProgress;
    },
  },
});
</script>
