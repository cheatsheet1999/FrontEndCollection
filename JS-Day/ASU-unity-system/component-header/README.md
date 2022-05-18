# ASU Header
ASU Web Standards-based implementation of global header.

## CLI Commands

``` bash
# add component-footer
yarn add @asu-design-system/component-header

# run storybook
yarn storybook

# build for production with minification
yarn build

# run tests
yarn test

```

## How to install

1. Make sure you are set up to use the private npm registry at registry.web.asu.edu. See instructures in the 'How to use private package registry' here: [README.md](../../README.md)
2. ```yarn add @asu-design-system/component-header@dev```

## Use as a JS module in React app

### Default import
```JAVASCRIPT
    import { ASUHeader } from '@asu-design-system/component-header@dev'
```

### Aliased import
```JAVASCRIPT
  import { ASUHeader as Header } from '@asu-design-system/component-header@dev'
```

### Import for use in HTML page
You can find an example of how to set `ASUHeader` props [here](/packages/component-header/examples/global-header.html)

