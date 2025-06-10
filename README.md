# JSXGraph website

## Development and release

### Run test version

Build files to directory [distrib/](distrib/) via the call

```shell
jekyll serve -l
```

or

```shell
make dev
```

### Make

The project `jsxgraph` needs to be at the same level as this project for the following commands:

- Call `make version` to get version string from JSXGraph and put it in all contexts of the website.
- Call `make versionlocal` to type a user defined version string and put it in all contexts of the website.

The following call prepares a running version of the website in directory [distrib/](distrib/):

```shell
make website
```

It updates the website without getting version and release notes (but libs) from JSXGraph.

The command `make websitelocal` doesn't need JSXGraph at all and adapts version strings by expecting a user input.

### Release

To release the new version of website follow the steps:

1. Call in the root of this project:
    - `make website` (packs and compiles the current website in the present form)
    - `make websiteversion` (packs and compiles the current website, but asks for a version number first)
    - or `make release` (packs and compiles the current website, gets the current version and the release information from JSXGraph beforehand)
2. Pull the newest version from server.
3. Call `make version-git-tag` or `make version-git`. This will push all files to Git.
   ```shell
   git commit -a
   git push
   git tag vx.y.z  # optional in version-git-tag
   git push origin vx.y.z # optional in version-git-tag
   ```
4. Call `make upload` and type in the correct server password.   
   This does:
    - Copy files in [distrib/](distrib/) to the server via:
       ```shell
       scp -r distrib/ root@132.180.10.7:/net/httpd/htdocs/sketchometry/home.new
       ```
    - Link new version to <https://sketchometry.org> and link <https://sketchometry.org/download> via
       ```shell
       ssh root@132.180.10.7 "cd /net/httpd/htdocs/sketchometry/; rm -r home.old; mv home home.old; mv home.new home; cd /net/httpd/htdocs/sketchometry/home/; ln -s ../versions/download/ download;"
       ```
5. Adapt link of <https://heftreihe.sketchometry.org> (`/net/httpd/htdocs/sketchometry/heftreihe/`).

## Components

### References

To refer an image or document within this page use the reference a follows:

1. Start the reference with `{{ relBase }}`.
2. After this, add `/`.
3. Now define the path to the file from root file of the homepage.

### Links

Please use one of the following syntax:

```markdown
[<Text>]({{ relBase }}/<Link>)  # to refer an internal site or file.
[<Text>](https://<link>)                   # to refer an external webpage.
```

Links are automatically supplemented with target="_blank" if

- they contain a link beginning with `http://` or `https://`.
- they refer to a file ending with `.pdf`, `.jpg`, `.png`, `.svg`, `.sketcho`, `.zip`, `.woff` or `.ttf`.
  These links are also preceded by an icon.

### Buttons

Buttons will be formatted if you use the following syntax:

```markdown
<a type="button" colorclass="<colorclass>" href="{{ relBase }}/url/to/your/target">
title
</a>
```

Optional you can omit the icon line. It is important to use
either `<a type="button"` or `<button type="button"` and no class.
The attribute `colorclass` can also been omitted.

### Separators

You can use an image or an icon as a separator.

For images have a look [here](#Images) and use

```html
<img src="{{ relBase }}/<link-to-image>" alt="<title>" class="image-separator-(xs|sm|md|lg)">
```

### Images

Add images by using

```html
<img src="{{ relBase }}/<link-to-image>" alt="<title>">
```

or

```markdown
![<title>]({{ relBase }}/<link-to-image>)
```

by replacing `<link-to-image>` and `<title>`.
Pay attention to [this](#references).

Images always have a width of 100%.
If you would like to have a different formatting,
use the following classes:

| class                | behavior                                                                                  |
|----------------------|-------------------------------------------------------------------------------------------|
| image-separator-xs   | use a x-small image as a separator in the horizontal middle of the page                   |
| image-separator(-sm) | use a small image as a separator in the horizontal middle of the page                     |
| image-separator-md   | use a middle image as a separator in the horizontal middle of the page                    |
| image-separator-lg   | use a large image as a separator in the horizontal middle of the page                     |
| image-float-left     | place the image at the top left of the following block while the content flows around it  |
| image-float-right    | place the image at the top right of the following block while the content flows around it |

## Sections

The following sections (and params) are possible:

| layout          | data attribute   | type       | possible values and **_defaults_** | effect                                                              |
|-----------------|------------------|------------|------------------------------------|---------------------------------------------------------------------|
| **text**        | -                |            |                                    |                                                                     |
| **subpages**    | parent           | optional   | id of page (default: this page)    | id of parent page                                                   |
|                 | polygon          | optional   | shape (default: detault_polygon)   | shape of boxes                                                      |
| **image-block** | image            | obligatory | url starting with `/`              | path to the image or gif                                            |
|                 | image_pos        | optional   | **_first_** \| second              | the image is to the left or right of the text block                 |
| **image**[^1]   | image            | obligatory | url starting with `/`              | path to the image or gif                                            |
|                 | title            | optional   | plain text                         | optional title displayed in the bottom right corner                 |
|                 | width            | optional   | dimension with unit, default: 100% | optional dimension                                                  |
|                 | class            | optional   |                                    | css class for img                                                   |
| **blogs**       | delimiter_header | optional   | **_#&#9251;_** \| @...             | lines beginning with this string are used as headers                |
|                 | delimiter_badge  | optional   | **_>&#9251;_** \| @...             | badge after header line                                             |
|                 | badge_is_date    | optional   | **_false_** \| @...                | string which formats date                                           |
|                 | delimiter_id     | optional   | **_>&#9251;_** \| @...             | id after header line                                                |
|                 | n                | optional   | **_-1_** \| 1 \| 2 \| 3 \| ...     | maximum entries                                                     |
| **accordion**   | delimiter_header | optional   | **_#&#9251;_** \| @...             | lines beginning with this string are used as headers                |
|                 | delimiter_badge  | optional   | **_>&#9251;_** \| @...             | badge after header line                                             |
|                 | badge_is_date    | optional   | **_false_** \| @...                | string which formats date                                           |
|                 | delimiter_id     | optional   | **_>&#9251;_** \| @...             | id after header line                                                |
|                 | n                | optional   | **_-1_** \| 1 \| 2 \| 3 \| ...     | maximum entries                                                     |
|                 | arrows           | optional   | **_right_** \| left                | position of arrow                                                   |
|                 | open             | optional   | **_-1_** \| 0 \| 1 \| 2 \| ...     | which entry should be open?                                         |
| **board-block** | boardid          | obligatory | unique id                          | unique id that is used in code_file                                 |
|                 | board_pos        | optional   | **_first_** \| second              | the board is to the left or right of the text block                 |
|                 | width            | optional   | **_100%_** \| ...                  | width of the board                                                  |
|                 | height           | optional   | **_auto_** \| ...                  | height of the board                                                 |
|                 | aspect_ratio     | optional   | **_1/1_** \| ...                   | aspect-ratio of the board                                           |
|                 | code_file        | optional   | url starting with `/`              | path to the js file (default is same as **_file_** with ending .js) |

Notes:

[^1]: *file* does not determine a file `.section.md` but the path of the image.