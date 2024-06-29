import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import jsonFile from '../projects.json';

export const useProjectsStore = defineStore('jsonProjects', {
  state: () => ({
    jsonProjectData: jsonFile,
  }),
  actions: {

    setJsonData(data) {
      this.jsonProjectData = data;
    },
    async loadJsonData() {
      try {
        const response = await fetch(jsonFile);
        this.jsonProjectData = await response.json();
        console.log(this.jsonProjectData)
      } catch (error) {
        console.error('Failed to load JSON data:', error);
      }
    }
  },
  getters: {
    getJsonData() {
      return this.jsonProjectData;
    },
  },
});