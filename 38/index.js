// Dijkstra's Algorithm implementation
function dijkstra(graph, startNode) {
    const distances = {};
    const visited = {};
    const previousNodes = {};
  
    // Initialize distances to infinity and previous nodes to null
    for (const node in graph) {
      distances[node] = Infinity;
      previousNodes[node] = null;
    }
  
    distances[startNode] = 0;
  
    while (true) {
      let closestNode = null;
      let shortestDistance = Infinity;
  
      // Find the unvisited node with the shortest distance from start
      for (const node in graph) {
        if (!visited[node] && distances[node] < shortestDistance) {
          closestNode = node;
          shortestDistance = distances[node];
        }
      }
  
      if (!closestNode) break;
  
      // Mark the closest node as visited
      visited[closestNode] = true;
  
      // Update distances to neighboring nodes
      for (const neighbor in graph[closestNode]) {
        const distance = distances[closestNode] + graph[closestNode][neighbor];
        if (distance < distances[neighbor]) {
          distances[neighbor] = distance;
          previousNodes[neighbor] = closestNode;
        }
      }
    }
  
    return { distances, previousNodes };
}
  
// Example graph representation (adjacency list)

const graph = {
    A: { B: 5, C: 2 },
    B: { A: 5, C: 4, D: 2 },
    C: { A: 2, B: 4, D: 7 },
    D: { B: 2, C: 7 },
};


// Starting node for the shortest path
const startNode = 'A';
  
const { distances, previousNodes } = dijkstra(graph, startNode);
  
// Function to reconstruct the shortest path from startNode to any node
function reconstructShortestPath(previousNodes, startNode, endNode) {
    const path = [endNode];
    let currentNode = endNode;
  
    while (currentNode !== startNode) {
      currentNode = previousNodes[currentNode];
      path.unshift(currentNode);
    }
  
    return path;
}
  
// Example usage
const endNode = 'D';
const shortestPath = reconstructShortestPath(previousNodes, startNode, endNode);
console.log('Shortest path from A to D:', shortestPath);
console.log('Distances from A to all nodes:', distances);



//Prim's Algo
// Graph represented as an adjacency list

const graph = {
    A: { B: 2, C: 3 },
    B: { A: 2, C: 1, D: 4 },
    C: { A: 3, B: 1, D: 5 },
    D: { B: 4, C: 5 },
  };
  
  function primMST(graph) {
    const visited = new Set();
    const mst = [];
  
    // Start with the first node as the initial node
    const startNode = Object.keys(graph)[0];
    visited.add(startNode);
  
    while (visited.size < Object.keys(graph).length) {
      let minEdge = null;
  
      // Iterate through visited nodes and their neighbors
      for (const node of visited) {
        for (const neighbor in graph[node]) {
          if (!visited.has(neighbor)) {
            // Find the minimum-weight edge
            if (!minEdge || graph[node][neighbor] < minEdge.weight) {
              minEdge = { node, neighbor, weight: graph[node][neighbor] };
            }
          }
        }
      }
  
      // Add the node and the edge to the MST
      mst.push(minEdge);
      visited.add(minEdge.neighbor);
    }
  
    return mst;
  }
  
const minimumSpanningTree = primMST(graph);
console.log("Minimum Spanning Tree:", minimumSpanningTree);


//Kruskal's Algorithm
// Helper function for finding the parent of a node in the Union-Find data structure
function findParent(parents, node) {
    if (parents[node] === node) {
      return node;
    }
    return findParent(parents, parents[node]);
  }
  
  // Helper function for performing union of two sets in the Union-Find data structure
  function union(parents, ranks, node1, node2) {
    const root1 = findParent(parents, node1);
    const root2 = findParent(parents, node2);
  
    if (root1 !== root2) {
      if (ranks[root1] > ranks[root2]) {
        parents[root2] = root1;
      } else if (ranks[root1] < ranks[root2]) {
        parents[root1] = root2;
      } else {
        parents[root1] = root2;
        ranks[root2]++;
      }
      return true;
    }
    return false;
  }
  
  function kruskal(graph) {
    const edges = [];
    for (const node in graph) {
      for (const neighbor in graph[node]) {
        edges.push([node, neighbor, graph[node][neighbor]]);
      }
    }
  
    // Sort edges in non-decreasing order of their weights
    edges.sort((a, b) => a[2] - b[2]);
  
    const minimumSpanningTree = [];
    const parents = {};
    const ranks = {};
  
    // Initialize each node as a separate set in the Union-Find data structure
    for (const node in graph) {
      parents[node] = node;
      ranks[node] = 0;
    }
  
    for (const edge of edges) {
      const [node1, node2, weight] = edge;
      if (union(parents, ranks, node1, node2)) {
        minimumSpanningTree.push(edge);
      }
    }
  
    return minimumSpanningTree;
  }
  
  // Example graph representation
  const graph = {
    A: { B: 2, D: 5 },
    B: { A: 2, C: 3, D: 3 },
    C: { B: 3, E: 1 },
    D: { A: 5, B: 3, E: 1 },
    E: { C: 1, D: 1 },
  };
  
  const minimumSpanningTree = kruskal(graph);
  console.log("Minimum Spanning Tree:", minimumSpanningTree);
  
  