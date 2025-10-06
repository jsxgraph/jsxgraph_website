# JSXGraph website

## Components

### References and Links

To refer an image or document within this page use the reference a follows:

1. Start the reference with `{{ relBase }}`.
2. After this, add `/`.
3. Now define the path to the file from root file of the homepage.

For links use one of the following syntax:

```markdown
[<Text>]({{ relBase }}/<Link>)      # to refer an internal site or file.
[<Text>](https://<link>)            # to refer an external webpage.
```

Links are automatically supplemented with target="_blank" if

- they contain a link beginning with `http://` or `https://`.
- they refer to a file ending with `.pdf`, `.jpg`, `.png`, `.svg`, `.sketcho`, `.zip`, `.woff` or `.ttf`.
  These links are also preceded by an icon.

### Code highlighting

Change theme by executing

```markdown
rougify style ... > src/assets/less/code_highlighting.css
```

Following styles are available:
- base16
- base16.dark
- base16.light
- base16.monokai
- base16.monokai.dark
- base16.monokai.light
- base16.solarized
- base16.solarized.dark
- base16.solarized.light
- bw
- colorful
- github
- github.dark
- github.light
- gruvbox
- gruvbox.dark
- gruvbox.light
- igorpro
- magritte
- molokai
- monokai
- monokai.sublime
- pastie
- thankful_eyes
- tulip


### Buttons

```markdown
<a type="button" colorclass="<colorclass>" href="{{ relBase }}/url/to/your/target">
    title
</a>
```

It is important to use either `<a type="button"` or `<button type="button"` and no class.
The attribute `colorclass` can also been omitted.

### Images

Add images by using one of the following lines

```markdown
<img src="{{ relBase }}/<link-to-image>" alt="<title>">
![<title>]({{ relBase }}/<link-to-image>)
```

by replacing `<link-to-image>` and `<title>`.
Pay attention to [this](#references).

Images always have a width of 100%.
If you would like to have a different formatting, use section image.

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
|                 | class            | optional   | e.g. "mx-auto" for centering       | css class for img                                                   |
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
| **cards**       | delimiter_header | optional   | **_#&#9251;_** \| @...             | lines beginning with this string are used as headers                |
|                 | delimiter_image  | optional   | **_>&#9251;_** \| @...             | image after header line                                             |
|                 | delimiter_link   | optional   | **_>&#9251;_** \| @...             | link after header line                                              |
|                 | delimiter_id     | optional   | **_>&#9251;_** \| @...             | id after header line                                                |
|                 | n                | optional   | **_-1_** \| 1 \| 2 \| 3 \| ...     | maximum entries                                                     |
| **board-block** | boardid          | obligatory | unique id                          | unique id that is used in code_file                                 |
|                 | board_pos        | optional   | **_first_** \| second              | the board is to the left or right of the text block                 |
|                 | title            | optional   | plain text                         | subtitle under the board                                            |
|                 | link             | optional   | url                                | link for the subtitle                                               |
|                 | target           | optional   | _blank \| _self                    | target for the link (default will be calculated)                    |
|                 | width            | optional   | **_100%_** \| ...                  | width of the board                                                  |
|                 | height           | optional   | **_auto_** \| ...                  | height of the board                                                 |
|                 | aspect_ratio     | optional   | **_1/1_** \| ...                   | aspect-ratio of the board                                           |
|                 | code_file        | optional   | url starting with `/`              | path to the js file (default is same as **_file_** with ending .js) |
| **board**[^1]   | code_file        | optional   | url starting with `/`              | path to the js file (default is same as **_file_** with ending .js) |
|                 | boardid          | obligatory | unique id                          | unique id that is used in code_file                                 |
|                 | title            | optional   | plain text                         | subtitle under the board                                            |
|                 | link             | optional   | url                                | link for the subtitle                                               |
|                 | target           | optional   | _blank \| _self                    | target for the link (default will be calculated)                    |
|                 | width            | optional   | **_500px_** \| ...                 | width of the board                                                  |
|                 | max_width        | optional   | **_100%_** \| ...                  | max-width of the board                                              |
|                 | height           | optional   | **_auto_** \| ...                  | height of the board                                                 |
|                 | aspect_ratio     | optional   | **_1/1_** \| ...                   | aspect-ratio of the board                                           |
|                 | class            | optional   | e.g. "mx-auto" for centering       | css class for board                                                 |

Notes:

[^1]: *file* does not determine a file `.section.md` but the path of the extra file.

## Development and release

### Run live test version

```shell
make dev
```

### Version number

- Adapt `version` and `version_year` in [src/_data/const.yml](src/_data/const.yml)
- _or:_ Write version number in line 1, as array in line 2 and year in line 3 in [VERSION](VERSION) and call ``
  ```shell
  make versionwrite
  ```
- _or:_ Get version number from JSXGraph project (in same directory as this project):
  ```shell
  make version
  ```

### Build files in [distrib/](distrib/)

```shell
make build
```

### Release / Upload to server

```shell
make release # build and upload
make upload  # upload prebuild distrib directory
```

The Upload does:

- Copy files in [distrib/](distrib/) to the server via:
   ```shell
   scp -r distrib/ root@132.180.10.7:/net/httpd/htdocs/jsxgraph/home.new
   ```
- Link new version to <https://jsxgraph.org> and link <https://jsxgraph.uni-bayreuth.de> via
   ```shell
   ssh root@132.180.10.7 "cd /net/httpd/htdocs/jsxgraph/; rm -r home.old; mv home home.old; mv home.new home;"
   ```