JSXGraph supports accessibility through integration with ARIA (Accessible Rich Internet Applications) standards. Authors can apply all relevant ARIA roles, labels, and properties to JSXGraph containers and interactive elements, enabling screen readers to interpret mathematical content more effectively. With attributes like `aria-label`, `aria-describedby`, and `aria-live`, all individual JSXGraph elements can be enriched with semantic information to improve the accessibility of dynamic visualizations.

## Keyboard Control

Individual elements can receive keyboard focus via `tabIndex`, and once focused, users can interact with them using custom keyboard controls. This allows for inclusive navigation without requiring a mouse, making interactive mathematics more accessible to all users.

```js
var A = board.create('point', [2, 3], {
   name: 'A',
   tabIndex: 0,
   aria: {
       enabled: true,
       label: (self) => `${self.name} is at ${self.X().toFixed(1)} ${self.Y().toFixed(1)}`,
       live: 'polite'
   }
});
```

##  Descriptive Text

In addition, JSXGraph visualizations can be enriched with descriptive text and dynamic announcements to assist users with visual impairments.

## Mouse and Touch Sensitivity

Another important aspect of accessibility is the ability to adjust mouse and touch sensitivity. This allows points, lines, and other elements to be manipulated without requiring overly precise movements, thereby reducing barriers for users with limited motor abilities.

```
precision: {
   touch: 30,
   mouse: 4,
   pen: 4
}
```

These features help ensure that interactive mathematics is accessible and inclusive across a wider range of users.

## ARIA Example

Enable screen reader support for the following example. Point A can be activated using the Tab key and moved with the arrow keys.