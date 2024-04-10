<template>
    <section class="charStats basicBoxLayout">
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
        
        <section class="charStats__HpSection">
            <div class="charStats__HpCounter">
                <h6 class="charStats__maxHp">HP: {{ hp + tempHp }} / {{ maxHp }}</h6>
                <div>
                    <input type="number" placeholder="DMG taken" v-model="hpValue">
                    <button @click="changeHP('decrease')">DMG</button>    
                    <button @click="changeHP('increase')">Heal</button>
                </div> 
            </div>
            
            <div class="charStats__HpBar">
                <div class="charStats__HpBar--outer"></div>
                <div class="charStats__HpBar--inner" :style="{ width: `${healthPercentage}` + '%'}"></div>
                <div class="charStats__HpBar--overheal" :style="{ width: `${tempHealthPercentage}` + '%'}"></div>
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
                hpValue: 0,
                tempHp: 0,
                tempHPAdd: 0,
                initiative: 2,
            };
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

            healthPercentage() {
                return Math.min((this.hp / this.maxHp) * 100, 100);
            },
            tempHealthPercentage() {
                return Math.min((this.tempHp / this.maxHp) * 100, 100);
            },
        },
        methods: {
            ...mapMutations('attributes', [
                'changeAttr',
            ]),
            changeHP(value) {
                if(value === 'decrease') {
                    if(this.hp === 0) {
                        return
                    }
                    if (this.tempHp != 0) {
                        if(this.tempHp >= this.hpValue) {
                            this.tempHp = this.tempHp - this.hpValue
                            return
                        }
                        this.hp = this.hp + (this.tempHp - this.hpValue)
                        this.tempHp = 0
                    } else {
                        this.hp = this.hp - this.hpValue;
                    }
                } else {
                    if((this.hp + this.hpValue) >= this.maxHp) {
                        this.hp = this.maxHp
                        return
                    }
                    this.hp = this.hp + this.hpValue;
                }
            },
            updateTempHP() {
                this.tempHp = this.tempHp + this.tempHPAdd;
            }
        },
    }
</script>