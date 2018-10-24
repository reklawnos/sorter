# Sorter
![A gif showing the sorter in action, starting with a list of examples. After the "start" button is pressed, a pair of buttons show the two current options. One of each of the options is clicked, and a sorted version of the list is displayed.](https://github.com/reklawnos/sorter/blob/master/example.gif?raw=true)

Normally when sorting a big list of stuff it's hard to keep track of all the items on the list and figure out the relative priority of items. This is a simple tool that makes it easy to sort a (potentially long) list of things using binary comparisons that are hopefully easy to decide on.

The app implements an async [merge sort](https://en.wikipedia.org/wiki/Merge_sort) with the user acting as the comparator.

## Development
This app just uses `create-react-app`, so the commands for it are pretty straightforward.
```
npm i
npm start
npm build
```
