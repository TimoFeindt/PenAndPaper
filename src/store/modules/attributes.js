const attributes = {
    namespaced: true,
    state: {
        strength: {
            name: 'strength',
            base: 10,
            mod: 0 ,
        },
        dexterity: {
            name: 'dexterity',
            base: 10,
            mod: 0,
        },
        constitution: {
            name: 'constitution',
            base: 10,
            mod: 0,
        },
        intelligence: {
            name: 'intelligence',
            base: 10,
            mod: 0,
        },
        wisdom: {
            name: 'wisdom',
            base: 10,
            mod: 0,
        },
        charism: {
            name: 'charism',
            base: 10,
            mod: 0,
        },
        initiativ: 0,
    },
    getters: {
        strMod(state) {
            let strModifier = state.strength.mod;
            if(state.strength.base >= 10) {
                strModifier = Math.floor((state.strength.base - 10) / 2);
            } else if(state.strength.base === 9 || state.strength.base === 8) {
                strModifier = -1
            } else if(state.strength.base === 7 || state.strength.base === 6) {
                strModifier = -2
            } else if(state.strength.base === 5 || state.strength.base === 4) {
                strModifier = -3
            } else if(state.strength.base === 3 || state.strength.base === 2) {
                strModifier = -4
            } else if(state.strength.base === 1 ) {
                strModifier = -5
            }
            return strModifier;
        },
        dexMod(state) {
            if(state.dexterity.base >= 10) {
                state.dexterity.mod = Math.floor((state.dexterity.base - 10) / 2);
            } else if(state.dexterity.base === 9 || state.dexterity.base === 8) {
                state.dexterity.mod = -1
            } else if(state.dexterity.base === 7 || state.dexterity.base === 6) {
                state.dexterity.mod = -2
            } else if(state.dexterity.base === 5 || state.dexterity.base === 4) {
                state.dexterity.mod = -3
            } else if(state.dexterity.base === 3 || state.dexterity.base === 2) {
                state.dexterity.mod = -4
            } else if(state.dexterity.base === 1 ) {
                state.dexterity.mod = -5
            }
            return state.dexterity.mod;
        },
        conMod(state) {
            if(state.constitution.base >= 10) {
                state.constitution.mod = Math.floor((state.constitution.base - 10) / 2);
            } else if(state.constitution.base === 9 || state.constitution.base === 8) {
                state.constitution.mod = -1
            } else if(state.constitution.base === 7 || state.constitution.base === 6) {
                state.constitution.mod = -2
            } else if(state.constitution.base === 5 || state.constitution.base === 4) {
                state.constitution.mod = -3
            } else if(state.constitution.base === 3 || state.constitution.base === 2) {
                state.constitution.mod = -4
            } else if(state.constitution.base === 1 ) {
                state.constitution.mod = -5
            }
            return state.constitution.mod;
        },
        intMod(state) {
            if(state.intelligence.base >= 10) {
                state.intelligence.mod = Math.floor((state.intelligence.base - 10) / 2);
            } else if(state.intelligence.base === 9 || state.intelligence.base === 8) {
                state.intelligence.mod = -1
            } else if(state.intelligence.base === 7 || state.intelligence.base === 6) {
                state.intelligence.mod = -2
            } else if(state.intelligence.base === 5 || state.intelligence.base === 4) {
                state.intelligence.mod = -3
            } else if(state.intelligence.base === 3 || state.intelligence.base === 2) {
                state.intelligence.mod = -4
            } else if(state.intelligence.base === 1 ) {
                state.intelligence.mod = -5
            }
            return state.intelligence.mod;
        },
        wisMod(state) {
            if(state.wisdom.base >= 10) {
                state.wisdom.mod = Math.floor((state.wisdom.base - 10) / 2);
            } else if(state.wisdom.base === 9 || state.wisdom.base === 8) {
                state.wisdom.mod = -1
            } else if(state.wisdom.base === 7 || state.wisdom.base === 6) {
                state.wisdom.mod = -2
            } else if(state.wisdom.base === 5 || state.wisdom.base === 4) {
                state.wisdom.mod = -3
            } else if(state.wisdom.base === 3 || state.wisdom.base === 2) {
                state.wisdom.mod = -4
            } else if(state.wisdom.base === 1 ) {
                state.wisdom.mod = -5
            }
            return state.wisdom.mod;
        },
        chaMod(state) {
            if(state.charism.base >= 10) {
                state.charism.mod = Math.floor((state.charism.base - 10) / 2);
            } else if(state.charism.base === 9 || state.charism.base === 8) {
                state.charism.mod = -1
            } else if(state.charism.base === 7 || state.charism.base === 6) {
                state.charism.mod = -2
            } else if(state.charism.base === 5 || state.charism.base === 4) {
                state.charism.mod = -3
            } else if(state.charism.base === 3 || state.charism.base === 2) {
                state.charism.mod = -4
            } else if(state.charism.base === 1 ) {
                state.charism.mod = -5
            }
            return state.charism.mod;
        },
    },
    mutations: {
        changeAttr(state, payload) {
            if(payload.name === state.strength.name) {
                if(payload.type === 'decrease') {
                    state.strength.base--
                } else {
                    state.strength.base++
                }
            } else if(payload.name === state.dexterity.name) {
                if(payload.type === 'decrease') {
                    state.dexterity.base--
                } else {
                    state.dexterity.base++
                }
            } else if(payload.name === state.constitution.name) {
                if(payload.type === 'decrease') {
                    state.constitution.base--
                } else {
                    state.constitution.base++
                }
            } else if(payload.name === state.intelligence.name) {
                if(payload.type === 'decrease') {
                    state.intelligence.base--
                } else {
                    state.intelligence.base++
                }
            } else if(payload.name === state.wisdom.name) {
                if(payload.type === 'decrease') {
                    state.wisdom.base--
                } else {
                    state.wisdom.base++
                }
            } else if(payload.name === state.charism.name) {
                if(payload.type === 'decrease') {
                    state.charism.base--
                } else {
                    state.charism.base++
                }
            }            
        }
    },
};
export default attributes