---
title: sketchometry - Geometrie mit dem Finger
title_only: true
header: sketchometry - Geometrie mit dem Finger
menu_title: Startseite
order: 0
layout: splash
is_home: true
sitemap:
  priority: 1
  changefreq: 'daily'
  
splash:
  background: var(--sketchometry-splash-gradient), url('{{ relBase }}/media/images/2x1/bausteine-winkel-hand-mitte.jpg')
  content:
    - file: splash1
      overlay: false

sections:

  - file: bullets
    layout: image-block
    data:
      image: /media/images/2x1/gesten-animation-dreieck.gif
      colorclassimg: primary
      colorclasstxt: secondary
      image_pos: first
      
  - file: intro
    layout: text

  - file: verwenden
    layout: image-block
    data:
      image: /media/images/2x1/sketchometry-parallele-geraden.jpg
      colorclassimg: primary
      colorclasstxt: secondary
      image_pos: first
      
  - file: app
    layout: text

  - file: ueberblick
    layout: cols
    data:
      cols:
        - title: Gestenübersicht
          text: >
            Die ideale Ergänzung für den Unterricht.
            Alle sketchometry-Gesten auf einer (druckbaren) Übersichtskarte.   
          iconname: book-logo
          link: /de/download/#gesten-übersicht
          
        - title: Lehren und Lernen
          text: >
            Digitale und analoge Welt verknüpfen. Experimentieren am Smartphone oder Tablet – Dokumentieren im Heft oder Lerntagebuch.
          iconname: paper
          link: /de/lehren-und-lernen
        
        - title: Workshop
          text: >
            sketchometry Kennenlernen und Einsatz im Unterricht. 
            Materialien für das Selbststudium bzw. als Grundlage für Fortbildungen.
          iconname: whiteboard-logo
          link: /de/workshop

        - title: Heftreihe
          text: >
            Praxisbezogene Konzepte, Ideen, Beispiele,
            Unterrichtserfahrungen.
          iconname: globe
          link: /de/heftreihe
 
---