<template>
    <div class="profile-picture"></div>
</template>

<!-- Scoped style means these styles will only be used in this compoanant-->
<style scoped>
    /*Defines a set of annimations
     Animation works by changing from one set of style to the other
    */
    @keyframes morph {
    /*The percentages indicate the time through the annimation so this first set is for the start and end of the animation */
    0%, 100% {
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    25% {
        border-radius: 70% 30% 40% 60% / 40% 70% 30% 60%;
    }
    50% {
        border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    75% {
        border-radius: 70% 30% 40% 60%/ 40% 70% 30% 60%;
    }
    }

    .profile-picture {
    -webkit-animation: morph 8s ease-in-out infinite;
    /*Apply the morph animation here*/
    animation: morph 10s ease-in-out infinite;
    background-image: url('../../assets/1706761997888.jpg');
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    border: 3px solid #15803d;
    height: 25rem;
    width: 350px;
    position: relative;
    transition: all 1s ease-out;
    
    }
</style>