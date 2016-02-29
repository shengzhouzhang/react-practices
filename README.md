# React Practices

An example of using React with Typescript, Immutable JS, Rx JS, and Server Side Rendering.

# Demo

A photo wall for irregular size of images: http://react-typescript-demo.herokuapp.com/photos/cat.
Try to resize the browser to see the effects.

# Project Setup

The program requires a Flickr Key to fetch photos from Flickr API.
Copy the content below and replace with your flickr key, put it into a `.env` file at the root of the project folder.

```
PORT=8080
FLICKR_KEY=your_flickr_key
```

And do

```
npm install
```

# Build & Run

```
gulp build
```

```
node develop.js
```
