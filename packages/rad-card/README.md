<p align="center">
  <img align="center" src="./../../assets/RAD.png" height="250"/>
</p>
<h1 align="center">Rad Card</h1>

A simple card component that is small and easily extendable.

## Install
```bash
yarn add rad-card
# OR
npm install --save rad-card
```

## Usage
The rad-card module exposes 3 components:
```js
import { Card, CardHeader, CardMedia } from 'rad-card';
```
```js
import { Card, CardHeader, CardMedia } from 'rad-card';

function CardExample(props) {
  return (
    <Card>
      <CardHeader
        avatar="https://avatars2.githubusercontent.com/u/8888991?v=3&amp;s=400"
        title="Kennet Postigo"
        subtitle="Developer @Hyperfuse"
      />
      <CardMedia
        media="https://9to5mac.files.wordpress.com/2013/09/rolling-waves.jpg"
        overlay={{ title: 'Flowing In', subtitle: 'We Here' }}
      />
      <div style={{ margin: 10 }}>
        <h3 style={{ margin: 4 }}>Hello Guys</h3>
        <p style={{ margin: 2 }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad.
        </p>
      </div>
    </Card>
  );
}
```
## Contributing
To get started contributing make sure to do the following:

__Clone the repo__
```bash
git clone
```

__Go into packages and then rad-card__
```bash
cd packages/rad-card
```

__Install Dependencies__
```bash
yarn
# OR
npm install
```

__Watch file and your changes__
```bash
yarn run watch
# OR
npm run watch
```

__Build for development and production__
```bash
yarn run build
# OR
npm run build
```

## License
MIT
