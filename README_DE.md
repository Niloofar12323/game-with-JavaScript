# **Labyrinth of Lies**  
*Labyrinth of Lies* ist ein textbasiertes Abenteuerspiel, bei dem du durch ein dunkles Labyrinth voller Rätsel, gefährlicher Begegnungen und einem geheimen Verräter geführt wirst.  
**Ziel**: Das Labyrinth durchqueren und das versteckte Mafia-Mitglied unter deinen Mitstreitern entlarven.

---

## **Spielmechanik:**
1. **Erkundung des Labyrinths**  
   Du bewegst dich in **vier Richtungen** (Nord, Süd, Ost, West) und triffst auf **zufällige Ereignisse**:
   
   - **Rätsel:**  
     Löse **intellektuelle Herausforderungen**, um nützliche Gegenstände wie Schlüssel zu gewinnen oder Lebenspunkte zu verlieren.

   - **Glücksspiel (Roulette des Schicksals):**  
     Ein **Glücksspiel**, bei dem du entweder positive oder negative Konsequenzen erfahren kannst. Dies kann **deine Gesundheit** oder dein Inventar beeinflussen.

   - **Mafia-Begegnungen:**  
     Einer deiner Mitstreiter (Alice, Bob oder Charlie) ist das Mafia-Mitglied. Du musst **hinweise sammeln** und den **Verräter entlarven**. Beschuldigungen können **Lebenspunkte kosten**, wenn du falsch liegst.

   - **Poker:**  
     Spiele ein **Poker-Minispiel** gegen das Spiel selbst. Gewinne Lebenspunkte und einen speziellen Gegenstand, wenn du den Dealer schlägst.

---

## **Spielablauf:**
1. **Labyrinth-Erkundung:**  
   Du beginnst im dunklen Labyrinth und wirst nach deiner gewünschten **Himmelsrichtung** (Nord, Süd, Ost, West) gefragt. Deine Entscheidungen führen zu verschiedenen zufälligen Ereignissen: **Rätsel**, **Roulette**, **Poker** oder **Mafia-Begegnungen**.

2. **Inventar und Gegenstände:**  
   Während des Spiels sammelst du **nützliche Gegenstände** wie Schlüssel, Karten und besondere Items. Diese helfen dir, im Labyrinth voranzukommen oder dich vor negativen Ereignissen zu schützen.

3. **Mafia-Mechanik:**  
   Ein zentrales Element des Spiels ist die **Social Deduction**. Deine Mitstreiter verhalten sich manchmal verdächtig, und du musst herausfinden, wer das Mafia-Mitglied ist. **Richtiges Raten** führt zum Sieg, aber falsche Beschuldigungen kosten **Lebenspunkte**.

4. **Gesundheitssystem:**  
   Du startest mit **100 Lebenspunkten**. Verschiedene Ereignisse wie falsche Rätselantworten oder verlorene Pokerpartien reduzieren deine Lebenspunkte. Wenn deine **Lebenspunkte auf 0** fallen, endet das Spiel.

5. **Siegesbedingungen:**  
   Das Spiel endet, wenn du entweder **Position 10** im Labyrinth erreichst oder das Mafia-Mitglied **enttarnst**. Wenn du deine Lebenspunkte verlierst oder das Labyrinth aufgibst, hast du verloren.

---

## **Code-Übersicht**

### **Wichtige Funktionen:**
- `exploreMaze()`: Die Hauptfunktion, die die Erkundung des Labyrinths und die Ereignissteuerung übernimmt.
- `encounterPuzzle()`: Steuert das Rätsel-Event und belohnt den Spieler bei richtiger Lösung oder bestraft bei falscher Antwort.
- `encounterRoulette()`: Simuliert das Roulette-Event mit zufälligen positiven oder negativen Ergebnissen.
- `encounterMafia()`: Löst Begegnungen mit Mitstreitern aus, bei denen du Verdacht schöpfen und den Verräter beschuldigen kannst.
- `encounterPoker()`: Führt das Poker-Minispiel durch, in dem du gegen den Dealer antrittst.
- `checkHealth()`: Überprüft den Gesundheitsstatus des Spielers. Wenn die Gesundheit auf 0 fällt, endet das Spiel.

---

## **Variablen und Spielzustände**
- `health`: Die Lebenspunkte des Spielers, die durch verschiedene Ereignisse beeinflusst werden.
- `inventory`: Eine Liste der Gegenstände, die der Spieler während des Spiels sammelt.
- `mazePosition`: Der Fortschritt des Spielers im Labyrinth. Das Spiel endet, wenn **Position 10** erreicht wird.
- `fellowExplorers`: Die Liste der Mitstreiter, von denen einer als Mafia-Mitglied zufällig ausgewählt wird.
- `suspicion`: Eine Zählvariable, die den **Verdacht gegenüber jedem Begleiter** protokolliert.

---

## **Mitwirkende**
Das Spiel wurde als Beispiel entwickelt, um verschiedene **Gameplay-Mechaniken** (wie **Social Deduction**, **Minispiele** und **Rätsel**) in einem **textbasierten Format** zu kombinieren.

---

## **Lizenz**
Dieses Projekt steht unter der **MIT-Lizenz**. Details dazu findest du in der LICENSE-Datei.
