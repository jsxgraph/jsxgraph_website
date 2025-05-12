# Version 2.4

> 2025-03-03

sketchometry 2.4 introduces a new setting:
From now on, you can specify whether “Draw” and “Construct” can be used in combination or only exclusively.
This simplifies usage in the lower grades.

We have also made a few changes to the user interface:

- Multitools in the toolbar now also have icons.
- The display of pop-ups on iOS devices has been improved.
- Under “Properties” you will no longer find the confusing “Appearance” entry.

Of course, there are also a number of bug fixes and improvements.
Many thanks to all tipsters and advisors!

# Version 2.3.6

> 2025-02-21

This version fixes a small bug when migrating from version 1.

# Version 2.3.5

> 2025-02-19

The new version of sketchometry contains many bug fixes and improvements. Among others:

- The language can now be set to `auto` so that a language that matches the system is always used.
- The display of menu bar and toolbar at different positions has been improved. Some things had overlapped here.
- An error in some old constructions could cause the migration process to be interrupted and the app could no longer be opened. This has now been fixed.
- The gesture for parallel and bisector now also works in an empty drawing area with axes switched on.

# Version 2.3.4

> 2025-02-07

With this version, we are releasing a fully functional app for Apple iOS and iPadOS.

For technical reasons, when updating the iOS app to the latest version (2.3.3), constructions of already installed, older sketchometry versions (up to 1.5.3) were *not* transferred.
**This bug has now been fixed.**

Of course, this version also brings a number of other improvements.

# Version 2.3.3

> 2025-02-06

This version fixes a serious error that prevented the import from working.

Some improvements have also been made to the iOS app:
For technical reasons, when updating the iOS app to version 2.3.2,
constructions from older sketchometry versions (up to 1.5.3) that were already installed were not transferred.
This should be prevented in future (for more information, see the app release notes).

# Version 2.3.2

> 2025-01-31

We are proud to announce the new version 2.3.2 of sketchometry.
This version is preparing for release as an app for Apple iOS and padOS.

It also includes a few bug fixes, e.g. when dragging texts and measurements.
When entering texts and function terms, the keyboard is now opened automatically.
The input can be submitted via `Enter`.

# Version 2.3.1

> 2025-01-23

This release fixes a bug that occurred when version 2.3 was released.

# Version 2.3

> 2025-01-22

We are proud to announce the new version 2.3 of sketchometry.
This version includes major improvements in the internal management of object properties.

In addition, some minor changes and improvements have been made, including:

- Show the term of a function in the properties as MathJax.
- Prevent the lower limit of a function graph from being above the upper limit.
- Add some properties for the axis ticks.
- Focus the input field when opening the editor (e.g. function term input).

# Version 2.2.2

> 2024-12-13

Version 2.2.2 is being released today.

This version contains many improvements and bug fixes, not all of which can be listed.
Here are just a few highlights:

- When exporting as an `.html` file, MathJax and the sketchometry font will be included.   
  This means that measurements and texts can also be displayed correctly here.
- In the gesture preview, a better distinction is made between "perpendicular line" and “perpendicular segment”.   
  In addition, the recognition of these two gestures has been significantly improved.
- The layout and manipulation of polygons has been improved.
- In addition, there are many other internal improvements that make sketchometry even faster and more efficient.

Have fun with the new version!

**The sketchometry Apple and Android apps will also be updated very soon. By the end of January at the latest!**

The sketchometry team wishes everyone a Merry Christmas and a Happy New Year!

# Version 2.2.1

> 2024-10-22

The version 2.2.1 brings some bug fixes and improvements.
These include normal, perpendicular (segment) and reflection.

# Version 2.2

> 2024-10-08

sketchometry 2.2 is now available. This version brings a number of new features and improvements.
sketchometry is now available in Italian (it). Some other languages have also been updated.

## The most important new features

- It is possible to adjust the number of decimal places
  - In the entire board.
  - At the object itself (measurement, text, slider or ruler).
- You can edit the font size of all objects on the board at the same time now.
- There are three ways to draw **tangents** (T gesture):
  - A "free" tangent to a circle, a function graph or a curve without additional objects.
  - A tangent (to a circle, function graph or curve) through an existing point on the object (slider or intersection point).
  - A tangent to a circle through a point outside the circle.
- There are now also more options for **normals** and **perpendicular segments** (L gesture):
  - A “free” normal to a segment/line, a circle, a function graph or a curve without additional objects.
  - A normal (to a segment/line, circle, function graph or curve) through an existing point on the object (slider or intersection point).
  - A normal or perpendicular segment to a segment/line through an existing point outside the segment/line.

## Improvements

- It is possible to edit the properties of **mirrored function graphs**.
- The tangent, normal and mirror gestures are now recognized better.
- More than one board are now also exported as a `.sketcho` file. This makes importing much easier.
- If only one axis is shown, the 0 is displayed.

There are also some minor bug fixes and improvements.

# Version 2.1.1

> 2024-08-07

This version contains a large number of improvements and bug fixes relating to gesture recognition and handling
(including midpoint, normal, perpendicular segment, reflection, zoom).

In addition, right angles are no longer named automatically.

# Version 2.1

> 2024-08-02

Today we release sketchometry 2.1.
This version not only contains some bug fixes, but also a few new features. These are:

- The **highlighting** of objects is now clearer. For example, it is now easier to recognize whether you have passed
  over a point with your finger or not.
- The toolbar has a new feature: In the "Properties" section, three important settings of the board are linked as
  **shortcuts**. This allows you to quickly switch the axes, the grid or step-by-step dragging on and off.
- There is a new gesture for the **inscribed circle**: Simply draw a circle that touches the three borders of a triangle
  from the inside.
- Navigating and zooming with two fingers is now possible in many modes (e.g. visibility).
- The drawing of slope triangles has been significantly improved. It can be drawn by sketching one side of the
  gesture on the object (line, graph,...) or by passing over the glider twice (at the beginning and end of the gesture).
- There is a new language "Slovenian".

## Bug fixes

- Sliders now have new default values.
- Function graphs can be hidden and deleted.
- Sketched curves can be drawn through existing points (but then they no longer can be moved).
- Sliders can be mirrored again.
- ...

Unfortunately, the Android and Apple apps are still a little way off due to administrative hurdles.
We are hoping for a release at the end of September.

# Version v2.0

> 2024-06-28

Yay!!! After more than 13 years of development, there is finally a new version.

sketchometry 2.0 comes with many new features.

Of course, the completely revised user interface immediately catches the eye.
Unfortunately, the old interface has become increasingly confusing due to the constantly growing range of functions.
For this reason, we have reorganized and rearranged the functionalities.
You will find all tools (that cannot be used with gestures) in the toolbar at the bottom.
By the way: you can also find the gesture overview digitally in the app as an image.

The new interface also offers a gallery with a folder structure and is highly customizable.

There have also been some changes to the range of functions:

- Our gesture recognition is now even better and more reliable.
- We have added several gestures, such as center perpendicular, center parallel, Thales circle, tangents to
  sectors, ...
- In addition, there are new objects such as parallelogram, parallelogram point, angle of fixed size, distance of fixed
  length, ...
- The measuring mode has been split up: on the one hand there is "normal" measuring, on the other hand measuring with
  operations (sum, difference, ...). The dimensions of the objects are also taken into account here!
- Many new properties can be edited by you (objects, grid, coordinate system, ...)
- Of course, interactive texts are still possible. Now even with TeX.
- and much more!

Old constructions are automatically converted when opened in the new sketchometry.
(*Attention: this process cannot be undone!*)

The new version will also be available in the app stores within the next few weeks.

Have fun with the new version of sketchometry!   
If you discover any bugs, please contact us at <sketchometry@uni-bayreuth.de>.

# Version v2.0.beta.3

> 2024-05-27

There is now a fixed entry "New construction" in the gallery. In addition, the user can control the transparency of the
mode icon in the background.

There are now not only arrows as stroke ends, but also a bar to offer more display options.

A major bug has been fixed that made it very difficult or impossible to open pop-ups in Android.
As usual, there are also some other improvements.

# Version v2.0.beta.2

> 2024-05-08

In this version, some changes have been made to the user interface: Multitools are now displayed in a separate subpage
and no longer with a "Switch" button.
In addition, the standard mode is displayed again in the toolbar as soon as the current tool has been deselected.

Polish has been added as a new language.

In addition to a few minor improvements and new icons, the entries in the toolbar have also been reorganized and the
popup when closing a new construction has been removed.

# Version v2.0.beta.1

> 2024-04-15

In this beta version the languages Turkish and Chinese (simplified) have been added.

Measurements have been extended to sliders. Their value can now be "measured".

In addition, all modes that expect a point as input now create it when you click on an empty space in the
drawing area.

A few other bug fixes and improvements have also been made.

# Version v1.5.3-legacy

> 2024-05-02

This release is the final version of the 1.x series. It will be available in the future
at <https://legacy.sketchometry.org> to be found. Almost nothing has changed compared to version 1.5.2.

Constructions saved in this version can only be transferred to the new interface via export and import.
They are not transferred automatically.

# Version v2.0.beta

> 2024-03-20

Time has finally come. We are presenting sketchometry 2.0 as a live version in the beta phase:   
<a type="button" href="https://sketchometry.org/beta/">https://sketchometry.org/beta/</a>

## What's new?

- New revised interface
- Gallery with folders
- New gestures, such as perpendicular bisector, centerline, Thales circle, ...
- Advanced measurement with operations (sum, difference, ...)
- Many new properties (objects, grid, coordinate system, ...)
- Interactive texts (also with TeX)
- and much more

# Version v1.5.2

> 2019-03-06

sketchometry v1.5.2 brings improvements primarily to iOS devices: The speed of the sketchometry app has increased
drastically.

In addition, the "Share" menu is available for saving constructions (under "Save file").
This also automatically supports all cloud services installed on the device.

# Version v1.4.4

> 2019-02-20

sketchometry v1.4.4 fixes two small problems: labels could not be dragged and polygons could not be completely hidden.

In addition, direct mirroring of angles, arcs and sectors is not supported in this version.

# Version v1.4.3

> 2019-02-12

sketchometry v1.4.3 fixes usability problems on Android and Microsoft devices.

# Version v1.4.2

> 2019-02-11

sketchometry v1.4.2 enables the copying of polygons, fixes a speed problem when drawing curves and fixes some minor
bugs.

# Version v1.4.1

> 2019-02-08

sketchometry v1.4.1 fixes a speed problem that crept into the previous version.

Function graphs are now drawn at maximum speed again.

In addition, this version contains a small but far-reaching change:
If lines, segments and polygons are manipulated with two fingers on touch devices, these objects are now only rotated
and moved, but no longer scaled. This small change opens up a multitude of didactic possibilities.

# Version v1.4.0

> 2019-01-31

Version 1.4.0 of sketchometry has been available for a few days.

We are proud that sketchometry now also supports *Greek* - the language of the founders of *geometry*.

What's new in this version is that straight lines, segments, circles, curves and polygons can be mirrored directly on a
straight line or a point using the *mirror gesture*.

In addition, the notation for distance measurements has been adapted: e.g. the length of the segment through the two
points *A* and *B* is now referred to as |<span style="text-decoration:overline">AB</span>|.

Since this version, the number of constructions that can be stored in sketchometry is only limited by the size of the
storage medium (hard drive, SSD, ...).

Another change - in addition to the usual bug fixes - is that sketchometry is now available as a *progressive web app*
(PWA). This currently means:

- If sketchometry is opened online at <https://start.sketchometry.org> with an Android device, the device asks whether
  sketchometry should be saved locally. If the answer is yes, this local copy has the same options as the sketchometry
  app from the Google Play Store, so it can be used offline, for example.
- With Google Chrome under Windows / OS X / Linux, an offline copy can also be saved locally by clicking
  on `Install sketchometry` in  *Settings*.
- Microsoft and Apple have announced that they also want to support PWAs in the future.

# Version v1.3.5

> 2018-02-28

Version 1.3.5 corrects two small bugs: very short, straight scribble curves were positioned incorrectly and the "back"
button did not work in certain device configurations.

# Version v1.3.4

> 2018-02-21

Version 1.3.4 contains differentiable "scribble curves" for the first time. This is the first step towards curve
discussion in sketchometry.

In addition, polygons (in addition to points, lines and curves) can now be mirrored on lines and points.

Gliders can now snap into the grid.

Some annoying errors have also been fixed.

# Version v1.3.3

> 2017-12-08

Version 1.3.3 only corrects a few small but very annoying errors.

# Version v1.3.0

> 2017-12-04

Version 1.3.0 introduces a scribble mode that can be used to draw in a construction.

Furthermore, straight lines and curves can now also be mirrored directly.

In addition, when constructing on multitouch devices, unintentional finger touches on the device are recognized much
better.

# Version v1.2.9

> 2017-10-30

Version 1.2.9 fixes a bug introduced in version 1.2.8: Gliders on sectors caused a crash.

# Version v1.2.8

> 2017-10-27

Version 1.2.8 mainly contains bug fixes.

In particular, the latest versions of Internet Explorer and Edge browsers refused to accept finger input in
sketchometry.

Furthermore, we are very happy that sketchometry is now available in Arabic.

There is a small change in the input of calculated texts and function graphs.

Starting with this version, all function names that consist of more than one letter are lowercase.

## List of all available functions

- `cos(x)`   
  Cosine of *x*
- `cosh(x)`   
  Hyperbolic cosine of *x*
- `pow(e, b)`   
  *e* to the power of *b*
- `log(x), ln(x)`   
  Natural logarithm
- `log(x, b)`   
  Logarithm to base *b*
- `log2(x), lb(x)`   
  Logarithm to base 2
- `log10(x), ld(x)`   
  Logarithm to base 10
- `tan(x)`   
  Tangent of *x*
- `sqrt(x)`   
  (Square) root of *x*
- `ceil(x)`   
  Rounds up to the next larger integer *n* (*n > x*)
- `abs(x)`   
  Absolute value of *x*
- `max(a, b, c, ...)`   
  Returns the largest value (maximum) of all specified values
- `min(a, b, c, ...)`   
  Returns the smallest value (minimum) of all specified values
- `exp(x)`   
  EULER *e* to the power of *x*
- `atan2(y, x)`   
  Returns the arctangent of the quotient of the two arguments
- `random(max = 1)`   
  Generates a random number between *0* and *max*
- `round(v)`   
  Rounds *v* up or down to the nearest whole number
- `floor(x)`   
  Rounds down to the next smallest whole number *n* (*n < x*)
- `asin(x)`   
  Arcsine of *x*
- `acos(x)`   
  Arccosine of *x*
- `atan(x)`   
  Arctangent of *x*
- `sin(x)`   
  Sine of *x*
- `sinh(x)`   
  Hyperbolic sine of *x*
- `factorial(n)`   
  Factorial *n!*
- `trunc(v, p = 0)`   
  Truncates *v* after the *p*th decimal place
- `D(f(x)), D(f(t),t)`   
  Derivative of the function *f* with respect to *x* (*x* is the default name of the variable) | - `V(s)`
  Returns the value of the element, e.g. slider or angle
- `L(s)`   
  Calculates the length of the line *s*
- `X(P) Y(P)`   
  Returns the *x* or *y* coordinate of the point *P*
- `dist(P, Q)`   
  Calculates the distance between the two points *P* and *Q*
- `deg(A, B, C)`   
  Calculates the measure of the angle (degrees)
- `rad(A, B, C)`   
  Calculates the measure of the angle (radians)

## Other changes

- Auto-completion in text fields disabled
- New font: System font
- Bug fix: Microsoft Touch devices
- Bug fix: Snap to points
- Bug fix: Input language for texts and functions: JessieCode
- Bug fix: Numbers

# Version v1.2.7

> 2016-11-30

sketchometry 1.2.7 enables symbolic derivations for the first time.

For example, entering `D(x^3, x)` produces the function graph `f(x) = 3*x^2`.

In addition, some errors have been eliminated. For example, the check marks in the properties window (for example, for
track points) should now work without errors.

## Other changes

- Set center and intersection coordinates to read-only
- Remove `=` for point measurements
- Significantly improved pinch-to-zoom and pan (JSXGraph)
- Bug fix: Function term selection in the function plot dialog
- Bug fix: Simplified math input
- Disable antiderivatives in the function plot dialog (for now)
- Disable handwriting recognition in the function plot dialog

# Version v1.2.5

> 2016-09-27

Version 1.2.5 now supports the new languages Russian and Kazakh.

Mathematical expressions are now supported when setting point coordinates and circle radii. This opens up countless
possibilities for quickly creating advanced constructions.

In addition, zooming with the mouse wheel and individual scaling of the axes are supported again.

# Version v1.2.4

> 2016-07-06

sketchometry 1.2.4 now supports Czech, Norwegian (Norsk), Finnish and Chinese traditional.

Gesture recognition has also been improved, as well as zooming and audio functionality.

The user interface has been simplified somewhat.

The main bugs that have been fixed were bugs in the cloud connection and functionality checkboxes in the Properties
dialog.

## Other changes

- Bug fix: Change device orientation
- Use of click sounds on various buttons
- Exit the Properties dialog after deleting tracks
- Floating point values allowed as interval limits.
- Interval limits can now be changed later
- Properties dialog restructured
- "Axis scaling" property removed

# Version v1.2.2

> 2015-10-15

If no translation is available, sketchometry now uses English, and no longer Chinese, as the default language. In
addition, Chinese, Japanese, Serbian and Slovenian are recognized correctly.

# Version v1.2.0

> 2015-06-10

Version 1.2.0 is available!

## New features

- Embedding sketchometry in web pages as an iframe.
- Angles in triangles are now interior angles by default
- Faster access to properties of the drawing area (via *Properties*) through a separate toolbar
- Introduction of a fourth mode: When both drag mode and construction mode are turned off, a draggable hand symbol is
  visible. This is useful when a construction is presented and explained in the classroom via Apple TV or Chromecast.

## Bug fixes and improvements:

- sketchometry now also runs with Chrome or Firefox on touch devices under Windows
- Cloud connection of the Android app works again
- Better behavior when zooming
- Saving and loading constructions behaves consistently across different window sizes
- Size of the sketchometry app reduced by a factor of two
- No point is constructed when dragging sliders

# Version v1.1.9

> 2015-04-24

Version 1.1.9 is available!

# Version v1.1.8

> 2015-03-12

Version 1.1.8 is available!

# Version v1.1.7

> 2014-12-06

sketchometry 1.1.7 fixes two extremely critical bugs in the previous version:

- Immediate crash on Android 5 devices.
- Crash when opening a new construction in the iPad app and certain screen sizes.

*Please do NOT update the iOS app to version 1.1.6 and wait for version 1.1.7 to be released.*

# Version v1.1.6

> 2014-11-26

Version 1.1.6 fixes some bugs and includes new language versions.

# Version v1.1.5

> 2014-11-03

Version 1.1.5 improves and speeds up the plotting of function graphs.

# Version v1.1.4

> 2014-10-16

Version 1.1.4 fixes a bug that caused the app to crash immediately under iOS7, as well as a few other minor bugs.

# Version v1.0

> 2014-08-15

The time has finally come!

**sketchometry 1.0 is here.**

The final version of sketchometry is presented in a new GUI.