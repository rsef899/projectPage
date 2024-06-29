<template>
    <v-card> 
            <v-card-item> 
                <v-card-title>Project 1</v-card-title> 
                <v-card-subtitle>Embedded Sytems</v-card-subtitle>
             <div class="flex col-start-2 row-start-6"> 
                <a target="_blank" rel="noopener noreferrer" class="px-2">
                    <img src="https://skillicons.dev/icons?i=tensorflow" alt="Tensorflow" title="TensorFlow"> </a> <a target="_blank" rel="noopener noreferrer" class="px-2"> 
                    <img src="https://skillicons.dev/icons?i=pytorch" alt="Pytorch" title="Pytorch"> </a> <a target="_blank" rel="noopener noreferrer" class="px-2"> 
                    <img src="../../assets/icons/jupyter.png" alt="Jupyter" title="Jupyter"> </a> 
                </div> 
            </v-card-item>
             <v-card-text class=""> The primary objective of this project is to design and implement a Reactive Co-Processor (ReCOP) that enhances the performance of control-dominated applications in reactive environments. The ReCOP, specifically engineered for handling asynchronous events and managing real-time responses, will integrate seamlessly with other processors, including a main NIOS processor, to offload reactive tasks to. This co-processor will utilise a specialised Instruction Set Architecture (ISA) similar to RISC, tailored for reactive programming, which includes unique instructions like DATACALL, LSIP, and SSOP. The ReCOP will be connected through a TDMA-MIN Network on Chip (NOC) interface, ensuring effective data communication and synchronisation across various processing units. With tools like Quartus, the ReCOP’s functionality and reliability will be extensively tested under various operational scenarios to ensure each instruction is processed appropriately, as well as to measure the performance of the processor.
                </v-card-text>
         </v-card>
</template>

<script setup>
    import {
    VCard,
    VCardItem,
    VCardTitle,
    VCardSubtitle,
    VCardText
    } from 'vuetify/lib/components/index.mjs';

</script>