<template>
    <div class="flex flex-row gap-2">
        <v-chip  class="ml-0 ma-2 font-bold" 
            
            color="#15803d" 
            :variant="selectedChip === key ? 'elevated' : 'tonal'" 
            :key="key"
            v-for="(project, key) in specficProjects"
            @click="handleClick(key)" 
            > 
                {{project.Title}}
        </v-chip>

    </div>

</template>

<script setup>
    import { useProjectsStore } from '../../stores/ProjectsStore';
    import { computed, ref } from 'vue';

    import {
        VChip
    } from 'vuetify/lib/components/index.mjs';

    const jsonStore = useProjectsStore();
    const specficProjects = computed(() => jsonStore.getFieldProjects(jsonStore.getTypeWanted));

    // Add reactive state for selected chip
    const selectedChip = computed(() =>jsonStore.getProjectSelectedState);

    const handleClick = (projectIndex) => {
        jsonStore.setProject(projectIndex);
    }

</script>