class Graph {
    constructor() {
        this.adjucencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjucencyList[vertex]) {
            this.adjucencyList[vertex] = [];
            return true;
        }
        return false;
    }

    addEdge(vertex1, vertex2) {
        if (this.adjucencyList[vertex1] && this.adjucencyList[vertex2]) {
            this.adjucencyList[vertex1].push(vertex2);
            this.adjucencyList[vertex2].push(vertex1);
            return true;
        }
        return false;
    }

    removeEdge(vertex1, vertex2) {
        if (this.adjucencyList[vertex1] && this.adjucencyList[vertex2]) {
            this.adjucencyList[vertex1] = this.adjucencyList[vertex1].filter(x => x != vertex2);
            this.adjucencyList[vertex2] = this.adjucencyList[vertex2].filter(x => x != vertex1);
            return true;
        }
        return false;
    }

    removeVertex(vertex) {
        if (!this.adjucencyList[vertex]) return undefined;
        while (this.adjucencyList[vertex].length) {
            let temp = this.adjucencyList[vertex].pop();
            this.removeEdge(vertex, temp);
        }
        delete this.adjucencyList[vertex];
        return list;
    }
}

let myGraph = new Graph();
console.log(myGraph);