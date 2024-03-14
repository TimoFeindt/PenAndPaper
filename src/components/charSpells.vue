<template>
    <section class="charSpells">
        <h1>Spell-Liste</h1>
        <h2>USE SLOTS!</h2>
        <ul>
            <li v-for="spell in spells" :key="spell.spellName"> 
                <div>{{ spell.spellSchool }}</div> 
                <div>{{ spell.spellRank }}</div> 
                <div>{{ spell.spellComponents }}</div> 
                <div>{{ spell.spellName }}</div> 
                <div>{{ spell.spellDesc }}</div> 
                <div>{{ spell.spellRange }}</div> 
                <div>{{ spell.spellTarget }}</div> 
                <div>{{ spell.spellDuration }}</div> 
                <div>{{ spell.spellSave }}</div> 
                <div>{{ spell.spellRes }}</div> 
                <div>{{ spell.spellCastTime }}</div> 
            </li>
        </ul>
    </section>
</template>
  
<script>
    export default {
        name: 'char-spells',
        data() {
            return {
                spells: {
                    spell1: {
                        spellName: 'Gefahrensinn',
                        spellDesc: 'Eine von Gefahrensinn betroffene Kreatur ist imstande, Gefahren zu spüren. Wenn die Kreatur während der Wirkungsdauer des Zaubers erstmals einen Wurf auf Initiative machen muss, addiert sie auf diesen Wurf einen Verständnisbonus in Höhe ihrer Zauberstufe (Maximum +5). Wenn der Bonus einmal zum Tragen gekommen ist, endet der Effekt des Zaubers.',
                        spellRank: 'ALC 1, BAR 1, HXM/MAG 1, WAL 1',
                        spellComponents: 'V,G',
                        spellRange: 'Berührung',
                        spellTarget: 'Berührte Kreatur',
                        spellDuration: '1 Min/Stufe oder bis aktiviert',
                        spellSave: 'Willen, keine Wirkung',
                        spellRes: 'Ja',
                        spellCastTime: '1 Standard-Aktion',
                        spellSchool: 'Erkenntnis'
                    },
                    spell2: {
                        spellName: 'Erzwungene Stille',
                        spellDesc: 'Mit einer Geste dämpfst du jedes Geräusch um das Ziel herum und machst es unfähig, zu schreien oder anderweitig laute Geräusche zu machen. Dies stört das Ziel nicht am Zaubern. Das Ziel kann immer noch Schalleffekte nutzen, allerdings sinkt der SG dieser Effekte um -2. Das Ziel erhält einen Bonus von +2 auf Rettungswürfe gegen Schalleffekte und einen Situationsbonus von +4 bei Würfen auf Heimlichkeit.',
                        spellRank: 'BAR 1, HEX 1, HXM/MAG 1, INQ 1',
                        spellComponents: 'G',
                        spellRange: 'Mittel (30 m +3 m/Stufe)',
                        spellTarget: '1 Kreatur',
                        spellDuration: '1 Runde/Stufe',
                        spellSave: 'Willen, keine Wirkung',
                        spellRes: 'Ja',
                        spellCastTime: '1 Standard-Aktion',
                        spellSchool: 'Verwandlung [Schall]'
                    },
                    spell3: {
                        spellName: 'Instrument spielen',
                        spellDesc: 'Du kannst ein Instrument deiner Wahl spielen, als hättest du 1 Fertigkeitsrang in der passenden Fertigkeit Auftreten. Statt eines gewöhnlichen Instruments kannst du einen Gegenstand als improvisiertes Instrument benutzen, z.B. ein Fass als Trommel oder einen Bogen als Harfe, und es spielen, als wäre es zum Spielen von Musik gebaut worden.',
                        spellRank: 'BAR 1',
                        spellComponents: 'V,G',
                        spellRange: 'Persönlich',
                        spellTarget: 'Selbst',
                        spellDuration: '10 Min./Stufe',
                        spellSave: '-',
                        spellRes: '-',
                        spellCastTime: '1 Standard-Aktion',
                        spellSchool: 'Erkenntnis'
                    },
                    spell4: {
                        spellName: 'Kochendes Blut',
                        spellDesc: 'Das Blut der Zielkreaturen beginnt zu kochen. Sollte einem Ziel der Rettungswurf misslingen, erleidet es in jeder Runde 1 Punkt Feuerschaden. Dieser Zauber wirkt nicht auf Kreaturen, die kein Blut besitzen. Sollte das Ziel der Unterart „Ork“ angehören, erleidet es keinen Feuerschaden, sondern erhält einen Moralbonus von +2 auf Stärke.',
                        spellRank: 'BAR 2, HEX 2, HXM/MAG 2, KLE 2',
                        spellComponents: 'V,G',
                        spellRange: 'Mittel (30 m + 3 m/Stufe)',
                        spellTarget: '1 Kreatur pro 3 Stufen, von denen keine weiter als 9 m von der anderen entfernt sein darf.',
                        spellDuration: 'Konzentration + 1 Runde/Stufe (A)',
                        spellSave: 'Zähigkeit, keine Wirkung (siehe Text)',
                        spellRes: 'Ja',
                        spellCastTime: '1 Standard-Aktion',
                        spellSchool: 'Verwandlung'
                    },
                    spell5: {
                        spellName: 'Ablenkung',
                        spellDesc: 'Du wirst unsichtbar, als würde Mächtige Unsichtbarkeit, ein Fehlgefühl, auf dich wirken. Zeitgleich entsteht ein illusionärer Doppelgänger deiner selbst (wie mit dem Zauber Mächtiges Trugbild, eine Einbildung). Du kannst tun, was du willst, während dein Doppelgänger sich fortbewegt. Der Doppelgänger erscheint innerhalb der Reichweite des Zaubers, kann danach aber hingehen, wo du ihn hin lenkst (dafür musst du dich ab der ersten Runde, nachdem der Zauber gewirkt wurde, konzentrieren). Du kannst die Illusion auch über deinem eigenen Körper erscheinen lassen, so dass Beobachter nicht merken, dass sie erscheint und du unsichtbar wirst. Du und die Illusion können sich in unterschiedliche Richtungen bewegen. Der Doppelgänger bewegt sich mit deiner Bewegungsrate, kann sprechen und gestikulieren, als sei er echt, kann aber weder angreifen noch Zauber wirken – so tun als ob, ist ihm aber natürlich möglich. Der Doppelgänger hält solange, wie du dich auf ihn konzentrierst plus 3 weitere Runden. Hörst du auf, dich zu konzentrieren, macht die Illusion solange das weiter, was sie bisher getan hat, bis die Wirkungsdauer endet. Die Mächtige Unsichtbarkeit wirkt 1 Runde pro Stufe, egal ob du dich konzentrierst oder nicht.',
                        spellRank: 'BAR 5, HXM/MAG 6',
                        spellComponents: 'G',
                        spellRange: 'Nah (7,50 m + 1,50 m/2 Stufen)',
                        spellTarget: 'Du/ein illusionärer Doppelgänger',
                        spellDuration: ' 1 Runde/Stufe (A) und Konzentration + 3 Runde (siehe Text)',
                        spellSave: 'Nein oder Willen, anzweifeln (falls mit der Illusion interagiert wird), siehe Text',
                        spellRes: 'Nein',
                        spellCastTime: '1 Standard-Aktion',
                        spellSchool: 'Illusion (Einbildung,Fehlgefühl)'
                    },
                }
            }
        }
    }
</script>