---
layout: post
title: Neuromatch NeuroAI course
date: 2026-01-08 12:00:00
description: In a nutshell
tags: 
categories: computational-neuroscience
giscus_comments: true
related_posts: true
lang: en
featured: false
sitemap: false
published: true
---

<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/neuroai_navigation.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    A brief map on NeuroAI prominant topics, organizing the field along two primary axes: Applied-to-Neuro (vertical) and curiosity-driven foundations (horizontal). <a href="https://neuroai.neuromatch.io/tutorials/intro.html">Src: Neuromatch</a>
</div>

{% details Brief on those topics %}
Curiosity-driven: It represents the "bottom-up" approach to science where researchers explore questions because they are fundamentally interesting or unknown.
The NeuroAI sphere is traditionally divided into **two primary directions**—using neuroscience to build better AI, and using AI to understand the brain—intersecting with **applied** and **theoretical** goals.

The map categorizes these topics into four quadrants:

### 1. Applied AI (Neuro $\to$ AI)
This sector mines biological principles to create more robust and efficient artificial intelligence.
*   **Biologically-Inspired Architectures:** The field's history is rooted here, from **CNNs** (mimicking the visual cortex) to **Attention** mechanisms (inspired by cognitive focus). Newer work includes **Neural Style Transfer** and **Predictive Coding**—architectures that anticipate inputs rather than just processing them.
*   **Neurosymbolic AI:** Approaches that combine the learning capability of neural networks with the logical reasoning of symbolic systems, aiming for "System 2" reasoning.
*   **Geometric Deep Learning:** Frameworks that process data on complex manifolds (like curved brain surfaces) rather than flat grids, helping models understand structure and invariances.

### 2. Basic Neuroscience (AI $\to$ Neuro)
This sector uses advanced AI as a "model organism" to test hypotheses about the brain.
*   **AI as Brain Models:** Specific AI architectures are used as functional proxies for brain regions. For example, **CNNs** model the ventral stream (object recognition), **Transformers** model the hippocampus (memory/spatial mapping), and **Reinforcement Learning (RL)** models the basal ganglia (reward processing).
*   **Foundation Models for Neuro:** Large-scale models (similar to GPT-4 but for neural data) trained on massive datasets of brain recordings (e.g., from thousands of neurons) to predict neural activity across different individuals and tasks.
*   **AI Tooling:** Using machine learning to automate tedious neuroscience tasks like **spike sorting** (classifying neuron firing) and **computational ethology** (tracking animal behavior).

### 3. Theoretical AI (Curiosity-Driven)
Research here focuses on the fundamental principles of intelligence, often abstracting away from immediate biological accuracy or commercial utility.
*   **Spiking Neural Networks (SNNs):** Neural networks that communicate via discrete "spikes" over time (like real neurons) rather than continuous values, offering extreme energy efficiency.
*   **Animats & Brain-AI Hybrids:** "Animats" are simulated agents (or biological-synthetic hybrids) placed in virtual environments to evolve intelligence from scratch, often to study how physical embodiment affects learning.
*   **Biologically Plausible Backprop:** Searching for learning algorithms that real brains could actually support, as the brain likely does not use the standard "backpropagation" algorithm found in commercial AI.

### 4. Clinical Neuroscience (Applications)
The direct medical application of NeuroAI technologies.
*   **Digital Twins:** Creating virtual replicas of a patient's brain to simulate and optimize treatments before applying them physically.
*   **Biomarkers:** AI systems that detect subtle patterns in brain scans or behavior to diagnose conditions (like Alzheimer's) earlier than human doctors can.

### Connecting Themes
At the center lie concepts like **Curriculum Learning** and **Meta-Learning**—techniques that help AI learn *how to learn* or learn in a structured sequence, mimicking human child development.

{% enddetails %}

---
<div class="row mt-3">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/blog/neuroai_over_history.png" class="img-fluid rounded z-depth-1" zoomable=true %}
    </div>
</div>
<div class="caption">
    A figure of how topics evolved over time, from laying foundations to cutting-edge directions <a href="https://neuroai.neuromatch.io/tutorials/W1D1_Generalization/student/W1D1_Intro.html">Src: Neuromatch</a>
</div>

---
## What is intelligence:
According to Patrick it was `Generalization ability`. It has multiple facets:
- Predict well in new circumstances
- Learn rapidly in new circumstances (sample complexity)
- Perform well in new circumstances

{% details Here's how predicting differs from performing %}
The first and last statements describe two distinct aspects of generalization in intelligence, differentiating between **predictive accuracy** and **behavioral competence**.

### 1. Predict well in new circumstances (The First Statement)
This refers to the **cognitive or informational** aspect of intelligence. It is about the internal model's ability to minimize surprise or error when facing novel data.
*   **Focus:** Accuracy of the internal model.
*   **Mechanism:** Recognizing patterns in unseen data (e.g., a "dog" seen from a new angle is still recognized as a "dog").
*   **Metric:** Low prediction error or high classification accuracy on test sets.

### 2. Perform well in new circumstances (The Last Statement)
This refers to the **agentic or behavioral** aspect of intelligence. It is about the ability to execute successful actions to achieve a goal in a novel environment.
*   **Focus:** Efficacy of actions and outcomes.
*   **Mechanism:** Adapting a policy or strategy to navigate a new situation (e.g., a robot walking on ice for the first time without falling).
*   **Metric:** High reward, survival, or task completion.

**Summary of Difference:**
The first statement is about **knowing** what will happen (prediction), while the last statement is about **doing** the right thing (performance). You can predict well (know you are about to crash) without performing well (avoiding the crash). True general intelligence requires both.
{% enddetails %}

---
[^1]: This is a footnote 