*+++ JSXGraph AIR Buddy is currently in the prototype stage and     will be available for download at a later date. +++*

# Talk to Your Construction

JSXGraph AIR Buddy is a conversational companion in the JSXGraph AIR family.

<img src="{{ relBase }}/media/logos/jsxgraph/air/jsxgraph-air-blue-text-solid-500.png" class="w-40 w-40-over-lg">

While [*JSXGraph AIR for VS Code*]({{ relBase }}/ai/jsxgraph-air-vscode) supports authors who work directly with code, AIR Buddy removes the code from view entirely: you create and control interactive mathematical constructions by simply describing them – typed or spoken (via your OS), in natural language.

<img src="{{ relBase }}/media/images/jsxgraph-air-buddy/jsxgraph-air-buddy-rename-point.png" class="shadow m-3 w-80">

Behind the scenes, an AI assistant "translates" your words into JSXGraph code and renders the result instantly as a live, fully interactive construction in the browser. You stay in the mathematical conversation; AIR Buddy takes care of the programming.

<img src="{{ relBase }}/media/images/jsxgraph-air-buddy/jsxgraph-air-buddy-window-prompt.png" class="w-60">

AIR Buddy is aimed at learners, teachers, and authors who want to explore, demonstrate, and experiment with dynamic mathematics – without writing a single line of code. Even board properties can be controlled using natural language.

<img src="{{ relBase }}/media/images/jsxgraph-air-buddy/jsxgraph-air-buddy-window-properties.png" class="w-60">

# Examples

## Creating a construction by text or voice

You describe, AIR Buddy constructs:

> 🗣️ *"Draw a triangle with a circumscribed circle."*

A triangle with its circumcircle appears – draggable, dynamic, and correctly constrained: move a vertex, and the circumcircle follows.

> 🗣️ *"Now add the three perpendicular bisectors."*

The bisectors are added to the existing construction, meeting – as they must – in the circumcenter.

## Interacting by text/voice

The conversation doesn't end once the construction is on screen. You can keep steering it:

> 🗣️ *"Color the circumcenter red and label it M."*
>
> 🗣️ *"Move C so that the triangle becomes obtuse."*

Every instruction modifies the live construction in place. Exploring a conjecture becomes a dialogue: ask, look, drag, ask again.

# Bidirectional control: AI – Code – Speech/Text

AIR Buddy is not a one-way text-to-picture generator. All three layers stay connected in both directions.

<img src="{{ relBase }}/media/images/jsxgraph-air-buddy/jsxgraph-air-buddy-code.png" class="shadow m-3 w-80">

## Speech/Text <=> JSXGraph Code <=> Live Construction

- *Language to Construction:* Spoken or typed instructions are translated by the AI into JSXGraph code and rendered immediately.
- *Construction to Language:* Changes you make by hand – dragging a point, moving a slider – feed back into the conversation. You can ask AIR Buddy about the current state: *"What are the coordinates of C right now?"*, *"Is the triangle still acute?"*
- *Code in the middle:* The JSXGraph code is the shared, precise representation both sides agree on. It is always there, always up to date – whether you look at it or not.

## The code layer is hidden by default

By default, AIR Buddy shows only the conversation and the construction. The generated JSXGraph code – the intermediate layer between language and graphics – is deliberately kept out of sight, so that nothing distracts from the mathematics.

<img src="{{ relBase }}/media/images/jsxgraph-air-buddy/jsxgraph-air-buddy-window-code.png" class="w-60">

But it is never out of reach: one click reveals the live code panel. This makes AIR Buddy work at every level of expertise:

- *Learners* interact purely through language and the construction itself.
- *Curious users* can peek at the code and discover how their words became JSXGraph elements – a gentle, motivating entry point into programming dynamic mathematics.
- *Authors and developers* can open the code layer permanently, edit it directly, and watch construction and conversation stay in sync.