---
title: sketchometry - In touch with geometry
title_only: true
header: sketchometry - In touch with geometry
menu_title: Home
order: 0
layout: splash
is_home: true
sitemap:
  priority: 1
  changefreq: 'daily'
  
splash:
  background: var(--sketchometry-splash-gradient), url('{{ relBase }}/media/images/2x1/sketchometry-hand.jpg')
  content:
    - file: splash1
      data:
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

  - file: use
    layout: image-block
    data:
      image: /media/images/2x1/sketchometry-perpendicular-bisector.jpg
      colorclassimg: primary
      colorclasstxt: secondary
      image_pos: first

  - file: app
    layout: text

  - file: overview
    layout: cols
    data:
      cols:
        - title: Gesture overview
          text: >
            The ideal add-on for teaching.
            All sketchometry gestures on a (printable) overview map.   
          iconname: book-logo
          link: /en/download/#gesture-overview
    
        - title: Teaching and Learning
          text: >
              Linking the digital and analog worlds. Experimenting on a smartphone or tablet – documenting in a notebook or study journal.
          iconname: paper
          link: /en/teaching-and-learning
        
        - title: Workshop
          text: >
            First steps with sketchometry and how to use it in the classroom. 
            Materials for self-study or as a basis for in-service training.
          iconname: whiteboard-logo
          link: /en/workshop
        
        - title: Publications
          text: >
            Practical concepts, ideas, examples,
            teaching experiences.
          iconname: globe
          link: /en/publications

---