---
layout: post
title: STIC - Generative AI for LLMs - An Experience
date: 2024-07-31 12:00:00
description: My journey diving deep into the world of LLMs - expect some casual thoughts, honest reactions, and maybe a few curse words
tags: artificial-intelligence machine-learning llm course-notes
categories: ai-ml
giscus_comments: true
thumbnail: assets/img/blog/2024/genai-llm-banner.png
related_posts: true
---
<div class="row justify-content-center mt-3">
    <div class="col-lg-8 col-md-10 mx-auto text-center">
        {% include figure.liquid loading="eager" path="assets/img/blog/2024/genai-llm-banner.png" class="img-fluid rounded z-depth-1" width="500px" zoomable=true %}
    </div>
</div>

So here's the deal - instead of dragging myself to university for another dull summer quarter, I decided to play it cool and dive into something I actually give a damn about: AI courses. Yeah, I'm that ComSci major who's way too into AI (no regrets though). One of these courses is this Generative AI for LLMs thing, offered through STIC - some program sponsored by organizations I honestly don't know much about, but hey, free Coursera credits? I'll take it!

Since I just started this blog and don't have time to make it fancy, I'm keeping it real and straightforward. Currently grinding through week 2 and hoping to blast through this course ASAP. Let me share what's been cooking in my brain...

## Week 2: The Fine-tuning Saga

First up, let's talk about fine-tuning these massive language models. Here's what I've learned (and actually managed to understand):

- Apparently, everyone's obsessed with this thing called "few shot prompting" and fine-tuning. Cool stuff, not gonna lie.
- But here's the kicker - if you try to fine-tune the whole model, it gets amnesia (they call it "CATASTROPHIC FORGETTING") and forgets how to do other stuff. Not cool.
- The fix? You gotta train it on everything again with tons of samples. They call it "Multi-task instruction training" because apparently, everything needs a fancy name.
- Then there's all this evaluation stuff about making sure the model acts "human-like" (whatever that means...)
- Oh, and benchmarks! Finally something I vibe with. BLEU, HELM, ROUGE (sounds like a makeup palette but okay) - these bad boys help us figure out if our model's any good.

## PEFT: Because Nobody's Got Time (or Memory) for Full Fine-tuning


<div class="row justify-content-center mt-3">
    <div class="col-lg-8 col-md-10 mx-auto text-center">
        {% include figure.liquid loading="eager" path="assets/img/blog/2024/peft-layers.png" class="img-fluid rounded z-depth-1" width="500px" zoomable=true %}
    </div>
</div>
<div class="caption">
    Fig 1. Layers doing their thing in PEFT (look at them layers, beautiful aren't they?)
</div>

Let me drop some knowledge about model weights - it's not just the weights you gotta worry about. You've got:
- Gradients
- Optimizer States (adam, stochastic, and all that jazz)
- Forward Activations (ReLU, sigmoid - the usual suspects)
- And a ton of temporary memory (like, 12-20x more than the actual weights. Yikes.)

Why PEFT's actually dope:
- Instead of messing with the whole model, you just tweak a few layers
- Usually just the last ones, 'cause why fix what ain't broken, right?

### The PEFT Toolkit

1. **LoRA (Low Rank Adaptation)**
   - **Create** two rank decomposition matrices (fancy math stuff)
   - **Train** those bad boys
   - **Multiply** the hell out of them during inference
   - **Broadcast** the results to the original weight
   
   And boom! Your model's suddenly better at whatever you're trying to make it do.

2. **Prompt Tuning (aka The Mystery Box)**
   - Something about "soft prompts"
   - Honestly? I need to do more homework on this one 'cause I don't understand sh-

## Week 3: RLHF (Really Having Fun with this stuff)

<div class="row justify-content-center mt-3">
    <div class="col-lg-8 col-md-10 mx-auto text-center">
        {% include figure.liquid loading="eager" path="assets/img/blog/2024/rl-diagram.png" class="img-fluid rounded z-depth-1" width="500px" zoomable=true %}
    </div>
</div>
<div class="caption">
    Fig 2. The whole RL circus in one neat diagram
</div>

Alright, let's dive into this rabbit hole called Reinforcement Learning. Picture this: you've got this agent (think of it as a digital student) trying to figure out what's what in its environment. It tweaks its behavior based on rewards, kind of like training a puppy, but with more math and less treats.

Then comes RLHF - Reinforcement Learning with Human Feedback (or Really Having Fun, if you know what I'm sayin'). This is where it gets interesting:
- Helps stop the model from being a jerk (no racist stuff, harmful speech, or useless rambling)
- Uses actual humans to rate the model's responses (expensive AF and takes forever)
- That's why we need a Reward Model (trained with Supervised Learning to predict what humans would like)

We also use this thing called Proximal Policy Optimization (PPO), but I'm not even gonna try explaining that one. If you're curious, [check it out yourself](https://www.coursera.org/lecture/generative-ai-with-llms/optional-video-proximal-policy-optimization-1iZJO) - good luck!

## The Fine Print

Look, there's way more stuff in [this course](https://www.coursera.org/learn/generative-ai-with-llms) that I haven't covered (or fully understood, let's be real). If you're into this kind of thing, go check it out yourself. Maybe you'll get more out of it than my casual observations!

_PS: Stay tuned for more adventures in AI land - next time I might actually show some code. Maybe. If I'm feeling generous._