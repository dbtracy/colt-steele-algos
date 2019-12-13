Dijkstra's Algorithm

What is it?

- one of the most famous and widely used algos

Approach

1. Every time we look at visiting a new node, we pick the one with the smallest known distance
2. Once we moved to the node we're gonna visit, we look at its neighbors
3. For each neighboring node, we calculate the distance by summing the total edges that lead to the node from the starting node
4. If new total is less than previous total, we store new shorter distance for that node
