# React Practices

An example of using React with Typescript, Immutable JS, Rx JS, and Server Side Rendering.

# Demo

A Photo wall for irregular size of images: http://react-typescript-demo.herokuapp.com/photos/cat.
Try to resize the browser to see the effects.

# Install & Build & Run

The program requires a Flickr Key to fetch photos from Flickr API.
Copy the content below and replace with your flickr key, put it into a `.env` file at the root of the project folder.

```
PORT=8080
FLICKR_KEY=your_flickr_key
```

To Install

```
npm install
```

To Build

```
gulp build
```

To Run

```
npm start
```
