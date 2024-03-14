<template>
    <section>
        <div>{{ imagePath }}</div>
    </section>
</template>
  
<script>
  
    export default {
        name: 'char-image',
        data() {
            return {
                imagePath: 'google.de', 
            }
        }
    }
</script>