# react-modal

### Description
React modal component

### Installation
```
npm install @opuscapita/react-modal styled-components
```

### Demo
View the [DEMO](https://opuscapita.github.io/react-modal)

### Change log
View the [Change log](CHANGELOG.md)

### Migrate guide
View the [Migrate guide](MIGRATEGUIDE.md) between major versions

### Builds
#### UMD
A build with compiled styles in the .js file. Also minified version available in the lib/umd directory.
#### CommonJS/ES Module
You need to configure your module loader to use `cjs` or `es` fields of the package.json to use these module types.
Also you need to configure sass loader, since all the styles are in sass format.
* With webpack use [resolve.mainFields](https://webpack.js.org/configuration/resolve/#resolve-mainfields) to configure the module type.
* Add [SASS loader](https://github.com/webpack-contrib/sass-loader) to support importing of SASS styles.

### API
#### Modal
| Prop name                | Type             | Default                                  | Description                              |
| ------------------------ | ---------------- | ---------------------------------------- | ---------------------------------------- |
| id                       | string           | oc-modal                                 | Component ID                             |
| className                | string           | oc-modal                                 | Component class                          |
| isOpen                   | boolean          | true                                     | Is modal visible                         |
| width                    | string           | 100%                                     | Modal width as CSS style                 |
| height                   | string           | 100%                                     | Modal height as CSS style                |

#### Modal.Header
| Prop name                | Type             | Default                                  | Description                              |
| ------------------------ | ---------------- | ---------------------------------------- | ---------------------------------------- |
| id                       | string           | oc-modal-header                          | Component ID                             |
| className                | string           | oc-modal-header                          | Component class                          |

#### Modal.Body
| Prop name                | Type             | Default                                  | Description                              |
| ------------------------ | ---------------- | ---------------------------------------- | ---------------------------------------- |
| id                       | string           | oc-modal-body                            | Component ID                             |
| className                | string           | oc-modal-body                            | Component class                          |
| isBorderVisible          | boolean          | false                                    | Show border around body area             |

#### Modal.Footer
| Prop name                | Type             | Default                                  | Description                              |
| ------------------------ | ---------------- | ---------------------------------------- | ---------------------------------------- |
| id                       | string           | oc-modal-footer                          | Component ID                             |
| className                | string           | oc-modal-footer                          | Component class                          |

#### Modal.ButtonContainer
| Prop name                | Type             | Default                                  | Description                              |
| ------------------------ | ---------------- | ---------------------------------------- | ---------------------------------------- |
| id                       | string           | oc-modal-button-container                | Component ID                             |
| className                | string           | oc-modal-button-container                | Component class                          |

### Code example
```jsx
import React from 'react';
import Modal from '@opuscapita/react-modal';

export default class ReactView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleModal = () => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div>
        <button type="button" onClick={this.toggleModal}>
          Open Modal
        </button>
        <Modal
          isOpen={isOpen}
        >
          <Modal.Header>
            Attention
          </Modal.Header>
          <Modal.Body>
            This is the example modal!
          </Modal.Body>
          <Modal.Footer>
            <Modal.ButtonContainer>
              <button type="button" onClick={this.toggleModal}>
                Close Modal
              </button>
            </Modal.ButtonContainer>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
```
