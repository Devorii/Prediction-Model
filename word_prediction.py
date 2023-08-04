class Predictive_model: 
    prediction_tree = {}
    
    def __init__(self, node=None):
        self.node = node
        self.predictions = None
        
    def insert_node(self,root):
        pt = Predictive_model.prediction_tree
        for n, _ in enumerate(root): 
            root_char=root[:n+1]
            if root_char not in pt:
                pt[root_char]=[root]
            if root_char in pt and root not in pt[root_char]: 
                pt[root_char].append(root)
                
    def data_feed(self, data): 
        for i in data: 
            pm = Predictive_model()
            pm.insert_node(i)
                
    def get_prediction(self, char):
        pt = Predictive_model.prediction_tree
        if char in pt: 
            print(pt[char])
        else: 
            print('No suggestions')
    

raw_dataset = ["cat","camomile","car","clone","client","dog","dot","door"]
pm = Predictive_model()
pm.data_feed(raw_dataset)
pm.get_prediction('cam')
