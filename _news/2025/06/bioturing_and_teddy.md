---
layout: post
title: BioTuring and Teddy Thinh 
date: 2025-06-27 12:00:00

inline: false
related_posts: false
---

<!-- to be written -->
BioTuring 06/27: Gene Enrichment Analysis.
<br>
**Motivation**: Comparing 2 gene lists $A = \{[G_{n1}, S_{n1}], [G_{n2}, S_{n2}], ...\}$ & $B = \{[G_{m1}, S_{m1}], [G_{m2}, S_{m2}], ...\}$ to extrapolate on the results (e.g cancer vs non-cancer?)
<br> **Method**: Get a gene pool, preferably on the whole $G_i$ set.
<br> Arange from A $\rightarrow$ B to form a `pathway`. 
<br> Something about Fold Change (FC) metric here I don't rmb well, but basically $FC = \log_2(\frac{G_{ni}}{G_{mi}})$, if FC > 0 then it's good for hypo about gene list A, < 0 then good for gene list B.
<br> For all gene in `pathway`, record its cummulative sum on FC. This will form a graph, axis x is A $\rightarrow$ B, axis y is score. 
<br> Highest one is Enrichment Score.
<br> $\implies$ **New problem,** how do we know the Stats Significance of this score. Run it 10000 times and select one with p-score < 0.05? Seems reasonable, but resources are limited. This is what Bioturing Algo team been researching for now, when assigning a score towards a gene is approximately even to every other gene, you can apply some guys' work on distribution to get 5000x faster than the conventional approach.
<br><br>
Took an entrance test @ BioTuring then

---
Met [Teddy Thinh](## "K20 CLC @ HCMUS"):
<br>Here's my two cents about the conversation:
- Graduate education requires self-commitment and curiosity to learn new things, and applying it to the company at which you're having internship.
- Grad program are for connection probably, at least in HCMUS.
- Prof. Ly Quoc Ngoc (Computer Vision) is goated, his mindset about research is something to be recognised by fellow researchers.

