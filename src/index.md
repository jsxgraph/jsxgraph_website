---
title: JSXGraph
title_only: true
header: JSXGraph - Dynamic Mathematics with JavaScript
menu_title: Home
order: 0
layout: splash
is_home: true
sitemap:
  priority: 1
  changefreq: 'daily'

splash:

  image: /media/bg-jsxgraph.jpg
  color: var(--bs-primary)
  content:
    - file: start
      overlay_background: rgba(var(--bs-tertiary-faded-rgb), 0.90)

sections:

  - file: example1
    layout: board-block
    data:
      boardid: example1

  - file: example2
    layout: board-block
    data:
      boardid: example2
      board_pos: second
      
  - file: example3
    layout: board-block
    data:
      boardid: example3
 
  - file: features
    layout: board-block
    data:
      boardid: features
      board_pos: second

  - file: technicalfeatures
    layout: board-block
    data:
      boardid: technicalfeatures
      
  - file: license
    layout: board-block
    data:
      boardid: license
      board_pos: second

---