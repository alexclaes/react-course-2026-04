[Zurück zur Session-Übersicht](../readme.md)

**Session 08 - Übung B**

# Debugging mit Breakpoints im Browser

## Ziel

Die Entwicklertools von Microsoft Edge kennenlernen und verstehen, wie man mit Breakpoints und Sourcemaps gezielt React-Code debuggt: direkt im Browser.

## Hintergrund

`console.log` ist oft das erste Werkzeug beim Debuggen. Es hat aber Grenzen: Man muss den Code ändern, speichern, die Seite neu laden und die Ausgabe in der Konsole suchen. Breakpoints sind mächtiger: sie pausieren die Ausführung an einer bestimmten Stelle, sodass man den gesamten Zustand (Variablen, Props, State) in Echtzeit inspizieren kann, ohne den Code zu verändern.

**Was sind Sourcemaps?** Vite bündelt und transformiert den Code für den Browser. Dabei gehen Dateinamen und Zeilennummern verloren. Sourcemaps sind Dateien, die der Browser automatisch lädt und die eine Zuordnung zwischen dem gebündelten Code und dem Originalcode herstellen. Dadurch sieht man in den Entwicklertools die eigenen `.jsx`-Dateien: nicht den transformierten Code.

## Aufgabe: Breakpoints setzen und den Code inspizieren

### Schritt 1: Entwicklertools öffnen

Starte die App mit `npm run dev` und öffne sie in **Microsoft Edge**.

Öffne die Entwicklertools mit `F12` oder `Strg + Umschalt + I`.

Wechsle zum Tab **"Quellen"** (englisch: "Sources").

### Schritt 2: Quelldateien über Sourcemaps finden

Im linken Bereich des Quellen-Tabs siehst du einen Dateibaum. Dank Sourcemaps erscheinen dort die originalen Projektdateien.

Navigiere zu: **src** → **components** → **PostList.jsx**

> **Tipp:** Nutze `Strg + P`, um eine Datei schnell nach Namen zu suchen: tippe z.B. `PostList` und wähle die Datei aus der Liste.

Du solltest den originalen JSX-Code sehen: nicht den vom Browser transformierten Code. Das ist die Sourcemap in Aktion.

### Schritt 3: Einen Breakpoint setzen

Klicke im Quellen-Tab auf die **Zeilennummer** neben der Zeile, in der `filteredPosts` berechnet wird (die `.filter()`-Zeile in `PostList.jsx`).

Ein Marker für den Breakpoint erscheint.

### Schritt 4: Den Breakpoint auslösen

Gib einen Buchstaben in das Suchfeld der App ein. Die Seite pausiert, sobald die Zeile mit dem Breakpoint erreicht wird.

Du erkennst den pausierten Zustand an:
- Die Zeile wird farbig hervorgehoben.
- Oben erscheinen Steuerelemente zum Fortsetzen und Durchsteppen.
- Im rechten Bereich erscheint der Abschnitt **"Bereich"** (englisch: "Scope") mit allen aktuellen Variablen.

### Schritt 5: Variablen inspizieren

Schau dir im Abschnitt **"Bereich"** (Scope) die aktuellen Werte an:

- **`posts`**: das Array aller Beiträge aus dem Context
- **`state`**: das Reducer-State-Objekt mit `searchTerm`, `sortField` und `sortDirection`
- **`state.searchTerm`**: der aktuelle Suchbegriff, den du gerade eingegeben hast

> **Tipp:** Fahre mit der Maus über eine Variable direkt im Code: ein Tooltip zeigt den aktuellen Wert an.

### Schritt 6: Schrittweise durch den Code gehen

Nutze die Steuerelemente oben im Quellen-Tab:

| Button | Tastenkürzel | Funktion |
|--------|--------------|----------|
| ▶ Fortsetzen | `F8` | Führt den Code bis zum nächsten Breakpoint weiter aus |
| ⤵ Einzelschritt | `F10` | Springt zur nächsten Zeile (überspringt Funktionsaufrufe) |
| ⤓ Hineinspringen | `F11` | Springt in einen Funktionsaufruf hinein |
| ⤒ Herausspringen | `Umschalt + F11` | Springt aus der aktuellen Funktion heraus |

Drücke `F10`, um Zeile für Zeile durch die Filter- und Sortierlogik zu gehen. Beobachte, wie sich die Variablen im Bereich-Panel nach jedem Schritt aktualisieren.

### Schritt 7: Einen bedingten Breakpoint setzen

Klicke mit der **rechten Maustaste** auf eine Zeilennummer und wähle **"Bedingten Haltepunkt hinzufügen"** (englisch: "Add conditional breakpoint").

Gib eine Bedingung ein, z.B.:

```
state.searchTerm.length > 2
```

Dieser Breakpoint pausiert nur, wenn der Suchbegriff länger als 2 Zeichen ist. Das ist nützlich, um nicht bei jedem Tastendruck zu pausieren.

### Schritt 8: Breakpoints verwalten und entfernen

Im rechten Bereich des Quellen-Tabs gibt es den Abschnitt **"Haltepunkte"** (Breakpoints). Dort siehst du alle gesetzten Breakpoints und kannst sie:

- **Deaktivieren**: Klicke auf das Kontrollkästchen, um einen Breakpoint temporär auszuschalten.
- **Entfernen**: Klicke erneut auf die Zeilennummer im Code, um den Breakpoint zu löschen.
- **Alle deaktivieren**: Nutze das Symbol oben im Haltepunkte-Abschnitt.