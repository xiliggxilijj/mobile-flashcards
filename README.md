## Udacity Mobile Flashcards

To install:

1. clone this repo
2. Run yarn commands:


```
		yarn install
		yarn start
```

## Testing

This was tested on expo on both **ios** and the **ios simulator**. I didn't test it on android.

## Design

The storage uses Asyncstorage. A global json object is kept around, and is used as the truth while the app is loaded. It is initalized with the sample data from the project description page. It is updated from the Async store when the data is ready. Changes to the datastore are made through the utils/storage.js api. The changes are made locally, and then save is called. Save notifies the App.js top <App> that there is a change, through a callback. That calls setstate, and pushes a re-render down through all of the children views.  This turned out to be a powerful and simple way to update everything.


## Unsolved Problems
* I am not sure why the header height is wrong

## Left to future improvements
* there is no way to delete or edit data right now

