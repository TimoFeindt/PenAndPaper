<template>
    <section class="charCombat basicBoxLayout">
        <h3>Combat</h3>
        <!-- full Armor -->
        <span>Full ArmorClass</span>
        <div class="charCombat__box">
            <span class="charCombat__icon">
                <span class="charCombat__total">{{ AC.base + armor + AC.shield + dexMod + size  + AC.natArmor + AC.deflection + AC.misc }}</span>
            </span>
            <div class="charCombat__singles">
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">Base</span>
                    <span class="charCombat___singlesValue font--small">{{ AC.base }}</span> 
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">Armor</span>
                    <span class="charCombat___singlesValue font--small">{{ armor }}</span>
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">shield</span>
                    <span class="charCombat___singlesValue font--small">{{ AC.shield }}</span> 
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">dex</span>
                    <span class="charCombat___singlesValue font--small">{{ dexMod }}</span>
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">size</span>
                    <span class="charCombat___singlesValue font--small">{{ size }}</span>
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">nat</span>
                    <span class="charCombat___singlesValue font--small">{{ AC.natArmor }}</span> 
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">deflect</span>
                    <span class="charCombat___singlesValue font--small">{{ AC.deflection }}</span> 
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">misc</span>
                    <span class="charCombat___singlesValue font--small">{{ AC.misc }}</span>
                </div>
            </div>
        </div>
        <!-- touch -->
        <span>Touch</span>
        <div class="charCombat__box">
            <span class="charCombat__icon">
                <span class="charCombat__total">{{ AC.base + AC.shield + dexMod + size  + AC.natArmor + AC.deflection + AC.misc }}</span>
            </span>
            <div class="charCombat__singles">
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">Base</span>
                    <span class="charCombat___singlesValue font--small">{{ AC.base }}</span> 
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">Armor</span>
                    <span class="charCombat___singlesValue font--small">{{ armor }}</span>
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">dex</span>
                    <span class="charCombat___singlesValue font--small">{{ dexMod }}</span> 
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">size</span>
                    <span class="charCombat___singlesValue font--small">{{ size }}</span>
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">nat a</span>
                    <span class="charCombat___singlesValue font--small">{{ AC.natArmor }}</span> 
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">deflect</span>
                    <span class="charCombat___singlesValue font--small">{{ AC.deflection }}</span> 
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">misc</span>
                    <span class="charCombat___singlesValue font--small">{{ AC.misc }}</span>
                </div>
            </div>
        </div>
        <!-- flat footed -->
        <span>Flat Footed</span>
        <div class="charCombat__box">
            <span class="charCombat__icon">
                <span class="charCombat__total">{{ AC.base + armor + AC.shield + size  + AC.natArmor + AC.deflection + AC.misc }}</span>
            </span>
            <div class="charCombat__singles">
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">Base</span>
                    <span class="charCombat___singlesValue font--small">{{ AC.base }}</span> 
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">Armor</span>
                    <span class="charCombat___singlesValue font--small">{{ armor }}</span>
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">shield</span>
                    <span class="charCombat___singlesValue font--small">{{ AC.shield }}</span> 
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">size</span>
                    <span class="charCombat___singlesValue font--small">{{ size }}</span>
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">nat a</span>
                    <span class="charCombat___singlesValue font--small">{{ AC.natArmor }}</span> 
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">deflect</span>
                    <span class="charCombat___singlesValue font--small">{{ AC.deflection }}</span> 
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">misc</span>
                    <span class="charCombat___singlesValue font--small">{{ AC.misc }}</span>
                </div>
            </div>
        </div>
        
        <hr>
        <!-- Save Throw reflex Icon -->
        <span>Reflex Save throw</span>
        <div class="charCombat__box">
            <span class="charCombat__icon">
                <span class="charCombat__total">{{ saveThrow.reflex.base + dexMod + saveThrow.reflex.spellMod + saveThrow.reflex.misc + saveThrow.reflex.temp }}</span>
            </span>
            <div class="charCombat__singles">
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">base</span>
                    <span class="charCombat___singlesValue font--small">{{ saveThrow.reflex.base }}</span> 
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">dex</span>
                    <span class="charCombat___singlesValue font--small">{{ dexMod }}</span>
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">spell</span>
                    <span class="charCombat___singlesValue font--small">{{ saveThrow.reflex.spellMod }}</span> 
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">misc</span>
                    <span class="charCombat___singlesValue font--small">{{ saveThrow.reflex.misc }}</span>
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">temp</span>
                    <span class="charCombat___singlesValue font--small">{{ saveThrow.reflex.temp }}</span> 
                </div>
            </div>
        </div>

        <!-- save throw will ICON -->
        <span>Will Save throw</span>
        <div class="charCombat__box">
            <span class="charCombat__icon">
                <span class="charCombat__total">{{ saveThrow.will.base + wisMod + saveThrow.will.spellMod + saveThrow.will.misc + saveThrow.will.temp }}</span>
            </span>
            <div class="charCombat__singles">
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">base</span>
                    <span class="charCombat___singlesValue font--small">{{ saveThrow.will.base }}</span> 
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">wis</span>
                    <span class="charCombat___singlesValue font--small">{{ wisMod }}</span>
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">spell</span>
                    <span class="charCombat___singlesValue font--small">{{ saveThrow.will.spellMod }}</span> 
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">misc</span>
                    <span class="charCombat___singlesValue font--small">{{ saveThrow.will.misc }}</span>
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">temp</span>
                    <span class="charCombat___singlesValue font--small">{{ saveThrow.will.temp }}</span> 
                </div>
            </div>
        </div>
        
        <!--  save throw fortitude ICON -->
        <span>Fortitude Save throw</span>
        <div class="charCombat__box">
            <span class="charCombat__icon">
                <span class="charCombat__total">{{ saveThrow.fortitude.base + conMod + saveThrow.fortitude.spellMod + saveThrow.fortitude.misc + saveThrow.fortitude.temp }}</span>
            </span>
            <div class="charCombat__singles">
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">base</span>
                    <span class="charCombat___singlesValue font--small">{{ saveThrow.fortitude.base }}</span> 
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">con</span>
                    <span class="charCombat___singlesValue font--small">{{ conMod }}</span>
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">spell</span>
                    <span class="charCombat___singlesValue font--small">{{ saveThrow.fortitude.spellMod }}</span> 
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">misc</span>
                    <span class="charCombat___singlesValue font--small">{{ saveThrow.fortitude.misc }}</span>
                </div>
                <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                <div class="charCombat__singlesBox charCombat__singlesBox--value">
                    <span class="charCombat___singlesValue font--small">temp</span>
                    <span class="charCombat___singlesValue font--small">{{ saveThrow.fortitude.temp }}</span> 
                </div>
            </div>
        </div>

        <hr>
        <div class="charCombat__container">
            <!-- KMB -->
            <div>
                <div>
                    KMB:
                    <div class="charCombat__box">
                        <span class="charCombat__icon">
                            <span class="charCombat__total">{{ gab + strMod + size + combatManouver.misc }}</span>
                        </span>
                        <div class="charCombat__singles">
                            <div class="charCombat__singlesBox charCombat__singlesBox--value">
                                <span class="charCombat___singlesValue font--small">GAB</span>
                                <span class="charCombat___singlesValue font--small">{{ gab }}</span> 
                            </div>
                            <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                            <div class="charCombat__singlesBox charCombat__singlesBox--value">
                                <span class="charCombat___singlesValue font--small">Str</span>
                                <span class="charCombat___singlesValue font--small">{{ strMod }}</span>
                            </div>
                            <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                            <div class="charCombat__singlesBox charCombat__singlesBox--value">
                                <span class="charCombat___singlesValue font--small">size</span>
                                <span class="charCombat___singlesValue font--small">{{ size }}</span> 
                            </div>
                            <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                            <div class="charCombat__singlesBox charCombat__singlesBox--value">
                                <span class="charCombat___singlesValue font--small">misc</span>
                                <span class="charCombat___singlesValue font--small">{{ combatManouver.misc }}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- KMV -->
                <div>
                    KMV:
                    <div class="charCombat__box">
                        <span class="charCombat__icon">
                            <span class="charCombat__total">{{ gab + strMod + size + dexMod + combatManouver.base }}</span>
                        </span>
                        <div class="charCombat__singles">
                            <div class="charCombat__singlesBox charCombat__singlesBox--value">
                                <span class="charCombat___singlesValue font--small">GAB</span>
                                <span class="charCombat___singlesValue font--small">{{ gab }}</span> 
                            </div>
                            <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                            <div class="charCombat__singlesBox charCombat__singlesBox--value">
                                <span class="charCombat___singlesValue font--small">Str</span>
                                <span class="charCombat___singlesValue font--small">{{ strMod }}</span>
                            </div>
                            <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                            <div class="charCombat__singlesBox charCombat__singlesBox--value">
                                <span class="charCombat___singlesValue font--small">size</span>
                                <span class="charCombat___singlesValue font--small">{{ size }}</span> 
                            </div>
                            <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                            <div class="charCombat__singlesBox charCombat__singlesBox--value">
                                <span class="charCombat___singlesValue font--small">Dex</span>
                                <span class="charCombat___singlesValue font--small">{{ dexMod }}</span>
                            </div>
                            <span class="charCombat__singlesBox charCombat__singlesBox--plus">+</span>
                            <div class="charCombat__singlesBox charCombat__singlesBox--value">
                                <span class="charCombat___singlesValue font--small">base</span>
                                <span class="charCombat___singlesValue font--small">{{ combatManouver.base }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="charCombat__CmArea">
                <span class="charCombat___singlesValue">
                    Spell-resistence: {{ spellResistence }}
                </span>
        
            <div class="charCombat__BaseAttackBox">
                <span class="charCombat__BaseAttack charStats__base font--huge">
                    {{ gab }}
                </span>
                <div class="charStats__name">GAB</div>
                <div class="charStats__temp">
                    <button class="charStats__button charStats__buttonIcon" @click="changeGAB('decrease')">-</button>
                    <button class="charStats__button charStats__buttonIcon" @click="changeGAB('increase')">+</button>
                </div>
            </div>
            </div>
            
        </div>
    </section>
</template>

<style>
    @import '../scss/charCombatStats.css';
</style>

<script>
  import { mapState, mapGetters, mapMutations } from 'vuex';
    export default{
        name: 'char-combat-stats',
        props: {
            size: { type: Number, default: 0 },
            armor: { type: Number, default: 10 },
        },
        data() {
            return {
                AC: {
                    base: 10,
                    shield: 0,
                    natArmor: 1,
                    deflection: 0,
                    misc: 0,
                },
                saveThrow: {
                    reflex: {
                        base: 5,
                        spellMod: 0,
                        misc: 0,
                        temp: 0,
                    },
                    will: {
                        base: 5,
                        spellMod: 0,
                        misc: 0,
                        temp: 0,
                    },
                    fortitude: {
                        base: 5,
                        spellMod: 0,
                        misc: 0,
                        temp: 0,
                    }
                },
                hasMoreAttacks: false,
                howManyAttacks: 1,
                combatManouver: {
                    base: 10,
                    misc: 0,
                },
                spellResistence: 0,
            }
        },
        computed: {
            ...mapState('combat', [
                'gab',
            ]),
            ...mapGetters(
                'attributes', [
                    'strMod',
                    'dexMod',
                    'conMod',
                    'wisMod',
            ]),
        },
        methods: {
            ...mapMutations('combat', [
                'changeGAB',
            ]),
        },
    }
</script>