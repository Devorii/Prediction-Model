// 
class SuggestionModel {
    static suggestionTree = {};
  
    constructor(node = null) {
      this.node = node;
      this.suggestions = null;
    }
  
    insertNode(root) {
      const pt = SuggestionModel.suggestionTree;
      for (let n = 0; n < root.length; n++) {
        const rootChar = root.slice(0, n + 1);
        if (!(rootChar in pt)) {
          pt[rootChar] = [root];
        }
        if (rootChar in pt && !pt[rootChar].includes(root)) {
          pt[rootChar].push(root);
        }
      }
    }
  
    dataFeed(data) {
      for (const i of data) {
        const pm = new SuggestionModel();
        pm.insertNode(i);
      }
    }
  
    getSuggestions(char) {
      const pt = SuggestionModel.suggestionTree;
      if (char in pt) {
        return pt[char];
      } else {
        return 'No suggestions';
      }
    }
  }


module.exports = SuggestionModel;