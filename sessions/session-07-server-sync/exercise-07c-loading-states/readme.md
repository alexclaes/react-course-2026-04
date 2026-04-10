[Zurück zur Session-Übersicht](../readme.md)

**Session 07 - Übung C**

# Ladezustände behandeln

## Ziel

Einen Ladezustand anzeigen, solange die Daten vom Server noch nicht angekommen sind.

## Hintergrund

Jetzt, wo die Beiträge vom Server geladen werden, gibt es einen kurzen Moment nach dem Seitenaufruf, in dem das `posts`-Array leer ist (`useState([])`). Die Daten vom Server sind noch nicht angekommen.

In dieser Zeit zeigt die Beitragsliste nichts an, und die Detailseite gibt eine leere Seite zurück. Besser wäre es, dem Benutzer einen Ladezustand anzuzeigen, damit er weiss, dass die Daten unterwegs sind.

## Aufgabe 1: Ladezustand in der PostList-Komponente

Füge vor dem `return` eine Pruefung ein. Wenn das `posts`-Array leer ist, zeige eine Lademeldung an:

```jsx
if (posts.length === 0) {
  return <p>Laden...</p>;
}
```

## Aufgabe 2: Ladezustand in der PostDetailsPage

Füge vor dem Suchen des Posts eine Pruefung ein. Wenn das `posts`-Array leer ist, zeige eine Lademeldung an:

```jsx
if (posts.length === 0) {
  return <p>Laden...</p>;
}
```