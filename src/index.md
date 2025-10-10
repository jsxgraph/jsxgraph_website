---
title: JSXGraph
title_only: true
header: JSXGraph - Dynamic Mathematics with JavaScript
menu_title: Home
order: 0
layout: splash
is_home: true
splash:
  image: /media/splash.jpg
  color: var(--bs-primary)
  content:
    - file: start

sections:

  - file: download
    layout: text

  - file: library
    layout: board-block
    data:
      boardid: library
      title: Apollonian circle packing
      link: /share/example/apollonian-circle-packing
      target: _blank

  - file: visualization
    layout: board-block
    data:
      boardid: visualization
      board_pos: second
      title: Surface plot
      link: /share/example/surface-plot
      target: _blank

  - file: features
    layout: board-block
    data:
      boardid: features
      title: Euler line
      link: /share/example/euler-line
      target: _blank

  - file: assessment
    layout: board-block
    data:
      boardid: assessment
      board_pos: second
      title: Continuity
      link: /share/example/continuity
      target: _blank

  - file: accessibility
    layout: board-block
    data:
      boardid: accessibility

      title: Iterated Icosahedron
      link: /share/example/iterated-icosahedron
      target: _blank


  - file: technical-features
    layout: board-block
    data:
      boardid: technical-features
      board_pos: second
      title: Implicit plot – Elliptic curves
      link: /share/example/elliptic-curves-group-law
      target: _blank

  - file: open-source
    layout: board-block
    data:
      boardid: open-source
      title: Mirror, Mirror on the Wall ...
      link: /share/example/3d-mirror-mirror-on-the-wall
      target: _blank

  - file: license
    layout: board-block
    data:
      boardid: license
      board_pos: second
      title: Vectorfield
      link: /share/example/3d-vector-field
      target: _blank

---

<!-- overrides -->

<style>
  .jxgbox {
    background-color: transparent;
    border: none;
    border-radius: 0;
    cursor: pointer;
  }
</style>

<script>
    window.JXG.Options.board.showCopyright = false;
</script>