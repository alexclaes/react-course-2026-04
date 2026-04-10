**Session 01 - Übung G**

# React-Anwendungen debuggen

In dieser Übung lernst du wichtige Werkzeuge zum Debuggen von React-Anwendungen kennen. Es gibt keine Code-Änderungen zum Behalten: dies ist eine praktische Anleitung zu Debugging-Techniken, die du im gesamten Kurs verwenden wirst.

## Aufgabe 1: `console.log` in React verwenden

`console.log` ist der einfachste Weg, um zu überprüfen, was in deinem Code passiert. In React kannst du es innerhalb einer Component-Funktion platzieren, um zu sehen, wann diese Component gerendert wird und mit welchen Werten sie arbeitet.

### Schritt 1: Ein Log zur App-Component hinzufügen

Öffne `src/App.jsx` in deinem Editor. Füge ein `console.log`-Statement innerhalb der `App`-Funktion hinzu, **vor** dem `return`-Statement:

```jsx
export default function App() {
  console.log('App-Component gerendert');

  return (
    <div className="App">
      <Header />
      <Post />
    </div>
  );
}
```

### Schritt 2: Die Ausgabe im Browser ansehen

1. Öffne deinen Browser mit der laufenden App.
2. Drücke **F12**, um die Browser-DevTools zu öffnen.
3. Klicke auf den **Console**-Tab.
4. Du solltest die Nachricht `App-Component gerendert` in der Konsole sehen.

### Schritt 3: Ein Log zur Post-Component hinzufügen

Öffne `src/components/Post.jsx` und mache dasselbe: füge ein `console.log` vor dem `return`-Statement hinzu:

```jsx
export default function Post() {
  console.log('Post-Component gerendert');

  return <article className="Post">...</article>;
}
```

Speichere die Datei und überprüfe den Console-Tab erneut. Du solltest jetzt beide Nachrichten sehen:

```
App-Component gerendert
Post-Component gerendert
```

Jedes Mal, wenn React eine Component rendert, wird die Funktion von oben nach unten ausgeführt. `console.log` hilft dir zu sehen, **wann** und **wie oft** Components gerendert werden.

### Schritt 4: Aufräumen

Wenn du mit dem Debuggen fertig bist, **entferne deine `console.log`-Statements**.

---

## Aufgabe 2: React Developer Tools in Microsoft Edge installieren

React Developer Tools ist eine Browser-Erweiterung, die dir eine visuelle Ansicht deines React-Component-Baums gibt. Sie ist eines der nützlichsten Werkzeuge für die React-Entwicklung.

### Schritt 1: Die Erweiterung installieren

1. Öffne **Microsoft Edge**.
2. Klicke auf das **Drei-Punkte-Menü** (das "..."-Symbol in der oberen rechten Ecke) und gehe zu **Erweiterungen** und dann **Microsoft Edge Add-ons öffnen**.
   - Oder navigiere direkt zu `https://microsoftedge.microsoft.com/addons` in deiner Adressleiste.
3. Verwende die Suchleiste, um nach **React Developer Tools** zu suchen.
4. Klicke auf **Abrufen**, um die Erweiterung zu installieren.
5. Möglicherweise musst du den **Browser nach der Installation neu starten**.

### Schritt 2: Die React DevTools öffnen

1. Stelle sicher, dass deine Message Board-App läuft (`npm run dev`) und öffne sie in Edge.
2. Drücke **F12**, um die Browser-DevTools zu öffnen.
3. Sieh dir die Tab-Leiste oben in den DevTools an. Du solltest zwei neue Tabs sehen: **Components** und **Profiler**.
   - Falls du sie nicht sofort siehst, suche nach dem **">>"**-Überlauf-Button am Ende der Tab-Leiste: sie könnten dort versteckt sein.
4. Klicke auf den **Components**-Tab.

### Schritt 3: Den Component-Baum erkunden

Im Components-Tab siehst du den React-Component-Baum. Er sollte ungefähr so aussehen:

```
App
  Header
  Post
```

Dies ist **nicht** das HTML-DOM: es ist die tatsächliche React-Component-Struktur. Du kannst sehen, wie deine Components ineinander verschachtelt sind.

### Schritt 4: Eine Component untersuchen

1. Klicke auf **Post** im Component-Baum.
2. Sieh dir das rechte Panel an. Es zeigt Details über die ausgewählte Component, einschließlich ihrer **Props** und **Hooks** (diese lernst du in späteren Sessions kennen).
3. Versuche, auf **Header** und **App** zu klicken, um auch deren Details zu sehen.

Der Components-Tab zeigt dir den React-Component-Baum: nicht das HTML-DOM, sondern die tatsächliche React-Struktur. Dies wird sehr nützlich, wenn du in späteren Sessions mit Props und State arbeitest.