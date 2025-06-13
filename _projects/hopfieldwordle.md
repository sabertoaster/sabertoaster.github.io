---
layout: page
title: Hopfield Network as Wordle Solver
description: Biologically Plausible Associative Memory for Recalling Missing Word Patterns.
img: assets/img/projects/hopfieldwordle/banner.png
importance: 1
category: self project
tags: [associative-memory, comp-neursci]
related_publications: false
toc:
  sidebar: true
---

## Motivation
What happens when you encounter a partial word like "d__ty" in your mind? Your brain doesn't randomly guess—it systematically explores possibilities like "deity," "dusty," "dirty," each triggered by spreading activation through your memory network. This cognitive process inspired me to explore whether **modern Hopfield networks** could model human-like word completion.

While existing Wordle solvers achieve 95%+ success rates using information theory or reinforcement learning, they lack **biological plausibility**. Can we build a system that solves Wordle the way humans might—through **associative memory retrieval** rather than exhaustive optimization?

---
## Background
### 1. Wordle and Information Theory.
Skip to [Hopfield part](#2-brief-background-on-classical-hopfield-networks) if you already know what is a Wordle and Information Theory application for it.

> "Wordle is a web-based word game created and developed by the Welsh software engineer [Josh Wardle](https://en.wikipedia.org/wiki/Josh_Wardle). <mark>In the game, players have six attempts to guess a five-letter word, receiving feedback through colored tiles that indicate correct letters and their placement.</mark> A single puzzle is released daily, with all players attempting to solve the same word. It was inspired by word games like [Jotto](https://en.wikipedia.org/wiki/Jotto) and the game show [Lingo](https://en.wikipedia.org/wiki/Lingo_(American_game_show)). Bought and hosted by [The NY Times](https://www.nytimes.com)."
> <br>\- From Wikipedia.

<div class="caption">
A summary of Wordle mechanism. Few exceptions like double word rule can be found <a href="https://www.reddit.com/r/wordle/comments/ry49ne/illustration_of_what_happens_when_your_guess_has/">here</a>.
</div>
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/hopfieldwordle/wordle_game.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<br>
<br>
Information Theory - How it's used in solving Wordle: ([3blue1brown explanation](https://www.youtube.com/watch?v=v68zYyaEmEA))


Briefly, the optimal Wordle strategy maximizes **information gain** per guess. Each guess partitions the solution space, with entropy measuring uncertainty:

$$E = -\sum_{i} p_i \log_2 p_i$$

**Example:** Starting with "SALET" provides ~5.9 bits of information, reducing 2,315 possible answers to ~60 on average. However, this approach requires:
- Perfect knowledge of word frequencies
- Exhaustive similarity computations
- No memory or attention limitations

**The Cognitive Gap:** Humans don't optimize information theory—we use **bounded memory retrieval** and **associative reasoning**.

### 2. Brief background on Classical Hopfield Networks

**Associative memories** are one of the earliest artificial neural models dating back to the 1960s and 1970s. Best known are Hopfield Networks, presented by John Hopfield in 1982. As the name suggests, the main purpose of associative memory networks is to associate an input with its most similar pattern. <mark>In other words, the purpose is to store and retrieve patterns</mark>.

Think of a Hopfield Network as a **magical photo album** where showing a **torn photograph** automatically reconstructs the **complete original image**. This is exactly what these networks do—they're **associative memories** that can recall complete patterns from partial or noisy inputs. In our case, they can complete "D__TY" → "DEITY" by associative recall rather than exhaustive search.

<div class="caption">
Classical Hopfield Network: Fully connected neurons with symmetric weights
</div>
<div class="row mt-3 justify-content-center">
    <div class="col-6 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/hopfieldwordle/hopfield_net.png" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

The components typically includes:
- **Symmetric weights** which can be represented as an undirected graph (the connections from neuron i to neuron j is the same weight vice versa)[^1]: $$W_{ij} = W_{ji}$$
- **Binary neuron states**: 0/1 (binary), -1/+1 (bipolar) 
- **No self-connections**: $$W_{ii} = 0$$ (neurons don't connect to themselves)

**Example:** To store the word "DEITY", we encode it as a bipolar vector where each position represents a letter:
```
"DEITY" → [+1, +1, +1, +1, +1] (simplified 5-dimensional representation)
```
The network creates connections between neurons such that this pattern becomes a **stable memory state**.

#### Mathematical formulation for Word Completion

> **Given:** N word patterns to recall: $$\{x_i\}_{i=1}^N$$ (our vocabulary)
> 
> **State:** Current word configuration: $$\xi \in \{-1,+1\}^d$$
> 
> **Energy function:** $$ E = -\frac{1}{2}\sum_i \sum_j W_{ij}\xi_i\xi_j + \sum_i b_i \xi_i$$ 
> 
> where $$b_i$$ are bias terms (thresholds for each neuron). 

**Key Insight:** Each polar/binary patterns are present on a energy landscape which is given by the weights. The model works by creating transition from one local state to the next. The weights ensure that there are clear wells corresponding to learned patterns which attract surrounding patterns.

$$\boxed{\text{Partial word input} \rightarrow \text{Energy minimization} \rightarrow \text{Complete word retrieval}}$$

#### The functions of the model:

**Learning the patterns:**

1. **Direct weight setting (Hebbian Learning):**
    
    $$W = \sum_{i=1}^N x_{i} \cdot x_{i}^T$$

   - **Pros:** Simple, biologically inspired, fast storage
   - **Cons:** Limited capacity (~0.14N patterns), interference between similar words
   - **Example:** Storing ["DEITY", "DUSTY"] might create spurious states like "DAATY"

2. **Gradient-based learning (Modern approach):**
   Uses backpropagation to optimize storage capacity and reduce interference.
   - **Pros:** Higher capacity, fewer spurious states, better retrieval
   - **Cons:** More computationally expensive, requires training data
   - **Example:** Can cleanly separate similar words like "DUSTY" vs "DIRTY"

**Retrieving patterns (Update rules):**

1. **Asynchronous updates (Classical):**
   
    $$\xi_{i}^{(new)} = \text{sign}\Big(\sum_j W_{ij} \xi_j - b \Big)  \text{(one neuron at a time)}$$

   - **Pros:** Guaranteed convergence, biologically realistic[^2]
   - **Cons:** Slower convergence, order-dependent results
   - **Use case:** When you want guaranteed stability for word completion

2. **Synchronous updates (Parallel):**

    $$ \xi^{(new)} = \text{sign} \big( W \cdot \xi \big) \text{(all neurons simultaneously)}$$

   - **Pros:** Faster computation due to [vectorization](https://www.geeksforgeeks.org/python/vectorization-in-python/).
   - **Cons:** Can oscillate, might not converge
   - **Use case:** When speed matters and patterns are well-separated


#### Classical Limitations (Setting up the need for Modern Hopfield)

**The fundamental problems:**
- **Limited capacity:** Can only reliably store ~0.14N patterns
- **Spurious attractors:** Network might converge to "DAATY" instead of "DEITY"  
- **Interference:** Similar words like "DUSTY" and "DIRTY" confuse each other

These limitations motivated the development of **Modern Hopfield Networks**, which solve these issues while preserving the elegant associative memory properties.

Some side related topics which are very important:
- **Free Energy Principle:** How biological systems minimize surprise through prediction. 
  > Imagine you're trying to catch a ball. You make predictions about its trajectory (perception) and then take actions to move towards it (action). The FEP suggests that you're constantly minimizing the "surprise" of catching the ball by updating your predictions and refining your movements. 
- **Hebbian Learning:** "Neurons that fire together, wire together" - the biological basis for associative memory.
  > And neurons that fire out of sync, lose their link.

### 3. Modern Hopfield Networks: Exponential Capacity and Continuous States

The classical Hopfield networks suffer from fundamental limitations: spurious attractors, limited storage capacity (~0.14N), and poor retrieval for similar patterns. Modern Hopfield Networks, introduced by Krotov & Hopfield (2016) and generalized by Ramsauer et al. (2020), address these issues through **continuous states** and **exponential interaction functions**.

#### Energy Function with Interaction Functions

The key innovation lies in replacing the quadratic energy function with more general **interaction functions**. The modern energy function is:

$$E = -\sum_{i=1}^N F\left(\frac{1}{d}(\mathbf{x}_i)^T \boldsymbol{\xi}\right)$$

where:
- $$\mathbf{x}_i \in \mathbb{R}^d$$ are the stored patterns
- $$\boldsymbol{\xi} \in \mathbb{R}^d$$ is the current state
- $$F: \mathbb{R} \rightarrow \mathbb{R}$$ is the **interaction function**
- $$d$$ is the pattern dimension

**Common Interaction Functions:**

1. **Exponential**: $$F(x) = \exp(x)$$
   - Provides exponential storage capacity
   - Most commonly used in practice

2. **Polynomial**: $$F(x) = x^n$$ for $$n \geq 2$$
   - Polynomial storage capacity scaling
   - Computational simplicity

3. **Custom functions**: Any concave function satisfying convergence conditions

The **exponential interaction function** is particularly powerful because it creates a **log-sum-exp** energy landscape that naturally separates stored patterns.

#### Storage Capacity

**Classical Hopfield**: Capacity scales as $$C_\text{classical} \sim 0.14N$$ patterns.

**Modern Hopfield**: With exponential interaction functions, capacity scales **exponentially** with dimension:
$$C_{modern} \sim \exp(\alpha d)$$

where $$\alpha$$ depends on the specific interaction function and pattern distribution.

**Practical Implication**: A 130-dimensional Modern Hopfield Network (5×26 for our word encoding) can store thousands of patterns without significant interference, compared to ~18 patterns for classical networks.

#### The Beta Parameter

The **inverse temperature** parameter $$\beta$$ controls the **sharpness** of the energy landscape:

$$E_{\beta} = -\frac{1}{\beta} \log \sum_{i=1}^N \exp\left(\beta \frac{(\mathbf{x}_i)^T \boldsymbol{\xi}}{d}\right)$$

**Effects of $$\beta$$:**
- **$$\beta \rightarrow 0$$**: Uniform distribution over all patterns (high temperature)
- **$$\beta \rightarrow \infty$$**: Sharp focus on most similar pattern (low temperature)
- **$$\beta = 1$$**: Balanced retrieval dynamics

For word completion, higher $$\beta$$ values ($$\beta \geq 2$$) provide more decisive pattern completion.

#### Update Rule Derivation

The update rule emerges from **energy minimization** using the concave-convex procedure. Starting with the energy:

$$E = -\frac{1}{\beta} \log \sum_{i=1}^N \exp\left(\beta \frac{(\mathbf{x}_i)^T \boldsymbol{\xi}}{d}\right)$$

**Step 1**: Apply concave-convex decomposition to handle the log-sum-exp structure.

**Step 2**: The gradient with respect to $$\boldsymbol{\xi}$$ yields:
$$\frac{\partial E}{\partial \boldsymbol{\xi}} = -\frac{1}{d} \sum_{i=1}^N \frac{\exp\left(\beta \frac{(\mathbf{x}_i)^T \boldsymbol{\xi}}{d}\right)}{\sum_{j=1}^N \exp\left(\beta \frac{(\mathbf{x}^{(j)})^T \boldsymbol{\xi}}{d}\right)} \mathbf{x}_i$$

**Step 3**: Recognizing the softmax structure:
$$\boldsymbol{\xi}^{new} = \sum_{i=1}^N \text{softmax}\left(\beta \frac{(\mathbf{x}_i)^T \boldsymbol{\xi}}{d}\right)_i \mathbf{x}_i$$

**Step 4**: In matrix notation, with $$\mathbf{X} = [\mathbf{x}^{(1)}, \ldots, \mathbf{x}^{(N)}]$$:

$$\boxed{\boldsymbol{\xi}^{new} = \mathbf{X} \cdot \text{softmax}\left(\beta \mathbf{X}^T \boldsymbol{\xi}\right)}$$

#### Connection to Transformer Self-Attention

The update rule is **mathematically equivalent** to the self-attention mechanism in transformer networks:

**Hopfield Update:**
$$\boldsymbol{\xi}^{new} = \mathbf{X} \cdot \text{softmax}(\beta \mathbf{X}^T \boldsymbol{\xi})$$

**Self-Attention:**
$$\text{Attention}(\mathbf{Q}, \mathbf{K}, \mathbf{V}) = \mathbf{V} \cdot \text{softmax}\left(\frac{\mathbf{Q}\mathbf{K}^T}{\sqrt{d_k}}\right)$$

**Correspondence:**
- $$\mathbf{V} = \mathbf{K} = \mathbf{X}$$ (stored patterns)
- $$\mathbf{Q} = \boldsymbol{\xi}^T$$ (query state)  
- $$\beta = 1/\sqrt{d_k}$$ (temperature scaling)

This equivalence reveals that **attention mechanisms are performing associative memory retrieval** in the continuous state space.


## What did I do (met qua mai chay thi nghiem gio di ngu cai)?
### Techniques:
- Onehot encoding
- Feedback loop

### Emergent Problems:
- Sub-optimal energy minimal.
- Temporary suppress mechanism for newly recalled words.
  

## Conclusion 


### References


### Disclaimer
[^1]: This is proved to be inaccurate to depict how neurons works irl, example when you sit down/ stand up, there'll be 2 seperate pathways of neurons to strengthen. For further reading, please consider [a explanation video of Artem Kirsanov on "Brain's Hidden Learning Limits"](https://www.youtube.com/watch?v=Ay3_D7VgzZs). 
[^2]: The fact that neurons don't wait for other neurons to fire at the same time as they're constantly firing and transmiting information in realtime. The scope of temporal encoding unfortunately isn't implemented in this project tho. 