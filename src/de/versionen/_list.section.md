# Version 2.4

> 2025-03-03

sketchometry 2.4 führt eine neue Einstellung ein:
Ab sofort kann festgelegt werden, ob "Ziehen" und "Konstruieren" in Kombination oder nur exklusiv genutzt werden können.
Das vereinfacht die Bedienung in den unteren Jahrgangsstufen. 

Außerdem haben wir ein paar Änderungen an der Oberfläche vorgenommen:

- Multitools in der Werkzeugleiste haben jetzt ebenfalls Icons.
- Die Darstellung von PopUps auf iOS-Geräten wurde verbessert.
- Unter "Eigenschaften" findet sich nun nicht mehr der verwirrende Eintrag "Oberfläche".

Dazu kommen natürlich wieder einige Fehlerbehebungen und Verbesserungen.
Vielen Dank an alle Hinweisgeber und Berater!

# Version 2.3.6

> 2025-02-21

Diese Version behebt einen kleinen Fehler beim Migrieren von Version 1.

# Version 2.3.5

> 2025-02-19

Die neue Version von sketchometry hält eine ganze Fülle an Fehlerbehebungen und Verbesserungen bereit. Untere anderem:

- Die Sprache kann nun auf `auto` gestellt werden, sodass immer eine zum System passende Sprache verwendet wird.
- Die Anzeige der Menü- und Werkzeugleiste an verschiedenen Positionen wurde verbessert. Hier hatte sich einiges überlappt.
- Ein Fehler bei manchen alten Konstruktionen konnte dazu führen, dass der Migrationsprozess unterbrochen wird und die App nicht mehr geöffnet werden kann. Dies ist nun behoben.
- Die Geste für Parallele und Winkelhalbierende funktioniert nun auch in einer Leeren Zeichenfläche mit eingeschalteten Achsen.

# Version 2.3.4

> 2025-02-07

Mit dieser Version veröffentlichen wir eine voll funktionsfähige App für Apple iOS und iPadOS.

Aus technischen Gründen wurden beim Update der iOS-App auf die letzte Version (2.3.3) die Konstruktionen bereits installierter, älterer sketchometry-Version (bis 1.5.3) *nicht* übernommen.
**Dieser Fehler ist nun behoben.**

Außerdem bringt diese Version natürlich wieder eine Reihe weiterer Verbesserungen mit sich.

# Version 2.3.3

> 2025-02-06

Diese Version behebt einen gravierenden Fehler, durch den der Import nicht mehr möglich war.

Außerdem wurden einige Verbesserungen im Hinblick auf die iOS-App vorgenommen:
Aus technischen Gründen wurden beim Update der iOS-App auf Version 2.3.2 Konstruktionen bereits
installierter, älterer sketchometry-Version (bis 1.5.3) nicht übernommen.
Dies soll künftig verhindert werden (mehr dazu siehe Release-Informationen der App).

# Version 2.3.2

> 2025-01-31

Wir sind stolz, die neue Version 2.3.2 von sketchometry anzukündigen.
Diese Version bereitet die Veröffentlichung als App für Apple iOS und padOS vor.

Außerdem sind ein paar Fehlerbehebungen enthalten, z.B. beim Ziehen von Texten und Messungen.
Bei der Eingabe von Texten und Funktionstermen wird nun automatisch die Tastatur geöffnet.
Die Eingabe kann mit `Enter` beendet werden.

# Version 2.3.1

> 2025-01-23

Dieser Release behebt einen Fehler, der bei der Veröffentlichung von Version 2.3 passiert war.

# Version 2.3

> 2025-01-22

Wir sind stolz, die neue Version 2.3 von sketchometry anzukündigen.
Diese Version beinhaltet sehr große Verbesserungen in der internen Verwaltung der Eigenschaften von Objekten.

Außerdem wurden einige kleinere Änderungen und Verbesserungen vorgenommen, unter anderem:

- Zeige den Term einer Funktion in den Eigenschaften als MathJax.
- Verhindere, dass die untere Grenze eines Funktionsgraphs über der oberen liegt.
- Füge einige Eigenschaften für die Achsen-Unterteilung hin.
- Fokussiere das Eingabefeld beim Öffnen des Editors (z.B. Funktionsterm-Eingabe).

# Version 2.2.2

> 2024-12-13

Heute wird Version 2.2.2. veröffentlicht.

Diese Version enthält eine sehr viele Verbesserungen und Fehlerbehebungen, die gar nicht alle aufzuzählen sind.
Hier nur ein paar Highlights:

- Beim Export als `.html`-Datei wird zukünftig MathJax und die sketchometry-Schriftart mit eingebunden.   
  Dadurch können Messungen und Texte auch hier korrekt angezeigt werden.
- Es wird in der Gestenvorschau besser zwischen "Senkrechte" und "Lotstrecke" unterschieden.   
  Außerdem konnte die Erkennung von diesen beiden Gesten erheblich verbessert werden.
- Die Darstellung und Manipulation von Polygonen konnte verbessert werden.
- Dazu kommen viele weitere interne Verbesserungen, die sketchometry noch schneller und effizienter machen.

Viel Spaß mit der neuen Version!

**Schon sehr bald werden auch die Apple- und Android-App von sketchometry aktualisiert. Spätestens Ende Januar ist es so weit!**

Das Team von sketchometry wünscht allen frohe Weihnachten und einen guten Start ins neue Jahr!

# Version 2.2.1

> 2024-10-22

Die Version 2.2.1 bringt einige Fehlerbehebungen und Verbesserungen mit sich.
Unter anderem betreffen diese Senkrechte, Lotstrecke und Spiegelung.

# Version 2.2

> 2024-10-08

Ab sofort ist sketchometry 2.2 verfügbar. Diese Version bringt eine Reihe von Neuerungen und Verbesserungen mit sich.
sketchometry ist nun in Italienisch (it) verfügbar. Außerdem wurden einige andere Sprachen aktualisiert.

## Die wichtigsten Neuerungen

- Es ist möglich, die Anzahl der Nachkommastellen anzupassen
    - In der gesamten Zeichenfläche.
    - Beim Objekt selbst (Messung, Text, Schieberegler oder Lineal).
- Man kann nun die Schriftgröße aller Objekte im Board gleichzeitig bearbeiten.
- Es gibt ab sofort drei Möglichkeiten, **Tangenten** (T-Geste) zu zeichnen:
    - Eine "freie" Tangente an einem Kreis, einem Funktionsgraph oder einer Kurve ohne zusätzliche Objekte.
    - Eine Tangente (an Kreis, Funktionsgraph oder Kurve) durch einen bestehenden Punkt auf dem Objekt (Gleiter oder Schnittpunkt).
    - Eine Tangente an einen Kreis durch einen Punkt außerhalb des Kreises.
- Bei **Senkrechten** und **Lotstrecken** (L-Geste) gibt es nun auch mehr Möglichkeiten:
    - Eine "freie" Senkrechte an eine Strecke/Gerade, einen Kreis, einen Funktionsgraph oder eine Kurve ohne zusätzliche Objekte.
    - Eine Senkrechte (an Strecke/Gerade, Kreis, Funktionsgraph oder Kurve) durch einen bestehenden Punkt auf dem Objekt (Gleiter oder Schnittpunkt).
    - Eine Senkrechte oder Lotstrecke an eine Strecke/Gerade durch einen bestehenden Punkt außerhalb der Strecke/Gerade.

## Verbesserungen

- Es ist möglich, die Eigenschaften von **gespiegelte Funktionsgraphen** zu bearbeiten.
- Die Tangenten-, Senkrechten- und Spiegel-Geste wird nun besser erkannt.
- Mehrere Zeichenflächen werden nun auch als `.sketcho`-Datei exportiert. Das erleichtert den Import enorm.
- Wenn nur eine Achse eingeblendet wird, wird die 0 angezeigt.

Dazu kommen einige kleinere Fehlerbehebungen und Verbesserungen.

# Version 2.1.1

> 2024-08-07

Diese Version enthält eine Vielzahl von Verbesserungen und Fehlerbehebungen, die die Gestenerkennung und -behandlung
(u.a. Mittelpunkt, Senkrechte, Lotstrecke, Spiegelung, Zoom) betreffen.

Zusätzlich werden ab sofort rechte Winkel nicht mehr automatisch benannt.

# Version 2.1

> 2024-08-02

Heute wird sketchometry 2.1 veröffentlicht.
Diese Version enthält nicht nur einige Fehlerverbesserungen, sondern auch ein paar neue Features. Diese sind:

- Das **Highlighting** von Objekten ist nun deutlicher. So kann man beispielsweise leichter erkennen, ob man einen Punkt
  mit seinem Finger überfahren hat oder nicht.
- Die Toolbar hat ein neues Feature: Im Bereich "Eigenschaften" sind drei wichtige Einstellungen der Zeichenfläche
  als **Shortcuts** verlinkt. So kann man ganz schnell die Achsen, das Gitter oder das schrittweise Ziehen ein- und
  ausschalten.
- Es gibt eine neue Geste für den **Inkreis**: Zeichne einfach einen Kreis, der die drei Seiten eines Dreiecks von innen
  berührt.
- Das Navigieren und Zoomen mit zwei Fingern ist nun in vielen Modi möglich (z.B. bei der Sichtbarkeit).
- Das Zeichnen von Steigungsdreiecken wurde erheblich verbessert. Es kann eingezeichnet werden, indem eine Seite der
  Geste auf dem Objekt (Gerade, Graph,...) liegt oder indem der Gleiter zweimal überfahren wird (zu Beginn und Ende der
  Geste).
- Es gibt die neue Sprache "Slovenisch".

## Fehlerbehebungen

- Schieberegler haben nun neue Standard-Werte.
- Funktionsgraphen können versteckt und gelöscht werden.
- Freihandkurven können durch bestehende Punkte gezeichnet werden (sind dann aber nicht mehr verschiebbar).
- Gleiter können wieder gespiegelt werden.
- ...

Die Android- und Apple-App lassen leider aufgrund verwaltungstechnischer Hürden noch etwas auf sich warten.
Wir hoffen auf eine Veröffentlichung Ende September.

# Version v2.0

> 2024-06-28

Juhuu!! sketchometry kommt endlich in die 2. Klasse - zumindest im übertragenen Sinn.

sketchometry 2.0 wartet mit vielen Neuerungen auf.

Natürlich sticht dabei die komplett überarbeitete Benutzeroberfläche sofort ins Auge.
Die alte Oberfläche ist leider durch den stetig wachsenden Funktionsumfang immer unübersichtlicher geworden.
Aus diesem Grund haben wir die Funktionalitäten neu sortiert und arrangiert.
Ihr findet alle Werkzeuge (die nicht mit Gesten umsetzbar sind) in der Werkzeugleiste unten.
Übrigens: die Gesten-Übersicht findet ihr auch digital in der App als Bild.

Die neue Oberfläche bietet auch eine Galerie mit Ordner-Struktur und ist vielfältig anpassbar.

Aber auch beim Funktionsumfang hat sich einiges getan:

- Unsere Gesten-Erkennung ist nun noch besser und zuverlässiger.
- Wir haben einige Gesten hinzugefügt, wie z.B. Mittelsenkrechte, Mittelparallele, Thaleskreis, Tangenten an
  Sektoren, ...
- Dazu kommen neue Objekte wie Parallelogramm, Parallelogrammpunkt, Winkel fester Größe, Strecke fester Länge, ...
- Der Messen-Modus wurde aufgeteilt: einmal gibt es das "normale" Messen, auf der anderen Seite das Messen mit
  Operationen (Summe, Differenz, ...). Hier werden auch die Dimensionen der Objekte berücksichtigt!
- Viele neue Eigenschaften sind von euch editierbar (Objekte, Gitter, Koordinatensystem, ...)
- Es sind natürlich weiterhin interaktive Texte möglich. Jetzt sogar mit TeX.
- u.v.m.

Alte Konstruktionen werden beim Öffnen im neuen sketchometry automatisch umgewandelt.
(*Achtung: dieser Vorgang kann nicht rückgängig gemacht werden!*)

Die neue Version wird in den nächsten Wochen auch in den Appstores verfügbar sein.

Viel Spaß mit der neuen Version von sketchometry!   
Falls ihr Fehler entdeckt, kontaktiert uns unter <sketchometry@uni-bayreuth.de>.

# Version v2.0.beta.3

> 2024-05-27

Es gibt jetzt einen festen Eintrag "Neue Konstruktion" in der Galerie. Außerdem kann der Nutzer die Transparenz des
Modus-Icons im Hintergrund selbst steuern.

Als Strich-Enden gibt es jetzt nicht nur Pfeile, sondern auch einen Strich, um mehr Darstellungsmöglichkeiten zu bieten.

Ein großer Fehler wurde behoben, der bewirkte, dass man Popups in Android nur sehr schwer oder gar nicht öffnen konnte.
Dazu kommen wie üblich einige weitere Verbesserungen.

# Version v2.0.beta.2

> 2024-05-08

In dieser Version hat sich nochmal einiges an der Oberfläche geändert: Multitools werden nun in einer eigenen Unterseite
angezeigt und nicht mehr mit einem "Switch"-Button.
Außerdem wird der Standard-Modus wieder in der Toolbar angezeigt, sobald das aktuelle Werkzeug abgewählt wurde.

Als neue Sprache wurde Polnisch hinzugefügt.

Naben ein paar kleineren Verbesserungen und neuen Icons wurden die Einträge in der Toolbar auch neu sortiert und das
Popup beim Schließen einer neuen Konstruktion entfernt.

# Version v2.0.beta.1

> 2024-04-15

In dieser Beta-Version wurden die Sprachen Türkisch und Chinesisch (vereinfacht) hinzugefügt.

Die Messungen wurden auf Schieberegler ausgeweitet. Deren Wert kann nun "gemessen" werden.

Außerdem erstellen nun alle Modi, die einen Punkt als Eingabe erwarten, diesen, wenn man auf eine leere Stelle in der
Zeichenfläche klickt.

Dazu kamen einige weitere Fehlerbehebungen und Verbesserungen.

# Version v2.0.beta

> 2024-03-20

Endlich ist es so weit. Wir präsentieren sketchometry 2.0 als Live-Version in der Beta-Phase:   
<a type="button" href="https://sketchometry.org/beta/">https://sketchometry.org/beta/</a>

## Was ist neu?

- Neue überarbeitete Oberfläche
- Galerie mit Ordnern
- Neue Gesten, wie beispielsweise Mittelsenkrechte, Mittelparallele, Thaleskreis, ...
- Erweitertes Messen mit Operationen (Summe, Differenz, ...)
- Viele neue Eigenschaften (Objekte, Gitter, Koordinatensystem, ...)
- Interaktive Texte (auch mit TeX)
- u.v.m.

# Version v1.5.3-legacy

> 2024-05-02

Dieser Release stellt die finale vErsion der 1.x-Reihe dar. Sie wird zukünftig unter <https://legacy.sketchometry.org>
zu finden sein. Im Vergleich zu Version 1.5.2 hat sich nahezu nichts geändert.

In dieser Version gespeicherte Konstruktionen können nur via Ex- und Import in die neue Oberfläche übertragen werden.
Sie werden nicht automatisch transferiert.

# Version v1.5.2

> 2019-03-06

sketchometry v1.5.2 bringt vor allem Verbesserungen bei iOS-Geräten: Die Geschwindigkeit der sketchometry-App hat sich
drastisch erhöht.

Zusätzlich steht zum Speichern von Konstruktionen das "Teilen"-Menü zur Verfügung (unter "Datei speichern").
Damit werden auch alle auf dem Gerät installierten Cloud-Dienste automatisch unterstützt.

# Version v1.4.4

> 2019-02-20

sketchometry v1.4.4 behebt zwei kleine Probleme: Labels waren nicht ziehbar und Polygone konnten nicht vollständig
versteckt werden.

Außerdem wird das direkte Spiegeln von Winkeln, Bögen und Sektoren in dieser Version nicht unterstützt.

# Version v1.4.3

> 2019-02-12

sketchometry v1.4.3 behebt Bedienungsprobleme auf Android- und Microsoft-Geräten.

# Version v1.4.2

> 2019-02-11

sketchometry v1.4.2 ermöglicht das Kopieren von Polygonen, behebt ein Geschwindigkeitsproblem beim Kurvenzeichnen und
bereinigt einige kleinere Fehler.

# Version v1.4.1

> 2019-02-08

sketchometry v1.4.1 behebt ein Geschwindigkeitsproblem, das sich in der vorherigen Version eingeschlichen hat.

Funktionsgraphen werden nun wieder mit höchster Geschwindigkeit gezeichnet.

Darüber hinaus enthält diese Version eine kleine, aber weit reichende Änderung:   
Werden Geraden, Strecken und Polygon mit zwei Fingern auf Touch-Geräten manipuliert, so werden diese Objekte von nun an
nur noch gedreht und verschoben, aber nicht mehr skaliert. Diese kleine Änderung eröffnet eine Vielzahl an didaktischen
Möglichkeiten.

# Version v1.4.0

> 2019-01-31

Seit einigen Tagen ist sketchometry in der Version 1.4.0 verfügbar.

Wir sind stolz darauf, dass sketchometry nun auch *Griechisch* - die Sprache der Begründer der *Geometrie* -
unterstützt.

Neu in dieser Version ist, dass Geraden, Strecken, Kreise, Kurven und Polygone direkt mit der *Spiegel-Geste* an einer
Geraden oder einem Punkt gespiegelt werden können.

Zudem wurde die Notation für Streckenmessungen an die aktuellen deutschen Lehrpläne angepasst: z.B. wird die Länge der
Strecke durch die beiden Punkte *A* und *B* nun mit |<span style="text-decoration:overline">AB</span>| bezeichnet.

Die Anzahl an Konstruktionen, die in sketchometry abgelegt werden können, ist seit dieser Version nur noch durch die
Größe des Speichermediums (Festplatte, SSD, ...) beschränkt.

Eine weitere Änderung - neben den üblichen Fehlerverbesserungen - ist, dass sketchometry nun als *progressive web app*
(PWA) zur Verfügung steht.   
Das bedeutet aktuell:

- Wird sketchometry online unter <https://start.sketchometry.org> mit einem Android-Gerät geöffnet, fragt das Gerät, ob
  sketchometry lokal gespeichert werden soll. Lautet die Antwort ja, besitzt diese lokale Kopie die gleichen
  Möglichkeiten wie die sketchometry-App aus dem Google Play Store, kann also z.B. offline genutzt werden.
- Mit Google Chrome unter Windows / OS X / Linux, kann ebenfalls eine offline-Kopie lokal gespeichert werden, indem bei
  *Einstellungen* auf `sketchometry installieren` geklickt wird.
- Microsoft und Apple haben angekündigt, dass sie PWAs in Zukunft auch unterstützen wollen.

# Version v1.3.5

> 2018-02-28

Version 1.3.5 bessert zwei kleine Fehler aus: sehr kurze, gerade scribble-Kurven wurden falsch positioniert und
der "zurück"-Button funktionierte in gewissen Gerätekonstellationen nicht.

# Version v1.3.4

> 2018-02-21

Version 1.3.4 enthält erstmals differenzierbare "Scribble-Kurven". Dies ist der erste Schritt zu Kurvendiskussion in
sketchometry.

Darüber hinaus können nun auch Polygone (neben Punkten, Geraden und Kurven) an Geraden und Punkten gespiegelt werden.

Gleiter können nun im Gitter einrasten.

Auch einige störende Fehler wurden behoben.

# Version v1.3.3

> 2017-12-08

Version 1.3.3 bessert lediglich einige kleine, aber sehr störende Fehler aus.

# Version v1.3.0

> 2017-12-04

Version 1.3.0 führt einen scribble-Modus ein, mit dem in eine Konstruktion gezeichnet werden kann.

Des Weiteren können nun auch Geraden und Kurven direkt gespiegelt werden.

Außerdem werden beim Konstruieren auf Multi-Touch-Geräten unabsichtliche Fingerberührungen auf dem Gerät deutlich besser
erkannt.

# Version v1.2.9

> 2017-10-30

Version 1.2.9 verbessert einen Fehler, der mit Version 1.2.8 eingeführt wurde:
Gleiter auf Sektoren führten zum Absturz.

# Version v1.2.8

> 2017-10-27

Version 1.2.8 enthält hauptsächlich Fehlerbereinigungen.

Insbesondere hatten sich die neuesten Versionen des Internet Explorers und des Edge Browsers geweigert, die
Fingereingabe in sketchometry entgegenzunehmen.

Darüber hinaus freuen wir uns sehr, dass sketchometry nun auch in Arabisch verfügbar ist.

Es gibt eine kleine Änderung bei der Eingabe von berechneten Texten und bei Funktionsgraphen.
Beginnend mit dieser Version, werden alle Funktionsnamen, die aus mehr als einem Buchstaben bestehen, kleingeschrieben.

## Liste aller verfügbaren Funktionen

- `cos(x)`   
  Kosinus von *x*
- `cosh(x)`   
  Kosinus hyperbolicus von *x*
- `pow(e, b)`   
  *e* hoch *b*
- `log(x), ln(x)`   
  Natürlicher Logarithmus
- `log(x, b)`   
  Logarithmus zur Basis *b*
- `log2(x), lb(x)`   
  Logarithmus zur Bais 2
- `log10(x), ld(x)`   
  Logarithmus zur Basis 10
- `tan(x)`   
  Tangens von *x*
- `sqrt(x)`   
  (Quadrat)Wurzel von *x*
- `ceil(x)`   
  Rundet auf die nächst größere ganze Zahl *n* auf (*n > x*)
- `abs(x)`   
  Absolutbetrag von *x*
- `max(a, b, c, ...)`  
  Gibt den größten Wert (Maximum) aller angegebenen Werte zurück
- `min(a, b, c, ...)`   
  Gibt den kleinsten Wert (Minimum) aller angegebenen Werte zurück
- `exp(x)`   
  EULER *e* hoch *x*
- `atan2(y, x)`   
  Liefert arctangent des Qutienten der beiden Argumente zurück
- `random(max = 1)`   
  Erzeugt eine Zufallszahl zwischen *0* und *max*
- `round(v)`   
  Rundet *v* auf die nächstgelegene ganze Zahl auf bzw. ab
- `floor(x)`   
  Rundet auf die nächst kleinere ganze Zahl *n* ab (*n < x*)
- `asin(x)`   
  Arkussinus von *x*
- `acos(x)`   
  Arkuskosinus von *x*
- `atan(x)`   
  Arkustangens von *x*
- `sin(x)`   
  Sinus von *x*
- `sinh(x)`   
  Sinus hyperbolicus von *x*
- `factorial(n)`   
  Fakultät *n!*
- `trunc(v, p = 0)`   
  Schneidet *v* nach der *p*. Dezimalstelle ab
- `D(f(x)), D(f(t),t)`
  Ableitung der Funktion *f* nach *x* (*x* ist der Standardname der Variablen) |
- `V(s)`   
  Gibt den Wert des Elements zurück, z.B. Schieberegler oder Winkel
- `L(s)`   
  Berechnet die Länge der Strecke *s*
- `X(P) Y(P)`   
  Gibt die *x*- bzw. die *y*-Koordinate des Punkts *P* zurück
- `dist(P, Q)`   
  Berechnet die Entfernung der beiden Punkte *P* und *Q*
- `deg(A, B, C)`   
  Berechnet das Maß des Winkels (Gradmaß)
- `rad(A, B, C)`   
  Berechnet das Maß des Winkels (Bogenmaß)

## Weitere Änderungen

- Autovervollständigung in Textfeldern deaktiviert
- Neue Schriftart: Systemschrift
- Fehlerbehebung: Microsoft Touch-Geräte
- Fehlerbehebung: Auf Punkten einrasten
- Fehlerbehebung: Eingabesprache für Texte und Funktionen: JessieCode
- Fehlerbehebung: Ziffern

# Version v1.2.7

> 2016-11-30

sketchometry 1.2.7 ermöglicht erstmals symbolische Ableitungen.
Die Eingabe von beispielsweise `D(x^3, x)` erzeugt den Funktionsgraphen `f(x) = 3*x^2`.

Darüber hinaus werden einige Fehler beseitigt. Zum Beispiel sollten die Häkchen im Eigenschaften-Fenster (etwa bei
Spurpunkten) nun fehlerfrei funktionieren.

## Weitere Änderungen

- Mittelpunkt- und Schnittpunktkoordinaten auf schreibgeschützt setzen
- Entfernen von `=` für Punktmessungen
- Deutlich verbessertes Pinch-to-Zoom und Pan (JSXGraph)
- Fehlerbehebung: Auswahl des Funktionsterms im Funktionsplot-Dialog
- Fehlerkorrektur: Vereinfachte mathematische Eingabe
- Stammfunktionen im Funktionsplot-Dialog deaktivieren (vorerst)
- Handschrifterkennung im Funktionsplot-Dialog deaktivieren

# Version v1.2.5

> 2016-09-27

Version 1.2.5 unterstützt nun die neuen Sprachen Russisch und Kasachisch.

Beim Setzen von Punkt-Koordinaten und Kreisradien werden nun mathematische Ausdrücke unterstützt. Dies eröffnet
zahllose Möglichkeiten, um schnell fortgeschrittene Konstruktionen zu erstellen.

Außerdem werden das Zoomen mit dem Mausrad und individuelles Skalieren der Achsen wieder unterstützt.

# Version v1.2.4

> 2016-07-06

sketchometry 1.2.4 unterstützt nun die Sprachen Tschechisch, Norwegisch (Norsk), Finnisch und Chinesisch traditionell.

Ausserdem wurde die Gestenerkennung verbessert, sowie das Zoomen und die Audio-Funktionalität.

Die Benutzeroberfläche wurde etwas vereinfacht.

Die wichtigsten Fehler, die beseitigt wurden, waren Fehler bei der Cloud-Anbindung und Funktionalität Checkboxen im
Eigenschaften-Dialog.

## Weitere Änderungen

- Fehlerbehebung: Geräteausrichtung ändern
- Verwendung von Klickgeräuschen auf verschiedenen Schaltflächen
- Beenden des Eigenschaftsdialogs nach dem Löschen von Tracks
- Fließkommawerte als Intervallgrenzen erlaubt.
- Intervallgrenzen können nun nachträglich geändert werden
- Eigenschaftsdialog umstrukturiert
- Eigenschaft "Achsenskalierung" entfernt

# Version v1.2.2

> 2015-10-15

Ist keine Übersetzung vorhanden verwendet sketchometry nun Englisch, und nicht mehr Chinesisch als
Standardsprache. Außerdem werden Chinesisch, Japanisch, Serbisch uns Slowenisch korrekt erkannt.

# Version v1.2.0

> 2015-06-10

Version 1.2.0 ist verfügbar!

## Neue Features

- Einbetten von sketchometry in Webseiten als iframe.
- Winkel in Dreiecken sind nun standardmäßig Innenwinkel
- Schnellerer Zugriff auf Eigenschaften der Zeichenfläche (über *Eigenschaften*) durch eigene Toolbar
- Einführung eines vierten Modus: Wenn sowohl Zug-Modus als auch Konstruktions-Modus abgeschaltet sind, ist ein
  ziehbares Handsymbol sichtbar.
  Dies ist nützlich, wenn eine Konstruktion im Klassenzimmer über Apple TV oder Chromecast präsentiert und erklärt wird.

## Fehlerbehebungen und Verbesserungen:

- sketchometry läuft nun auch mit Chrome oder Firefox auf Touch-Geräten unter Windows
- Cloud-Anbindung der Android-App funktioniert wieder
- Besseres Verhalten bei Zoom
- Speichern und Laden von Konstruktionen verhält sich konsistent über verschiedene Fenstergrößen hinweg
- Größe der sketchometry-App um Faktor zwei reduziert
- Beim Ziehen von Reglern wird kein Punkt mehr konstruiert

# Version v1.1.9

> 2015-04-24

Version 1.1.9 ist verfügbar!

# Version v1.1.8

> 2015-03-12

Version 1.1.8 ist verfügbar!

# Version v1.1.7

> 2014-12-06

sketchometry 1.1.7 behebt zwei äußerst kritische Fehler der vorherigen Version:

- Sofortiger Absturz auf Android 5 Geräten.
- Absturz beim Öffnen einer neuen Konstruktion in der iPad-App und bestimmten Bildschirm-Größen.

*Bitte führen Sie KEIN Update der iOS-App auf Version 1.1.6 ab und warten Sie auf die Freigabe von Version 1.1.7.*

# Version v1.1.6

> 2014-11-26

Version 1.1.6 beseitigt einige Fehler und enthält neue Sprachversionen.

# Version v1.1.5

> 2014-11-03

Version 1.1.5 verbessert und beschleunigt das Plotten von Funktionsgraphen.

# Version v1.1.4

> 2014-10-16

Die Version 1.1.4 behebt einen Fehler, der zum sofortigen Absturz unter iOS7 führte,
sowie einige weitere, kleinere Fehler.

# Version v1.0

> 2014-08-15

Jetzt ist es endlich so weit!
**sketchometry 1.0 ist da.**

Die finale Version von sketchometry präsentiert sich im neuen Gewand.