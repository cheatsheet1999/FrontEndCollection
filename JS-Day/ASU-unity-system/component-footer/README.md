# ASU Footer
ASU Web Standards-based implementation of global footer.

## CLI Commands

``` bash
# add component-footer
yarn add @asu-design-system/component-footer

# run storybook
yarn storybook

# build for production with minification
yarn build

# run tests
yarn test

```

## How to install

1. Make sure you are set up to use the private npm registry at registry.web.asu.edu. See instructures in the 'How to use private package registry' here: [README.md](../../README.md)
2. ```yarn add @asu-design-system/component-footer@dev```


## Use as a JS module in React app

### Default import
```JAVASCRIPT
    import { ASUFooter } from '@asu-design-system/component-footer@dev'
```

### Aliased import
```JAVASCRIPT
  import { ASUFooter as Footer } from '@asu-design-system/component-footer@dev'
```

### Import for use in HTML page
```HTML
<html>
  <head>
    <!-- Add scripts to include react -->
    <script
      src="https://unpkg.com/react@17/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"
      crossorigin
    ></script>
  </head>
  <body>
    <h1>Test</h1>
    <!-- Create target container -->
    <div id="asuFooter"></div>

    <script src="./vendor.production.js"></script>
    <script src="./Footer.production.js"></script>
    <script>
      // Setup props for footer
      var props = {
        social: {
          unitLogo: 'path/to/your/unit/logo.png',
          mediaLinks: {
            facebook: 'https://facebook.com', // link to your facebook page
            twitter: 'https://twitter.com', // link to your twitter page
            instagram: 'https://instagrampage.com', // link to your instagram page
            linkedIn: 'https://linkedin.com', // link to your linked in page
            youtube: 'https://youtube.com' // link to your youtube page
          }
        },
        contact: {
          title:
            'Complete Name of College, School or Unit Title Should Go Here',
          contactLink: '#',
          contributionLink: '#',
          columns: [
            {
              title: 'Column Two',
              links: [
                {
                  url: '#',
                  title: 'link',
                  text: 'Biological and Health Systems Computing'
                }
                // Additional links go here
              ]
            }
            // Additional columns go here
          ]
        }
      };

      AsuFooter.initASUFooter({
        targetSelector: '#asuFooter',
        props: props
      });
    </script>
  </body>
</html>

```

### Define your footer sections. Defaults to basic footer with no arguments. Optional sections include the social and content sections.

* Social section displays approved custom unit logo and links to social media pages. Each social media link is optional and may be ommitted. Template to build social object is as follows:

```JAVASCRIPT
  const social = {
    unitLogo: "path/to/your/unit/logo.png",
    mediaLinks: {
      facebook: "https://facebook.com", // link to your facebook page
      twitter: "https://twitter.com", // link to your twitter page
      instagram: "https://instagrampage.com", // link to your instagram page
      linkedIn: "https://linkedin.com", // link to your linked in page
      youtube: "https://youtube.com" // link to your youtube page
    }
  }
```

* Contact section displays link to your unit page and button to link to yoru unit contribution page. Contact section also allows optionally including one or multiple titled columns of links. Template to build contact object is as follows:

```JAVASCRIPT
  const contact = {
    title: "Complete Name of College, School or Unit Title Should Go Here",
    contactLink: "#",
    contributionLink: "#",
    columns: [
    {
      title: "Column Two",
      links: [
        {
          url: "#",
          title: "link",
          text: "Biological and Health Systems Computing"
        },
        // Additional links go here
      ]
    },
    // Additional columns go here
  ]
}
```

### Build out the component, optionally providing your sections props.

```JAVASCRIPT
  const App = (props) => {
    return (
      <div>
        <ASUFooter social={social} contact={contact} />
      </div>
    )
  };

  export default App;

```


## Footer properties


```JAVASCRIPT
/**
* @param({
*   social?: Social,
*   contact: Contact
* }) props
*/

/**
* @typedef({
*   unitLogo?: string,
*   mediaLinks?: {
*     facebook?: string,
*     twitter?: string,
*     linkedIn?: string,
*     instagram?: string,
*     youtube?: string,
*   }
* }) Social;
*/

/**
* @typedef({
*   title: string,
*   contactLink: string,
*   contributionLink?: string,
*   columns?: Column[]
* }) Contact;
*/

/**
* @typedef({
*   title: string,
*   links: Link[]
* }) Column;
*/

/**
* @typedef({
*   url: string,
*   title: string,
*   text: string,
* }) Link
*/
```;
