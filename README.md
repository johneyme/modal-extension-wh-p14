# Modal-Extension-WH-p14

A simple modal to confirm form

## Installation

The package can be installed via [npm](https://github.com/npm/cli):

```
npm install modal-extension-wh-p14
```

Or via [yarn](https://github.com/yarnpkg/yarn):

```
yarn add modal-extension-wh-p14
```

You’ll need to use react to this extension. You may use CRA (Create React App), to be sure that work perfectly.

```js
import Modal from 'modalextensionwh-p14';
const [isOpen, setIsOpen] = useState(false);

<section>
  <form>
  // Your complete form here
  </form>

  <button
    className="primaryBtn "
    onClick={() => yourSubmitFonction(setIsOpen(true))}
  >
    Save
  </button>
  {isOpen && <Modal setIsOpen={setIsOpen} modalText="Confirmed !" />}
</section>;
```

## Configuration

You must to put 2 props in <Modal> and question isOpen to open Modal if isOpen is true or false

1 - setIsOpen={yourUseStateVariable}

2 - modalText="Your Text Here !"

exemple:

```js
{
  isOpen && (
    <Modal setIsOpen={yourUseStateVariable} modalText="Your Text Here !" />
  );
}
```

### React

We're always trying to stay compatible with the latest version of React. We can't support all older versions of React.

Latest compatible versions:

- React 16 or newer

### Browser Support

ModalExtensionWH-p14 is compatible with the latest versions of Chrome and Firefox.

## Credits

2022 - JohnDevCode
