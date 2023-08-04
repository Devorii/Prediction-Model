# Keyword Suggestion Tool
keyword suggestion tool, simplifies the way we search for specific items. 
You provide the model with a simplified array of words and the application
does the rest.

### Installation
```bash
npm install @initdecory/keyword-search
```

### Implementation
Our example is going to be for ReactJS you can import base on your 
respective environment.

```js
// First import the package 
import SuggestionModel from '@initdecory/keyword-search';

const yourFunction = () => { 
    const rawDataset = ["cat","camomile","car","clone","client","dog","dot","door"]
    ...
    // initialise SuggestionModel
    const sm = new SuggestionModel()
    // load your dataset
    sm.dataFeed(rawDataset)
    // get your predictions
    const suggestions = sm.getSuggestions('ca')
    // View suggesion
    console.log(suggestions)
    // output: ["cat", "camomile", "car"]
}

```

### Thank you for reading. Happy coding...

