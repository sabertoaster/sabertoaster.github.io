---
layout: page
title: Known Item Search for Video Retrieval
description: A text-to-video retrieval system developed for HCMC AI Challenge 2024
img: assets/img/projects/aic2024/thumbnail.png
importance: 1
category: competition
related_publications: false
giscus_comments: true
---

# HCMC AI Challenge 2024: Known Item Search for Video Retrieval

## Overview

This project implements a text-to-video retrieval system that allows users to search for specific video frames using natural language descriptions. Developed for the HCMC AI Challenge 2024, the system uses advanced CLIP models to bridge the semantic gap between textual queries and visual content.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/aic2024/overview.jpg" title="System Overview" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    System architecture overview: From natural language query to finding the exact frame in a large video database.
</div>

## Key Features

- **Multi-language support**: Accepts queries in various languages with automatic translation to English
- **Multiple CLIP models**: Supports ViT-L/14, ViT-B/32, and ViT-B/16 CLIP models for different accuracy-speed tradeoffs
- **Vector search optimization**: Uses Qdrant vector database and FAISS for efficient similarity search
- **Rich visualization**: Interactive UI allowing direct playback of matched video segments
- **Batch processing**: Supports uploading multiple query files for large-scale analysis

## Technical Implementation

### System Architecture

The system is built around three main components:

1. **Embedding generation pipeline**: Processes videos by extracting keyframes and computing CLIP embeddings
2. **Vector database**: Stores and indexes frame embeddings for efficient search
3. **Search API and UI**: Connects user queries to the backend retrieval system

<div class="row">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/aic2024-architecture.jpg" title="Technical Architecture" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/aic2024-demo.jpg" title="System Demo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: The technical architecture showing data flow through the system. Right: Screenshot of the system's user interface.
</div>

### CLIP Models

The system offers three CLIP model variants:

- **ViT-L/14@336px**: Higher accuracy but slower inference (768-dimensional embeddings)
- **ViT-B/16**: Balanced performance (512-dimensional embeddings)
- **ViT-B/32**: Faster inference with slightly lower accuracy (512-dimensional embeddings)

These models convert both images and text into the same embedding space, allowing for direct similarity comparison between queries and video frames.

### Preprocessing Pipeline

Video processing follows these steps:

1. **Scene Detection**: Videos are analyzed to identify meaningful shots and transitions
2. **Keyframe Extraction**: Representative frames are extracted from each scene
3. **Feature Embedding**: CLIP models generate vector embeddings for each keyframe
4. **Indexing**: Embeddings are stored in Qdrant with metadata linking back to source videos

```python
# Example of embedding generation with CLIP
with torch.no_grad(), torch.cuda.amp.autocast():
    text_vector = model.encode_text(text_inputs)
text_vector /= text_vector.norm(dim=-1, keepdim=True)
```

### Vector Database

We use a combination of FAISS and Qdrant:

- **FAISS**: Optimized for high-dimensional vector search with efficient indexing
- **Qdrant**: Provides persistence, metadata storage, and production-ready APIs

This hybrid approach allows for both performance and flexibility when searching through thousands of video frames.

## User Interface

The web interface offers:

- Text input for natural language queries
- Model selection for different accuracy/speed preferences 
- Adjustable number of results
- CSV export for batch processing results
- Direct YouTube video playback at matched timestamps
- Drag-and-drop reordering of results

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/aic2024-results.jpg" title="Example results" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example search results for the query "A boat moving on ice" showing matched frames with corresponding video information.
</div>

## Challenges & Solutions

### Translation Quality

**Challenge**: Queries in non-English languages sometimes lost nuance after translation.

**Solution**: Implemented a specialized translation pipeline optimized for retaining visual descriptors.

### Vector Search Performance

**Challenge**: Initial vector search was too slow for interactive use.

**Solution**: Added FAISS indexes and implemented a hybrid search approach that balances accuracy and speed.

### Time Complexity

**Challenge**: Processing large video datasets required significant computing resources.

**Solution**: Developed a selective keyframe extraction approach that reduced the number of frames to process while maintaining result quality.

## Conclusion & Future Work

The system demonstrates effective cross-modal search abilities, allowing users to find specific video moments using natural language. In the HCMC AI Challenge 2024, our approach achieved competitive results with particularly strong performance on fine-grained descriptive queries.

Future improvements could include:

- Temporal awareness for better understanding of actions and events
- Integration of additional modalities like audio analysis
- More advanced vector quantization for handling larger datasets
- Zero-shot learning capabilities for handling novel query types

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/aic2024-team.jpg" title="Team photo" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Our team at the HCMC AI Challenge 2024 competition.
</div>

## Acknowledgments

We would like to thank the organizers of HCMC AI Challenge 2024 for providing the dataset and evaluation framework. Special thanks to our advisors for their guidance throughout the competition.

The code for this project is available in our [GitHub repository](https://github.com/sabertoaster/AIChallengeHCMC2024).