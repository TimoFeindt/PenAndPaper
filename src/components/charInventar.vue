<template>
    <section class="charInv basicBoxLayout">
        <h1>Inventar</h1>
        <ul>
            <li v-for="item in items" :key="item.name">
                <div>{{ item.name }}</div>
                <div>{{ item.desc }}</div>
                <div>{{ item.weight }}</div>
                <div>{{ item.costs }}</div>
                <div>{{ item.amount }}</div>
            </li>
        </ul>
    </section>
</template>
  
<script>
  
    export default {
        name: 'char-inventar',
        data() {
            return {
                items: {
                    item1: {
                        name: 'Schlafsack',
                        desc: 'Benötigt für eine erholsame Rast',
                        weight: '1 kg',
                        costs: '1 SM',
                        amount: '1' 
                    },
                    item2: {
                        name: 'Rucksack',
                        desc: 'Zum Tragen von Waren benötigt',
                        weight: '0.5 kg',
                        costs: '1 SM',
                        amount: '1' 
                    },
                    item3: {
                        name: 'Heiltrank',
                        desc: 'Stellt 1W4 + 2 TP wieder her',
                        weight: '0.2 kg',
                        costs: '50 GM',
                        amount: '3' 
                    }

                }
            }
        }
    }
</script>