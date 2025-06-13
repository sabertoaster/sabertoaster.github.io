---
layout: page
title: MazeGame
description: (CSC10010) A Python-based maze game featuring multiple pathfinding algorithms with interactive visualization
img: assets/img/projects/mazegame/maze_thumbnail.png
importance  : 1
category: semester project
giscus_comments: true
related_publications: false
---
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/mazegame/maze_gameplay.png" title="Gameplay view" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/mazegame/maze_pathfinding.png" title="Pathfinding visualization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Gameplay interface with pixel art style. Right: Visualization of different pathfinding algorithms.
</div>

## Project Overview

MazeGame ("Tâm - Tom and Gia Huy - Jerry") is an educational game developed in Python that visualizes classic pathfinding algorithms through an interactive maze-solving experience. The project was created as part of the Programming for AI course at VNU University of Science, where we implemented various algorithms while creating an engaging game environment.

In the game, players help the character Tâm find Gia Huy, who has been stealing Tâm's cheese and hiding in complex mazes. Players can choose to manually navigate through the maze or watch the AI solve it using different algorithms.

[View a video demo of the project](https://youtu.be/hs9YLck7dBo)
<br>
[Report featured in the project](https://drive.google.com/file/d/1DdqyiuWbN3WzK6TD3XwzAFIepisDGeUF/view?usp=sharing)
## Key Features

<div class="row">
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/mazegame/maze_features.png" title="Game features" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/mazegame/maze_menu.png" title="Game menu" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The game offers multiple features including account management, different difficulty levels, and algorithm visualization.
</div>

- **Multiple Pathfinding Algorithms**: 
  - Breadth-First Search (BFS)
  - Depth-First Search (DFS)
  - A* Search
  - Dijkstra's Algorithm
  - Greedy Best-First Search
  - Q-Learning (reinforcement learning approach)

- **Maze Generation Algorithms**:
  - DFS-based generation
  - Kruskal's algorithm
  - Wilson's algorithm
  - Prim's algorithm
  - Binary Tree algorithm

- **Game Features**:
  - User account system (registration/login)
  - Three difficulty levels (changing maze sizes)
  - Manual and automatic solving modes
  - Save/load game functionality
  - Leaderboard system
  - Energy mechanism with collectible power-ups
  - Pixel art aesthetics with retro-style music and sound effects

## Technical Implementation

The project is built with a modular architecture, separating the game mechanics, visualization, and algorithms into different components:

```
MAZE_SOLVER
├── Algorithms
│   ├── Algorithms.py       # Pathfinding algorithms
│   ├── MazeGeneration.py   # Maze generation algorithms
│   └── QLearning.py        # Q-learning implementation
├── Resources               # Assets for the game
├── Visualize               # UI components and scenes
└── runner.py               # Main game entry point
```

### Pathfinding Algorithms

The most educationally significant aspect of this project was implementing and comparing different pathfinding algorithms. Each algorithm approaches the maze-solving problem differently:

- **BFS**: Guarantees the shortest path in unweighted graphs by exploring all neighboring cells level by level
- **DFS**: Explores as far as possible along a branch before backtracking
- **A***: Uses a heuristic function to guide the search toward the goal, balancing path cost and estimated distance
- **Dijkstra**: Finds the shortest path considering weights (all steps have equal weight in our basic implementation)
- **Greedy Best-First**: Uses only the heuristic to select the next cell, which can be faster but doesn't guarantee optimality
- **Q-Learning**: A reinforcement learning approach where the agent learns the optimal path through trial and error

<div class="row justify-content-sm-center">
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/mazegame/maze_comparison.png" title="Algorithm comparison" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/mazegame/maze_qlearning.png" title="Q-learning visualization" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Visual comparison of different pathfinding algorithms. Right: Q-learning convergence over training iterations.
</div>

### Maze Generation

We implemented several maze generation algorithms to create diverse and challenging puzzles:

- **DFS-based**: Creates mazes with long corridors and fewer branches
- **Kruskal's**: Generates mazes with a more uniform distribution of paths
- **Wilson's**: Creates unbiased mazes with a unique "loop-erased random walk" approach
- **Prim's**: Produces mazes with a "minimum spanning tree" structure
- **Binary Tree**: Creates mazes with a distinct bias toward two directions

### Energy Mechanism

One novel aspect of our implementation is the energy-based movement system. Players must collect energy cells to continue moving through the maze, adding a strategic planning element to the gameplay. This required modifying the pathfinding algorithms to account for energy constraints.

## Development Process

The project was developed over five weeks by a team of five students. We followed an iterative development approach:

1. **Week 1**: Project planning, algorithm research, and basic structure setup
2. **Week 2**: Implementation of core game mechanics and basic visualization
3. **Week 3**: Development of pathfinding algorithms and maze generation
4. **Week 4**: Integration of UI components and game features
5. **Week 5**: Implementation of advanced features (energy mechanism, game modes) and polishing

## Challenges and Learning Outcomes

Some of the key challenges we faced during development included:

- **Algorithm Efficiency**: Optimizing algorithms for larger mazes (100x100) required careful implementation
- **UI/Game Logic Integration**: Ensuring smooth integration between visualization and algorithm execution
- **Team Coordination**: Managing work distribution and maintaining code consistency across team members

Through this project, we gained valuable experience in:

- Implementing and comparing different graph algorithms
- Developing modular Python applications
- Creating interactive visualizations for educational purposes
- Collaborative software development using version control (Git)
- Game development basics with Pygame

## Conclusion

MazeGame successfully demonstrates the application of various pathfinding algorithms in an engaging, interactive format. The project balances educational value with entertainment, making it a useful tool for understanding graph algorithms in a visual context.

The source code for this project is available on [GitHub](https://github.com/sabertoaster/Maze_Solver).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/mazegame/maze_team.jpg" title="Project team" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Team members (from left to right): Mai Duc Minh Huy, Nguyen Thien An, Le Hoang Minh Huy, Nguyen Ngoc Khoa, Huynh Trung Kiet. Supervised by Mr. Nguyen Tran Duy Minh and Mr. Le Thanh Tung.
</div>