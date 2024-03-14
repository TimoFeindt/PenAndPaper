<template>
  <h1>{{ $store.state.test }}</h1>
  <h1>CharacterBogen</h1>
  <div class="baselayout">
    <char-description />
    <char-skills 
    :strMod = strMod
    :dexMod = dexMod
    :conMod = conMod
    :intMod = intMod
    :wisMod = wisMod
    :chaMod = chaMod />
    <char-spells />
    <char-stats />
    <char-combat-stats
    :strMod = strMod
    :dexMod = dexMod
    :conMod = conMod
    :wisMod = wisMod />
    <char-weapons 
    :strMod = strMod
    :dexMod = dexMod />
    <char-inventar />
    <char-talents />
  </div>

</template>

<script>
import charDescription from './components/charDescription.vue'
import charStats from './components/charStats.vue'
import charSkills from './components/charSkills.vue'
import charSpells from './components/charSpells.vue'
import charInventar from './components/charInventar.vue'
import charWeapons from './components/charWeapons.vue'
import charCombatStats from './components/charCombatStats.vue'
import charTalents from './components/charTalents.vue'

export default {
  name: 'App',
  components: {
    charDescription,
    charStats,
    charSkills,
    charSpells,
    charCombatStats,
    charWeapons,
    charInventar,
    charTalents,
  },
  data () {
    return {
    }
  },
  methods: {
  },
}
</script>

<style>
  @import './scss/base.css';
</style>