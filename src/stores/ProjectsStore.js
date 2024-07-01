import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import jsonFile from '../projects.json';

export const useProjectsStore = defineStore('jsonProjects', {
  state: () => ({
    jsonProjectData: jsonFile,
    currentProjectType: "Software",
    currentProject : 0
  }),
  actions: {

    setProjectType(type){
      this.currentProjectType = type;
    },
    setProject(index){
      this.currentProject= index;
    },
    setJsonData(data) {
      this.jsonProjectData = data;
    },
  },
  getters: {
    getJsonData() {
      return this.jsonProjectData;
    },
    getProjectTypes() {
      return this.jsonProjectData.Projects;
    },
    getTypeWanted(){
      return this.currentProjectType;
    },
    getProjectWanted(){
      return this.jsonProjectData.Projects[this.currentProjectType][Number(this.currentProject)];
    },
    getFieldProjects: (state) => (type) => {
      return state.jsonProjectData.Projects[type];
    },
  },
});