# sketchometry website

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

The project `sketchometry` needs to be at the same level as this project for the following commands:

- Call `make version` to get version string from sketchometry and put it in all contexts of the website.
- Call `make versionlocal` to type a user defined version string and put it in all contexts of the website.
- Call `make libs` to copy libraries from sketchometry distrib.
- Call `make releasenotes` to copy release notes from sketchometry and put it in all contexts of the website.

The following call prepares a running version of the website in directory [distrib/](distrib/):
```shell
make website
```
It updates the website without getting version and release notes (but libs) from sketchometry.

The command `make websitelocal` doesn't need sketchometry at all and adapts version strings by expecting a user input.

### Release

To release the new version of website follow the steps:

1. Call in the root of this project:
   - `make website` (packs and compiles the current website in the present form)
   - `make websiteversion` (packs and compiles the current website, but asks for a version number first)
   - or `make release` (packs and compiles the current website, gets the current version and the release information from sketchometry beforehand)
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

### sketchometry logo

Tu use sketchometry logo in texts or headers type
`{{ const.sketchometry }}`.

### Icons

Icons from SketchoFont should be used as follows:

```html
<span class="sketcho sketcho-<iconname>"></span>
```

Replace `iconname` by the name of the desired icon.

For coloring icons use the additional classes `text-primary`, `text-red` etc.

**There should not be used any other class or sizing style!**
There is only one exception: See [separator](#Separators).

### References

To refer an image or document within this page use the reference a follows:

1. Start the reference with `{{ relBase }}`.
2. After this, add `/`.
3. Now define the path to the file from root file of the homepage.

### Links

Please use one of the following syntax:

```markdown
[<Text>]({{ relBase }}/<Link>)  # to refer an internal site or file.
[<Text>](https://<link>)        # to refer an external webpage.
```

Links are automatically supplemented with target="_blank" if

- they contain a link beginning with `http://` or `https://`.
- they refer to a file ending with `.pdf`, `.jpg`, `.png`, `.svg`, `.sketcho`, `.zip`, `.woff` or `.ttf`.
  These links are also preceded by an icon.

### Buttons

Buttons will be formatted if you use the following syntax:

```markdown
<a type="button" colorclass="<colorclass>" href="{{ relBase }}/url/to/your/target">
<span class="sketcho sketcho-<iconname>"></span>
<span>title</span>
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

For using an icon as a separator use the following code.
Size specifications are analogous to [images](#Images).

```html
<span class="sketcho sketcho-<iconname> icon-separator"></span> <!-- or -->
<span class="sketcho sketcho-<iconname> icon-separator-(xs|sm|md|lg)"></span>
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

| layout          | data attribute   | type       | possible values and **_defaults_**                                 | effect                                                                                 |
|-----------------|------------------|------------|--------------------------------------------------------------------|----------------------------------------------------------------------------------------|
| **text**        | colorclass       | optional   | **_transparent_** \| primary \| cat1 \| red \| ...                 | defines the background color class                                                     |
| **image-block** | image            | obligatory | url starting with `/`                                              | path to the image or gif                                                               |
|                 | image_pos        | optional   | **_first_** \| second                                              | the image is to the left or right of the text block                                    |
|                 | colorclass       | optional   | primary \| **_secondary_** \| cat1 \| red \| ...                   | defines the background color class                                                     |
| **blogs**       | delimiter_header | optional   | **_#&#9251;_** \| @...                                             | lines beginning with this string are used as headers                                   |
|                 | max_n            | optional   | **_-1_** \| 1 \| 2 \| 3 \| ...                                     | maximum entries                                                                        |
| **accordion**   | delimiter_header | optional   | **_#&#9251;_** \| @...                                             | lines beginning with this string are used as headers                                   |
|                 | delimiter_badge  | optional   | **_>&#9251;_** \| @...                                             | badge after header line                                                                |
|                 | badge_is_date    | optional   | **_false_** \| @...                                                | string which formats date                                                              |
|                 | max_n            | optional   | **_-1_** \| 1 \| 2 \| 3 \| ...                                     | maximum entries                                                                        |
|                 | open             | optional   | **_-1_** \| 0 \| 1 \| 2 \| ...                                     | which entry should be open?                                                            |
| **image**[^1]   | height           | optional   | xxs \| xs \| sm \| **_md_** \| lg \| xl \| xxl                     | determines the height of the image                                                     |
|                 | title            | optional   | plain text                                                         | optional title displayed in the bottom right corner                                    |
| **cols**        | cols             | obligatory | list of all entries with subentries title, text, link and iconname | will be rendered as 4 columns (on large displays, smaller displays have 2 or 1 column) |
|                 | colorclass       | optional   | **_transparent_** \| primary \| cat1 \| red \| ...                 | defines the background color of the columns                                            |

Notes:

[^1]: *file* does not determine a file `.section.md` but the path of the image.