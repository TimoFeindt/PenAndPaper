<template>
    <section class="charDesc">
        <h3> Ich bin die Character Beschreibung & Leben & Bewegung </h3>
        <div class="charDesc__container">
            <div class="charDesc__container--innerOne">
                <div class="charDesc__box">
                    <div class="charDesc__name">Name:</div>
                    <div class="charDesc__value">{{ baseInfo.name }}</div>
                </div>
                <div class="charDesc__box">
                    <div class="charDesc__name">Klass:</div>
                    <div class="charDesc__value">{{ baseInfo.class }}</div>
                </div>
                <div class="charDesc__box">
                    <div class="charDesc__name">Level:</div>
                    <div class="charDesc__value">{{ baseInfo.level }}</div>
                </div>
                <div class="charDesc__box">
                    <div class="charDesc__name">Race:</div>
                    <div class="charDesc__value">{{ baseInfo.race }}</div>
                </div>
                <div class="charDesc__box">
                    <div class="charDesc__name">Hometown:</div>
                    <div class="charDesc__value">{{ baseInfo.hometown }}</div>
                </div>
                <div class="charDesc__box">
                    <div class="charDesc__name">Deity:</div>
                    <div class="charDesc__value">{{ baseInfo.deity }}</div>
                </div>
                <div class="charDesc__box">
                    <div class="charDesc__name">Size:</div>
                    <div class="charDesc__value">{{ baseInfo.size }}</div>
                </div>
            </div>
            <div class="charDesc__container--innerTwo">
                <h4>Bewegung</h4>
                <div class="charDesc__box">
                    <div class="charDesc__name">Movement:</div>
                    <div class="charDesc__value">{{ baseInfo.movement.normal }}</div>
                </div>
                <div class="charDesc__box">
                    <div class="charDesc__name">Swim:</div>
                    <div class="charDesc__value">{{ baseInfo.movement.swim }}</div>
                </div>
                <div class="charDesc__box">
                    <div class="charDesc__name">Fly:</div>
                    <div class="charDesc__value">{{ baseInfo.movement.fly }}</div>
                </div>
            </div>
        </div>
    </section>
</template>
  
<style>
    @import '../scss/charDesc.css';
</style>
<script>
  
    export default {
        name: 'char-description',
        data() {
            return {
                baseInfo: {
                    name: 'Firstname Lastname',
                    class: 'class',
                    level: 1,
                    race: 'Human',
                    hometown: 'tel rafin',
                    deity: 'Doombringer',
                    size: 'medium',
                    movement: {
                        normal: 18,
                        swim: 9,
                        fly: 3,
                    }
                }
            }
        }
    }
</script>