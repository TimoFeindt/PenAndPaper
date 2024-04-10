<template>
    <section class="charTalents basicBoxLayout">
        <h1>Talents</h1>
        <ul>
            <li v-for="talent in talents" :key="talent.name">
                <div>{{ talent.name }}</div>
                <div>{{ talent.desc }}</div>
            </li>
        </ul>
    </section>
</template>
  
<script>
  
    export default {
        name: 'char-talents',
        data() {
            return {
                talents: {
                    talent1: {
                        name: 'Heftiger Schlag',
                        desc: '-2 GAB +2 DMG',
                    },
                    talent2: {
                        name: 'Darkvision',
                        desc: 'Gute Sicht im Dunklen',
                    },
                    talent3: {
                        name: 'Elfische Anmut',
                        desc: 'Immun gegen Verzauberungseffekte',
                    }
                }
            }
        }
    }
</script>