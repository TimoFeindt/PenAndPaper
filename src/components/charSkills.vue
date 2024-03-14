<template>
    <section class="charSkills">
        <h1>Skill-Liste</h1>
        <ul>
            <li v-for="skill in skills" :key="skill.name">

                {{ skill.name }}: 

                <hr>
                {{ attMod }}
                <hr>
                <button @click="attMod(2)">CLICK</button>
                <hr>
                <span v-if="skill.attrModName === 'str'">
                    {{ strMod }}
                </span>
                <span v-else-if="skill.attrModName === 'dex'">
                    {{ dexMod }}
                </span>
                <span v-else-if="skill.attrModName === 'con'">
                    {{ conMod }}
                </span>
                <span v-else-if="skill.attrModName === 'int'">
                    {{ intMod }}
                </span>
                <span v-else-if="skill.attrModName === 'cha'">
                    {{ chaMod }}
                </span>
                <span v-else-if="skill.attrModName === 'wis'">
                    {{ wisMod }}
                </span>
                
                + {{ skill.rank }} + {{ skill.tempMod }}
            </li>
        </ul>
    </section>
</template>
  
<script>
import { mapGetters } from 'vuex';
    export default {
        name: 'char-skills',
        data() {
            return {
                attMod: 0,
                skills: {
                    akrobatik: {
                        name: 'Akrobatik',
                        attrModName: 'dex',
                        rank: 1,
                        tempMod: 0,
                        proficient: false,
                    },
                    auftreten: {
                        name: 'Auftreten',
                        attrModName: 'cha',
                        rank: 4,
                        tempMod: 1,
                        proficient: false,
                    },
                    beruf: {
                        name: 'Beruf',
                        attrModName: 'WE',
                        rank: 0,
                        tempMod: 0,
                        proficient: true,
                    },
                    bluffen: {
                        name: 'Bluffen',
                        attrModName: 'cha',
                        rank: 13,
                        tempMod: 4,
                        proficient: false,
                    },
                    diplomatie: {
                        name: 'Diplomatie',
                        attrModName: 'cha',
                        rank: 0,
                        tempMod: 0,
                        proficient: false,
                    },
                    einschüchtern: {
                        name: 'Einschüchtern',
                        attrModName: 'cha',
                        rank: 0,
                        tempMod: 0,
                        proficient: false,
                    },
                    entfesselungskunst: {
                        name: 'Entfesselungskunst',
                        attrModName: 'dex',
                        rank: 13,
                        tempMod: 4,
                        proficient: false,
                    },
                    fingerfertigkeit: {
                        name: 'Fingerfertigkeit',
                        attrModName: 'dex',
                        rank: 0,
                        tempMod: 0,
                        proficient: true,
                    },
                    fliegen: {
                        name: 'Fliegen',
                        attrModName: 'dex',
                        rank: 0,
                        tempMod: 0,
                        proficient: false,
                    },
                    handwerk: {
                        name: 'Handwerk',
                        attrModName: 'int',
                        rank: 13,
                        tempMod: 4,
                        proficient: false,
                    },
                    heilkunde: {
                        name: 'Heilkunde',
                        attrModName: 'WE',
                        rank: 0,
                        tempMod: 0,
                        proficient: false,
                    },
                    heimlichkeit: {
                        name: 'Heimlichkeit',
                        attrModName: 'dex',
                        rank: 0,
                        tempMod: 0,
                        proficient: false,
                    },
                    klettern: {
                        name: 'Klettern',
                        attrModName: 'str',
                        rank: 13,
                        tempMod: 4,
                        proficient: false,
                    },
                    magischenGegenstandBenutzen: {
                        name: 'magischen Gegenstand benutzen',
                        attrModName: 'cha',
                        rank: 0,
                        tempMod: 0,
                        proficient: true,
                    },
                    mechanismusAusschalten: {
                        name: 'Mechanismus ausschalten',
                        attrModName: 'dex',
                        rank: 0,
                        tempMod: 0,
                        proficient: true,
                    },
                    mitTierenUmgehen: {
                        name: 'mit Tieren umgehen',
                        attrModName: 'cha',
                        rank: 0,
                        tempMod: 0,
                        proficient: true,
                    },
                    motivErkennen: {
                        name: 'Motiv Erkennen',
                        attrModName: 'WE',
                        rank: 0,
                        tempMod: 0,
                        proficient: false,
                    },
                    reiten: {
                        name: 'Reiten',
                        attrModName: 'dex',
                        rank: 0,
                        tempMod: 0,
                        proficient: false,
                    },
                    schätzen: {
                        name: 'Schätzen',
                        attrModName: 'int',
                        rank: 13,
                        tempMod: 4,
                        proficient: false,
                    },
                    schwimmen: {
                        name: 'Schwimmen',
                        attrModName: 'str',
                        rank: 0,
                        tempMod: 0,
                        proficient: false,
                    },
                    sprachenkunde: {
                        name: 'Sprachenkunde',
                        attrModName: 'int',
                        rank: 0,
                        tempMod: 0,
                        proficient: true,
                    },
                    überlebenskunst: {
                        name: 'Überlebenskunst',
                        attrModName: 'WE',
                        rank: 0,
                        tempMod: 0,
                        proficient: false,
                    },
                    verkleiden: {
                        name: 'Verkleiden',
                        attrModName: 'cha',
                        rank: 0,
                        tempMod: 0,
                        proficient: false,
                    },
                    wahrnehmung: {
                        name: 'Wahrnehmung',
                        attrModName: 'WE',
                        rank: 0,
                        tempMod: 0,
                        proficient: false,
                    },
                    wissenAdel: {
                        name: 'Wissen Adel & Königshäuser',
                        attrModName: 'int',
                        rank: 13,
                        tempMod: 4,
                        proficient: true,
                    },
                    wissenArkanes: {
                        name: 'Wissen Arkanes',
                        attrModName: 'int',
                        rank: 0,
                        tempMod: 0,
                        proficient: true,
                    },
                    wissenBaukunst: {
                        name: 'Wissen Baukunst',
                        attrModName: 'int',
                        rank: 13,
                        tempMod: 4,
                        proficient: true,
                    },
                    wissenEbenen: {
                        name: 'Wissen Die Ebenen',
                        attrModName: 'int',
                        rank: 0,
                        tempMod: 0,
                        proficient: true,
                    },
                    wissenGeographie: {
                        name: 'Wissen Geographie',
                        attrModName: 'int',
                        rank: 13,
                        tempMod: 4,
                        proficient: true,
                    },
                    wissenGeschichte: {
                        name: 'Wissen Geschichte',
                        attrModName: 'int',
                        rank: 0,
                        tempMod: 0,
                        proficient: true,
                    },
                    wissenGewölbekunde: {
                        name: 'Wissen Gewölbekunde',
                        attrModName: 'int',
                        rank: 13,
                        tempMod: 4,
                        proficient: true,
                    },
                    wissenLokales: {
                        name: 'Wissen Lokales',
                        attrModName: 'int',
                        rank: 0,
                        tempMod: 0,
                        proficient: true,
                    },
                    wissenNatur: {
                        name: 'Wissen Natur',
                        attrModName: 'int',
                        rank: 13,
                        tempMod: 4,
                        proficient: true,
                    },
                    wissenReligion: {
                        name: 'Wissen Religion',
                        attrModName: 'int',
                        rank: 0,
                        tempMod: 0,
                        proficient: true,
                    },
                    zauberkunde: {
                        name: 'Zauberkunde',
                        attrModName: 'int',
                        rank: 0,
                        tempMod: 0,
                        proficient: true,
                    },
                }
            }
        },
        watch: {
            attMod() {
                return ( 
                        this.skill.attrModName === 'str' ?  
                            this.strMod  : 
                        this.skill.attrModName === 'dex' ?  
                            this.dexMod :
                        this.skill.attrModName === 'con' ?  
                            this.conMod :
                        this.skill.attrModName === 'int' ? 
                            this.intMod :
                        this.skill.attrModName === 'cha' ? 
                            this.chaMod :
                        this.skill.attrModName === 'wis' ? 
                            this.wisMod : ''
                    )
            },
        },
        computed: {
            ...mapGetters(
                'attributes', [
                    'strMod',
                    'dexMod',
                    'conMod',
                    'intMod',
                    'chaMod',
                    'wisMod',
            ]),
        },
    }
</script>