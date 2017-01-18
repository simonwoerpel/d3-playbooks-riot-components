# d3-playbooks-riot-components

Add `legend`, `infobox` and `selector` to [`d3-playbooks`](https://github.com/simonwoerpel/d3-playbooks) and [`d3-playbooks-maps`](https://github.com/simonwoerpel/d3-playbooks-maps) as public methods.

## Quickstart

```javascript
d3.playbooks.choroplethMap(<opts>).render()
  .legend(<opts>)
  .infobox(<opts>)
  .selector(<opts>)
```

## map example

[See this map in action](https://correctiv.org/en/investigations/superbugs/atlas/superbug-atlas-e-coli-fluoroquinol/)

there is no need to specify the `element`-selectors, but this is useful to structurize your visualization (otherwise the components will be just appended to the root element of the chart).

```html
<section class="superbugs-map-wrapper">
  <section id="superbugs-map"></section>
  <section id="superbugs-map__legend"></section>
  <section id="superbugs-map__info-wrapper">
    <section id="superbugs-map__selector"></section>
    <section id="superbugs-map__infobox"></section>
  </section>
</section>
```


```javascript
d3.playbooks.choroplethMap(<opts>).render()

.infobox({
  element: '#superbugs-map__infobox',
  // {name} and {display_value} are just some columns from the csv file
  template: `
    <h3>{name}</h3>
    <p class="infobox__data">{display_value}</p>
    <h4>Escherichia coli vs cephalosporins</h4>
    <p class="infobox__subtitle">Resistance to 3rd generation cephalosporins in percent.
    Of all infections with this bacterium, this percentage was resistant to this antibiotic.</p>
    <p class="infobox__eudata">EU: 12 %</p>
    <p class="infobox__annotation">ECDC Surveillance report 2014, except Poland (2013)</p>
  `
})

.selector({
  element: '#superbugs-map__selector',
  getLabel: f => f.name
})

.legend({
  element: '#superbugs-map__legend',
  wrapperTemplate: '<ul name="legend">{body}</ul>',
  itemTemplate: '<li style="background-color:{color}">{label} %</li>'
})
```
