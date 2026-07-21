# Creating JSXGraph Constructions with AI

JSXGraph constructions are defined in code — and that makes them a perfect match for AI assistants. Modern language models can generate working JSXGraph code from a short description, and the results are often impressive.

- How to prompt AI tools effectively?
- How to avoid the most common pitfall: constructions that *look* right but break as soon as you drag a point.

## The core problem: static vs. truly dynamic constructions

A typical first attempt looks like this:

> "Create a JSXGraph construction for the Pythagorean theorem."


The AI will usually produce a working board with a right triangle and three squares. It renders correctly — but if you drag one of the triangle's vertices, the right angle is lost and the figure falls apart.

The reason: the AI placed all points as *free points* with fixed coordinates, e.g.

```javascript
// Static: three independent points that merely happen to form a right angle
var A = board.create('point', [0, 0]);
var B = board.create('point', [4, 0]);
var C = board.create('point', [0, 3]);
```

The right angle exists only by coincidence of the initial coordinates. A proper dynamic construction encodes the geometric *relationship* itself, so that the invariant survives any interaction:

```javascript
// Dynamic: C is constrained to the Thales circle over AB,
// so the angle at C is always 90°
var A = board.create('point', [0, 0]);
var B = board.create('point', [4, 0]);
var c = board.create('circle', [
    function() { return [(A.X() + B.X()) / 2, (A.Y() + B.Y()) / 2]; },
    A
]);
var C = board.create('glider', [1, 2, c]);
```

Now the user can drag A, B, or C — and the triangle remains right-angled, exactly as it would in a classical dynamic geometry system.

**The key insight:** the AI does not know which properties of your figure are essential invariants and which are accidental, unless you tell it. Your prompt must state *which relationships have to be preserved under dragging*.

# Writing Better Prompts

## 1. Name the invariants explicitly

Say what must stay true when points are moved. Compare:

> "Create a JSXGraph construction for the Pythagorean theorem."

vs.

> "Create a JSXGraph construction for the Pythagorean theorem. The triangle must remain right-angled when any vertex is dragged. Use a constrained construction (e.g. a glider on the Thales circle or a perpendicular line), not three free points. Attach the three squares to the triangle's sides so they follow every movement."

## 2. Ask for constructive dependencies instead of coordinates

Tell the AI to use JSXGraph's dependent element types – `midpoint`, `perpendicular`, `parallel`, `glider`, `intersection`, `reflection`, `circumcircle`, and points defined by functions of parent elements — rather than hard-coded coordinates. A useful standing instruction:

> "Only use free points where the user is actually supposed to have full freedom. Define every other element through geometric dependencies, so the construction behaves like one made in a dynamic geometry system."

## 3. Specify the interaction you expect

Describe the construction from the user's point of view:

> "The user should be able to drag A and B freely and move C along the circle. Angle and side labels should update live. Add a slider for ..."

Interaction requirements ("dragging A must …", "the slider controls …") are the most reliable way to force a constraint-based design.

## 4. State the technical frame

Include the practical details so you don't have to fix them afterwards:

- Board setup: bounding box, `keepaspectratio: true` for geometry, axes on/off
- JSXGraph version you are targeting
- Styling wishes: colors, labels, `withLabel`, fixed vs. draggable elements
- Whether you want plain JavaScript, or the construction embedded in a complete HTML page

## 5. Ask the AI to test its own logic

A surprisingly effective addition:

> "Before answering, check: if each draggable point is moved, do all stated properties still hold? Explain briefly which elements are free and which are dependent."

This makes the model reason about the dependency graph instead of just drawing a picture.

## Iterate by dragging

Treat the first AI answer as a draft, not a result. The test is always the same: **open the construction and drag every point.** Whatever breaks tells you what to write in the next prompt:

> "When I drag B, the square on the hypotenuse detaches. Bind its vertices to A and B (e.g. via `transform` or point definitions depending on A and B) so it follows the side."

Concrete bug reports of this kind ("when I drag X, Y happens, but Z should happen") produce far better fixes than "it doesn't work".

## Watch out for hallucinated API

AI models occasionally invent JSXGraph methods or attributes that don't exist, or mix in syntax from other libraries. If generated code throws errors:

- Ask the model to restrict itself to the documented API and to state which element types it used.
- Check element names and attributes against the [JSXGraph API reference](https://jsxgraph.org/docs/).
- Paste the exact console error back into the chat — models are good at repairing their own code when given the error message.

# A Prompt Template to Start From

> Create a JSXGraph construction of <topic>.
>
> Requirements:
> - Invariants: <which properties must hold under dragging, e.g.
>   "the triangle stays right-angled", "P always lies on the curve">
> - Free elements: <which points the user may drag freely>
> - Dependent elements: define everything else through geometric
>   dependencies (midpoint, perpendicular, glider, intersection, ...),
>   not fixed coordinates.
> - Interaction: <sliders, checkboxes, live-updating labels/texts>
> - Board: bounding box <...>, keepaspectratio: true, axes <on/off>
> - Output: a complete, self-contained HTML page using JSXGraph <version>.
>
> Before answering, verify that all invariants survive dragging any
> free element, and list which elements are free vs. dependent.


# Summary Checklist

1. **State the invariants** — what must remain true while dragging.
2. **Demand dependencies, not coordinates** — free points only where freedom is intended.
3. **Describe the interaction** — dragging, sliders, live labels.
4. **Fix the technical frame** — bounding box, aspect ratio, version, output format.
5. **Test by dragging, then iterate** — report precisely what breaks.
6. **Verify against the API docs** — feed errors back to the AI.

With these habits, AI becomes a genuinely productive co-author for JSXGraph: you contribute the mathematical intent and the invariants, the AI contributes fast, clean code.
