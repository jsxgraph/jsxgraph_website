# Schritte zum Transfer von Posts der alten Website

> Diese Anleitung ist noch nicht vollständig!

1. Alle Posts kommen zukünftig in den Ordner [`src/_posts`](src/_posts).  
   **Achtung**: Nur Release-Posts kommen in den Unterordner [`releases`](src/_posts/releases).
2. Dateinamen:
   - für Releases:  
     _jjjj_ - _mm_ - _dd_ - v _nr_ .md (ohne Leerzeichen)  
     z.B. `2025-03-31-v1.11.0.md`
   - für andere Posts:  
     _jjjj_ - _mm_ - _dd_ - _kurztitel_ .md (ohne Leerzeichen)  
     z.B. `2022-07-04-ijc3.md`
3. Es sind bei Posts die folgenden Attribute im Kopf erlaubt:
    - `tags`
        - Liste mit `-` von mehreren Schlagworten
        - "Themen" des Posts
        - Auf Schreibweise achten!
    - `category`
        - nur eine: Bei mehreren bitte auf eine reduzieren. Der Rest ist "tag".
        - "Art" des Posts
        - Nicht bei Releases: Hier gar keine Kategorie angeben. Es wird automatisch die Kategorie "Release" ergänzt.
    - `title`
        - muss jeder Beitrag haben
        - kann sich vom Titel im Dateinamen unterscheiden
        - Sollte nicht allzu lange sein
    - `subtitle`
        - optional
    - `author`
        - optional
        - Vollständiger Name
    - **Weitere Attribute sollten entfernt werden.** Insbesondere z.B. `date`, `layout`, `permalink` oder `guid`
