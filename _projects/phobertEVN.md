---
layout: page
title: LLM-Based Document Similarity Detection
description: (EVN) Leveraging PhoBERT and Longformer for Vietnamese text duplicate detection
img: assets/img/projects/phobertEVN/longformer.png
importance: 1
category: self project
---

## Overview

This project explored the application of Large Language Models (LLMs) for detecting textual similarity in Vietnamese documents. Working with EVN Central Power Corporation (EVNCPC) datasets, I implemented several approaches to identify duplicate or semantically similar content within administrative documents.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/phobertEVN/final_result.png" title="Semantic similarity matrix visualization" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/phobertEVN/bert_diagram.png" title="PhoBERT model architecture" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: Visualization of document similarity scores as a heatmap matrix. Right: Simplified architecture of the BERT model for sentiment classification task.
</div>


[View GitHub repo](https://github.com/sabertoaster/BERT_Semantic_Textual_Similarity/)

## Challenge

Duplicate document detection in Vietnamese presents unique challenges compared to English text processing:

- Vietnamese language has specific syntactic structures and semantic properties
- Administrative documents often contain domain-specific terminology 
- Standard pre-trained models like BERT have limited Vietnamese language capabilities
- Long documents exceed typical transformer model token limits (512 tokens)

## Methodology

The project leveraged multiple approaches to text similarity detection:

### Traditional Similarity Metrics

First, I implemented baseline metrics to establish fundamental similarity detection:

- **Cosine Similarity**: Measured vector similarity in the embedding space
- **TF-IDF (Term Frequency-Inverse Document Frequency)**: Weighted word importance across document corpus

### Advanced Language Model Approaches

To capture deeper semantic relationships, I explored two key language models:

#### PhoBERT

[PhoBERT](https://github.com/VinAIResearch/PhoBERT) is a pre-trained BERT-based model specifically fine-tuned for Vietnamese language. I utilized it to generate contextualized embeddings of text segments that capture semantic meaning.

```python
from transformers import AutoModel, AutoTokenizer
import torch

# Load PhoBERT model and tokenizer
tokenizer = AutoTokenizer.from_pretrained("vinai/phobert-base")
model = AutoModel.from_pretrained("vinai/phobert-base")

# Function to get embeddings
def get_embeddings(text, max_length=512):
    inputs = tokenizer(text, return_tensors="pt", 
                      max_length=max_length, 
                      truncation=True, 
                      padding="max_length")
    
    with torch.no_grad():
        outputs = model(**inputs)
    
    # Use the CLS token embedding as document representation
    return outputs.last_hidden_state[:, 0, :].numpy()
```

#### Longformer

To overcome BERT's token limitation (512 tokens), I implemented [Longformer](https://huggingface.co/allenai/longformer-base-4096), which can process documents up to 4,096 tokens:

```python
from transformers import LongformerModel, LongformerTokenizer

# Load Longformer
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerModel.from_pretrained("allenai/longformer-base-4096")

# Process longer documents
def get_longformer_embeddings(text, max_length=4096):
    inputs = tokenizer(text, return_tensors="pt", 
                      max_length=max_length, 
                      truncation=True)
    
    with torch.no_grad():
        outputs = model(**inputs)
    
    # Global attention on CLS token
    return outputs.last_hidden_state[:, 0, :].numpy()
```

## Lessons Learned

This project provided several valuable insights into NLP for Vietnamese text:

1. **Domain Adaptation is Crucial**: General-purpose language models require significant adaptation for specialized domains like administrative documents. Fine-tuning on domain-specific data would substantially improve performance.

2. **Preprocessing Matters**: The quality of text preprocessing significantly affects results. For administrative documents, removing headers, page numbers, and standardizing formatting is essential.

3. **LLM Limitations**: Despite their power, language models still face significant challenges with:
   - Document length constraints
   - Capturing domain-specific terminology
   - Processing format variations

4. **Vietnamese NLP Landscape**: The available tools and models for Vietnamese language processing are still developing compared to English, requiring more custom adaptation.

## Future Directions

If continuing this research, promising directions include:

- **Custom Fine-tuning**: Further training PhoBERT on EVNCPC administrative documents
- **Hierarchical Embedding**: Breaking long documents into chunks, embedding separately, then aggregating
- **Multimodal Analysis**: Incorporating document layout and structural features alongside text

## Conclusion

While the project didn't achieve perfect results due to the unique challenges of Vietnamese administrative document processing, it provided valuable experience with state-of-the-art language models and established a foundation for future NLP work with Vietnamese text. The investigation into PhoBERT and Longformer demonstrates the potential of transformer-based approaches for Vietnamese document similarity tasks, with clear pathways for improvement.
