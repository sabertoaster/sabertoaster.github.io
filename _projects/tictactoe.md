---
layout: page
title: TicTacToe
description: (CSC10001) A feature-rich console-based game with AI algorithms and animations
img: assets/img/projects/tictactoe/tictactoe.png
importance: 1
category: semester project
giscus_comments: true
---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/tictactoe/tictactoe-banner.png" title="TicTacToe Game Banner" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A console-based TicTacToe game with animated scenes, multiple game modes, and advanced AI algorithms.
</div>

## Project Overview

This advanced TicTacToe implementation was my final project for the first semester at VNU University of Science. Unlike typical console applications, this project pushes the boundaries of what's possible in a terminal environment, featuring animations, color schemes, and responsive interface elements without relying on external libraries beyond the standard C++ STL.

[View a video demo of the project](https://www.youtube.com/watch?v=AWQhYFxFUfI)

## Technical Challenges

The project posed several interesting challenges:

1. **Console-Based Graphics**: Creating fluid animations and visually appealing interfaces within the constraints of the console environment
2. **AI Implementation**: Developing efficient algorithms (Bruteforce and Minimax) for the computer opponent
3. **Clean Architecture**: Maintaining readable, maintainable code while implementing complex features
4. **Memory Management**: Optimizing resource usage for smooth performance on various hardware

## Key Features

<div class="row">
    <div class="col-sm-6">
        <h3>Interface & Experience</h3>
        <ul>
            <li>Animated main menu with fluid transitions</li>
            <li>In-game colorful avatars and visual effects</li>
            <li>Dark/light mode toggle for different visual preferences</li>
            <li>Background music and sound effects (with toggle options)</li>
            <li>Victory/defeat/draw animations</li>
        </ul>
    </div>
    <div class="col-sm-6">
        <h3>Gameplay & Mechanics</h3>
        <ul>
            <li>PVP mode with optional timer constraints</li>
            <li>Easy mode AI (Bruteforce algorithm)</li>
            <li>Hard mode AI (Minimax algorithm with alpha-beta pruning)</li>
            <li>Undo (Z) and Redo (Y) functionality</li>
            <li>Save/Load game state system (P key)</li>
        </ul>
    </div>
</div>

## Implementation Details

### AI Algorithms

One of the most interesting aspects of this project was implementing different AI difficulty levels:

```cpp
// Excerpt from the Minimax implementation with alpha-beta pruning
int Player::minimax(int depth, int alpha, int beta, int minimax_player)
{
    int type_win = kt_win();
    if (type_win == 1)
        return -winScore;
    if(type_win == 2)
        return winScore;

    if (depth == 0)
    {
        return cal_mark();
    }
    if (minimax_player == 1)
    {
        int maxEval = INT_MIN;
        vector<pair<int, int>>area_list = area(1);
        for (int k=0; k<area_list.size(); k++)
        {
            int i = area_list[k].first;
            int j = area_list[k].second;

            if (_POINT[i][j] != 0)
                continue;
            _POINT[i][j] = 2;
            history.push_back({ i,j });
            int eval = minimax(depth - 1, alpha, beta, 0);
            maxEval = max(maxEval, eval);
            alpha = max(alpha, eval);
            history.pop_back();
            _POINT[i][j] = 0;
            if (alpha >= beta)
                break;
            
        }
        return maxEval;
    }
    else
    {
        // Player's move evaluation (shortened for brevity)
        // ...
    }
}
```

The AI evaluation functions consider multiple board patterns and potential threats to make intelligent decisions, creating a challenging experience for players.

### Custom Console Visualizations

Despite the limitations of console applications, I implemented various visual elements to enhance user experience:

```cpp
void Player::draw_x() {
    // Dynamic color based on theme (dark/light mode)
    if (opt.darkMode == 1)
        changeFontColor(black, pink);
    else
        changeFontColor(white, red);
    cout << "X";
}

void Player::draw_o()
{
    if (opt.darkMode == 1)
        changeFontColor(black, blue2);
    else
        changeFontColor(white, blue1);
    cout << "O";
}
```

### Save/Load System

Players can save their games and resume later with a fully implemented save/load system:

```cpp
vector<string> Player::list_namesave()
{
    ifstream fi("file_game/name_saveload.txt");
    string name_saveload[100];
    int count_name = 1;
    while (getline(fi, name_saveload[count_name]))
    {
        count_name++;
    }
    vector<string>res;
    for (int i = 1; i < count_name; i++)
    {
        res.push_back(name_saveload[i]);
    }

    return res;
}
```

## Technical Architecture

The project follows a clean, modular architecture:

1. **Game Logic**: Core rules and mechanics
2. **AI Module**: Different AI algorithms and difficulty levels
3. **Visualization System**: Console-based graphics and animations
4. **Input Handler**: Processing keyboard events and player actions
5. **Game State Manager**: Save/load functionality and state tracking

This separation of concerns resulted in maintainable code that's easy to extend with new features.

## Team Contribution

This project was a collaborative effort with clearly defined roles:

- **Advisor**: Mr. Truong Toan Thinh
- **Audio Collector, Mechanic Developer**: Huynh Trung Kiet
- **Sub-mechanic Developer**: Nguyen Ngoc Khoa
- **Visualizer**: Le Hoang Minh Huy
- **Leader & Core Developer**: Mai Duc Minh Huy (me)

## Conclusion

This project pushed the boundaries of what's possible in a console environment while adhering to strict requirements of using only standard C++ libraries. The implementation of multiple AI algorithms, animated interfaces, and robust game mechanics made this much more than a simple tic-tac-toe game.

The experience gained from managing team members with different responsibilities and integrating various components into a cohesive product was invaluable for my development as a software engineer.