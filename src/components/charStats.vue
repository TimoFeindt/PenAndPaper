<template>
    <section class="charStats">
        <div class="charStats__headlines">
            <h3 class="charStats__h3">Base Stats</h3>
            <div>Attribute:</div>
        </div>
        <div class="charStats__container">
            <div class="charStats__box">
                <div class="charStats__values">
                    <div class="charStats__base font--huge">
                        {{ strength.base }}
                    </div>
                    <span class="font--huge">/</span>
                    <div class="charStats__mod font--huge">
                        {{ strMod }}
                    </div> 
                </div>
                <div class="charStats__name">STR</div>
                <div class="charStats__temp">
                    <button class="charStats__button charStats__buttonIcon" @click="changeAttr({name: 'strength', type: 'decrease'})" >-</button> 
                    <button class="charStats__button charStats__buttonIcon" @click="changeAttr({name: 'strength', type: 'increase'})">+</button>
                </div>
            </div>

            <div class="charStats__box">
                <div class="charStats__values">
                    <div class="charStats__base font--huge">
                        {{ dexterity.base }}
                    </div>
                    <span class="font--huge">/</span>
                    <div class="charStats__mod font--huge">
                        {{ dexMod }}
                    </div> 
                </div>
                <div class="charStats__name">DEX</div>
                <div class="charStats__temp">
                    <button class="charStats__button charStats__buttonIcon" @click="changeAttr({name: 'dexterity', type: 'decrease'})">-</button>
                    <button class="charStats__button charStats__buttonIcon" @click="changeAttr({name: 'dexterity', type: 'increase'})">+</button>
                </div>
            </div>
            <div class="charStats__box">
                <div class="charStats__values">
                    <div class="charStats__base font--huge">
                        {{ constitution.base }}
                    </div>
                    <span class="font--huge">/</span>
                    <div class="charStats__mod font--huge">
                        {{ conMod }}
                    </div> 
                </div>
                <div class="charStats__name">CON</div>
                <div class="charStats__temp">
                    <button class="charStats__button charStats__buttonIcon" @click="changeAttr({name: 'constitution', type: 'decrease'})">-</button>
                    <button class="charStats__button charStats__buttonIcon" @click="changeAttr({name: 'constitution', type: 'increase'})">+</button>
                </div>
            </div>
            <div class="charStats__box">
                <div class="charStats__values">
                    <div class="charStats__base font--huge">
                        {{ intelligence.base }}
                    </div>
                    <span class="font--huge">/</span>
                    <div class="charStats__mod font--huge">
                        {{ intMod }}
                    </div> 
                </div>
                <div class="charStats__name">INT</div>
                <div class="charStats__temp">
                    <button class="charStats__button charStats__buttonIcon" @click="changeAttr({name: 'intelligence', type: 'decrease'})">-</button>
                    <button class="charStats__button charStats__buttonIcon" @click="changeAttr({name: 'intelligence', type: 'increase'})">+</button>
                </div>
            </div>
            <div class="charStats__box">
                <div class="charStats__values">
                    <div class="charStats__base font--huge">
                        {{ wisdom.base }}
                    </div>
                    <span class="font--huge">/</span>
                    <div class="charStats__mod font--huge">
                        {{ wisMod }}
                    </div> 
                </div>
                <div class="charStats__name">WIS</div>
                <div class="charStats__temp">
                    <button class="charStats__button charStats__buttonIcon" @click="changeAttr({name: 'wisdom', type: 'decrease'})">-</button>
                    <button class="charStats__button charStats__buttonIcon" @click="changeAttr({name: 'wisdom', type: 'increase'})">+</button>
                </div>
            </div>
            <div class="charStats__box">
                <div class="charStats__values">
                    <div class="charStats__base font--huge">
                        {{ charism.base }}
                    </div>
                    <span class="font--huge">/</span>
                    <div class="charStats__mod font--huge">
                        {{ chaMod }}
                    </div> 
                </div>
                <div class="charStats__name">CHA</div>
                <div class="charStats__temp">
                    <button class="charStats__button charStats__buttonIcon" @click="changeAttr({name: 'charism', type: 'decrease'})">-</button>
                    <button class="charStats__button charStats__buttonIcon" @click="changeAttr({name: 'charism', type: 'increase'})">+</button>
                </div>
            </div>
        </div>
        
        <section class="charStats__HPsection">
            <div>Max-HP: {{ maxHp }} : {{ hp + tempHp }} </div>
            <div class="charStats__temp charStats__temp--hp">      
                <button @click="changeHP('decrease')">-</button>
                <button @click="changeHP('increase')">+</button>
                <div> Temp Hp: {{ tempHp }}</div>
            </div>
            <div class="charStats__HpBar">
                <div class="charStats__HpBar--outer"></div>
                <div class="charStats__HpBar--inner" :style="{ width: hpScale + '%'}"></div>
                <div class="charStats__HpBar--overheal" :style="{ width: tempHpScale + '%'}"></div>
            </div>
            
        
            <input type="number" v-model="tempHPAdd" class="charStats__tempInput">
            <button @click="updateTempHP()">add temp HP</button>
            <div>Initiative: {{ initiative }}</div>
        </section>
       
    </section>
</template>
<style>
    @import '../scss/charStats.css';
</style>
<script>
    import { mapState, mapGetters, mapMutations } from 'vuex';

    export default {
        name: 'char-stats',
        data() {
            return {
                maxHp: 25,
                hp: 25,
                tempHp: 0,
                tempHPAdd: 0,
                initiative: 2,
                hpScale: 100,
                tempHpScale: 0,
            };
        },
        watch: {
            hp: {
                handler(oldValue, newValue){
                    const fullLife = 100 / this.maxHp 
                    if (newValue > oldValue) {
                        this.hpScale = this.hpScale - fullLife 
                        console.log(fullLife)
                        console.log(this.hpScale)
                    } else {
                        this.hpScale = this.hpScale + fullLife 
                    }
                }
            },
            tempHp: {
                handler(oldValue, newValue){
                    const overHeal = 100 / this.maxHp 
                    console.log(overHeal);
                    if (newValue > oldValue) {
                        this.tempHpScale = this.tempHpScale - overHeal 
                        console.log(overHeal)
                        console.log(this.tempHpScale)
                    } else {
                        this.tempHpScale = this.tempHpScale + overHeal 
                    }
                }
            },
            
        },
        computed: {
            ...mapState('attributes', [
                'strength',
                'dexterity',
                'constitution',
                'intelligence',
                'wisdom',
                'charism',
            ]),
            ...mapGetters('attributes', [
                'strMod',
                'dexMod',
                'conMod',
                'intMod',
                'wisMod',
                'chaMod',
            ]),
        },
        methods: {
            ...mapMutations('attributes', [
                'changeAttr',
            ]),
            changeHP(value) {
                if(value === 'decrease') {
                    if (this.tempHp != 0) {
                        this.tempHp--
                    } else {
                        this.hp--
                    }
                } else {
                    if (this.hp <= (this.maxHp - 1) ) {
                        this.hp++
                    } 
                }
            },
            updateTempHP() {
                this.tempHp = this.tempHp + this.tempHPAdd
            }
        },
    }
</script>