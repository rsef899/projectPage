<template>
    <div class="flex flex-col">
        <div class="flex gap-x-10">
            <div class="lg:flex-1 min-w-0">
            <h1 class="font-googlePoppins font-bold leading-loose text-zinc-800 lg:text-5xl"><br>Computer Engineering</h1>
            <h1 class="font-googlePoppins font-bold leading-loose text-zinc-800 lg:text-5xl py-4">Student 🦾</h1>
            <p class="font-googleMulish leading-loose text-gray-600 text-lg">
                Hey! My name is Robert Sefaj I am currently studying a bachelor of honours in<br> Computer Systems Enginnering at the University of Auckland.
            </p>
            <p class="font-googleMulish leading-loose text-gray-600 text-lg">
                I am skilled in various programming fields including:
            </p>
            <ul class="list-disc pl-10 font-googleMulish leading-loose text-gray-600 text-lg pb-5">
                <li>Embedded systems (firmware development)</li>
                <li>Software development (frontend, backend and some deployment)</li>
                <li>AI/ML (model creation and integration)</li>
            </ul>
            <div class="flex">
                <a href="https://www.linkedin.com/in/robert-sefaj-2b73b72b2/" target="_blank" rel="noopener noreferrer">
                    <img src="../assets/icons/linkedin_icon.svg" alt="LinkedIn">
                </a>
                <a href="https://github.com/rsef899" target="_blank" rel="noopener noreferrer" class="px-5">
                    <img src="../assets/icons/githubfirst.svg" alt="Github">
                </a>
            </div>
            </div>
            <morphingProfilePic class="lg:flex-initial" />
        </div>
        <div class="flex pt-10">
            <p class="font-googleMulish leading-loose text-lg">Currently using:  &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp|</p>
            <a target="_blank" rel="noopener noreferrer" class="px-5">
                    <img src="https://skillicons.dev/icons?i=c,raspberrypi" alt="C & RasberryPi" title="C & RasberryPi">
            </a>
            <a target="_blank" rel="noopener noreferrer" class="px-5">
                    <img src="https://skillicons.dev/icons?i=python,flask,vue,tailwind" alt="Python & Flask & Vue & Tailwind" title="Python & Flask & Vue & Tailwind">
            </a>
        </div>
    </div>
  </template>
  
  

<script setup>
import morphingProfilePic from './EntranceHelpers/morphingProfilePic.vue'
</script>



