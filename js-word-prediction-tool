class PredictiveModel {
  static predictionTree = {};

  constructor(node = null) {
    this.node = node;
    this.predictions = null;
  }

  insertNode(root) {
    const pt = PredictiveModel.predictionTree;
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
      const pm = new PredictiveModel();
      pm.insertNode(i);
    }
  }

  getPrediction(char) {
    const pt = PredictiveModel.predictionTree;
    if (char in pt) {
      console.log(pt[char]);
    } else {
      console.log('No suggestions');
    }
  }
}

const rawDataset = ["cat", "camomile", "car", "clone", "client", "dog", "dot", "door"];
const pm = new PredictiveModel();
pm.dataFeed(rawDataset);
pm.getPrediction('cam');
