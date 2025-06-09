# Mango UI DSL Reference

A concise guide to Mango’s UI syntax. Still a WIP – but powerful enough to build small UIs already.

## 🪟 Window Declaration

```mango
window "Demo App" 800 600 "icon.png" {
  text "Hello, Mango!" {
    fontsize: 32
    foreground: blue
    margin: symmetric 20 40
  }

  button "Click me!" {
    isvisible: true
    width: 120
    height: 40
  }

  container {
    layout: horizontal
    margin: custom 10 10 20 20

    checkbox "Accept Terms"
    toggleswitch "Dark Mode"
  }
}
````

This opens a window with a text, a button, and a container with a checkbox and toggle.
The icon path is optional. Width/height default to system values if omitted.

## 🧱 UI Elements

| Element        | Syntax Example                              |
| -------------- | ------------------------------------------- |
| `text`         | `text "Hello"`                              |
| `button`       | `button "Click me"`                         |
| `textbox`      | `textbox "default text"`                    |
| `checkbox`     | `checkbox "Accept"`                         |
| `radiobutton`  | `radiobutton "A"`                           |
| `toggleswitch` | `toggleswitch "Mode"`                       |
| `togglebutton` | `togglebutton`                              |
| `calendar`     | `calendar`                                  |
| `container`    | `container { layout: vertical margin: 10 }` |

## 🧩 Props

Props go inside `{ ... }` blocks after an element.

### 📎 Common Props

```mango
isvisible: true
width: 200
height: 100
margin: 10             // all sides
margin: 10 20          // vertical, horizontal
margin: 5 10 15 20     // top, right, bottom, left
```

### ✍ Text Styling

```mango
foreground: red
background: #eeeeee
fontsize: 24
fontweight: 700
fontfamily: "Consolas"
fontstyle: italic underline
margin: 10 20
lineheight: 30
textwrap: wrap
textalign: center
texttrim: word
```

### 📦 Container Props

```mango
layout: vertical
margin: 5
```

## 🎨 Colors

```mango
foreground: blue
background: #ffcc00
background: #ffcc00aa  // includes alpha
```

Named colors:
`red`, `green`, `blue`, `pink`, `yellow`, `white`, `black`
Hex: `#rrggbb` or `#rrggbbaa`

## 🧠 Embedded Functions (WIP)

```mango
function greet() {
  let name = "Francisco"
  let msg = "Hi " + name
}
```

* `function <name>() { ... }`
* Inside: `let <name> = <value>` or bare expressions
* No conditionals, returns or type system (yet)

## 🧪 Known Limitations

* No layout nesting yet
* Function blocks are inert (no control flow)
* Only basic string escapes (`\n`, `\t`)
* Error messages are rudimentary


## 📚 More

Check out Mango's sources [on GitHub](https://github.com/mangofn/Mango)

> Feel free to PR improvements to this DSL!
> Built with ❤️ by Heliacer, Ameer, Thobias & Marvin