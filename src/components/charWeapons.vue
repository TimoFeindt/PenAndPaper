<template>
    <section class="charWeapons">
        <h3> Weapons</h3>
        
        <ul>
            <li v-for="weapon in weapons" :key="weapon.name">
                <div v-if="weapon.attr === 'dex'">
                    <div>{{ weapon.name }}</div>
                    <div>{{ weapon.atkBonus }} + {{ dexMod }}</div>
                    <div>{{ weapon.crit }}</div>
                    <div>{{ weapon.type }}</div>
                    <div>{{ weapon.range }}</div>
                    <div>{{ weapon.ammunition }}</div>
                    <div>{{ weapon.damage }} + {{ dexMod }}</div>
                </div>
                <div v-else>
                    <div>{{ weapon.name }}</div>
                    <div>{{ weapon.atkBonus }} + {{ strMod }}</div>
                    <div>{{ weapon.crit }}</div>
                    <div>{{ weapon.type }}</div>
                    <div>{{ weapon.range }}</div>
                    <div>{{ weapon.ammunition }}</div>
                    <div>{{ weapon.damage }} + {{ strMod }}</div>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
    export default {
        name: 'char-weapons',
        props: {
            strMod: {type: Number, default: 0 },
            dexMod: {type: Number, default: 0 },
            conMod: {type: Number, default: 0 },
            intMod: {type: Number, default: 0 },
            wisMod: {type: Number, default: 0 },
            chaMod: {type: Number, default: 0 },
        },
        data() {
            return{
                weapons: {
                    weapon1: {
                        name: 'Schwert',
                        attr: 'str',
                        atkBonus: 'GAB ',
                        crit: '19-20',
                        type: 'Stichwaffe',
                        range: '-',
                        ammunition: '-',
                        damage: '1W4+3',
                    },
                    weapon2: {
                        name: 'Schleuder',
                        attr: 'dex',
                        atkBonus: 'GAB + GE',
                        crit: '19-20',
                        type: 'Wuchtwaffe',
                        range: '15m/10 Felder',
                        ammunition: 'Steine 20',
                        damage: '1W4',
                    }
                }
            }
        }
    }
</script>