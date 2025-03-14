---
layout: page
title: Heineken Beer Detection
description: (AngelHack 2024) An AI-powered system that analyzes images to detect Heineken products, count customers, and extract marketing insights
img: assets/img/projects/beer-detection/beer-detection-thumbnail.png
importance: 1
category: competition
---

# AIO_TNTH: Intelligent Beverage Analytics

This project was developed for AngelHack (hackHCM), showcasing an integrated AI system designed to analyze images from retail environments and extract valuable marketing insights for Heineken. The system uses computer vision and natural language processing to detect Heineken products, count customers, analyze emotions, and generate comprehensive analytical reports.

## Project Overview

Our solution addresses a common challenge in beverage marketing: accurately measuring brand presence, consumer engagement, and promotional effectiveness across various retail locations. Using a combination of YOLO object detection, image classification, and large language models, we created a system that can:

1. Identify and count Heineken products in images (bottles, cans, cartons)
2. Detect customers and analyze their emotions
3. Identify marketing staff and promotional materials
4. Categorize retail environments (bars, restaurants, stores)
5. Generate comprehensive reports for marketing analysis

[View GitHub repo](https://github.com/sabertoaster/AngelHack2024)

## Technical Implementation

### Data Labeling
We use CVAT to label multiple foreign and local beer brands with human-like accuracy.

### Object Detection with YOLOv8

We trained a custom YOLOv8 model to identify specific Heineken-related objects:

- Heineken bottles and cans
- Heineken cartons and packaging
- Promotional materials (posters, banners, billboards)
- Marketing staff
- Customers consuming Heineken products

The model was trained on a dataset of over 1,000 images collected from various retail environments, with careful annotation of all relevant objects. We used data augmentation techniques to improve model robustness and achieved over 85% mean Average Precision (mAP) on our validation set.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/beer-detection/yolo-detection.png" title="YOLO Detection Example" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Example of YOLOv8 detection results showing Heineken products, customers, and marketing materials.
</div>

### Environment Classification

We implemented a complementary image classification model to categorize retail environments:

- Bars and pubs
- Restaurants
- Supermarkets and retail stores
- Events and promotional venues

This classification helps provide context for the detected objects and enables more targeted marketing analysis. The model was built using a fine-tuned YOLOv8-cls architecture and achieved over 95% accuracy on our test set.

### Natural Language Processing with Generative AI

For deeper analysis of the visual data, we integrated Gemini 1.5 Pro to:

1. Analyze customer emotions and engagement
2. Extract contextual information from the scene
3. Generate detailed reports on marketing effectiveness
4. Provide actionable insights based on the visual analysis

We structured the prompts to extract specific information categories:
- Number of people drinking Heineken
- Mood and atmosphere analysis
- Presence and activity of marketing staff
- Environmental context and setting
- Point-of-sale material effectiveness

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/beer-detection/user-interface.png" title="Web Interface" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The web interface allows marketing teams to upload images, view detection results, and export analytical reports.
</div>

## Web Application

We built a responsive web application using React.js for the frontend and Flask for the backend API. The application features:

- Drag-and-drop image upload
- Real-time analysis of uploaded images
- Visualization of detection results
- Export functionality for analytical reports
- Batch processing capabilities for multiple images

The UI was designed for marketing professionals who need quick insights without technical expertise in AI or computer vision.

## Business Impact

This system provides several key benefits for beverage marketing teams:

1. **Data-Driven Decision Making**: Replace subjective assessments with quantifiable metrics
2. **Marketing ROI Measurement**: Track the effectiveness of promotional materials and staff
3. **Competitive Analysis**: Gather insights about brand presence relative to competitors
4. **Consumer Behavior Insights**: Understand how customers interact with products in different environments
5. **Operational Efficiency**: Automate the collection and analysis of retail data

## Technologies Used

- **Computer Vision**: YOLOv8 (object detection), YOLOv8-cls (image classification)
- **Natural Language Processing**: Google's Gemini 1.5 Pro
- **Frontend**: React.js
- **Backend**: Flask (Python)
- **Data Processing**: NumPy, OpenCV, Pandas
- **Visualization**: Matplotlib, React components
- **Export**: Excel reporting via openpyxl

## Challenges and Solutions

### Training Data Limitations

Challenge: Limited availability of labeled images showing Heineken products in retail environments.

Solution: We implemented aggressive data augmentation techniques and used transfer learning to maximize performance with limited training data. We also developed a semi-automated annotation pipeline to speed up the labeling process.

### Real-time Processing

Challenge: Balancing model accuracy with processing speed for a responsive user experience.

Solution: We optimized the YOLOv8 model for inference speed by reducing input resolution and quantizing weights where possible without significantly compromising accuracy.

### Multi-object Scene Analysis

Challenge: Relating different objects in a scene to extract meaningful business insights.

Solution: We used the LLM's contextual understanding capabilities to interpret relationships between detected objects and generate coherent analyses of complex scenes.

## Future Development

- Integration with mobile applications for field marketing teams
- Video analysis capabilities for dynamic environments
- Trend analysis across multiple time periods
- Integration with sales data for correlation analysis
- Expansion to recognize additional beverage brands and product types

## Team Members

| Member                | Role                                 |
| --------------------- | ------------------------------------ |
| Nguyen Nhat Thuong    | Team Lead & Computer Vision Engineer |
| Nguyen Thi Nam Phuong | Data Scientist                       |
| Tran Van Thien        | Full-stack Developer                 |
| Mai Duc Minh Huy      | UI/UX Designer                       |
| Nguyen Phuoc Khoi     | Backend Developer                    |

## Acknowledgements

This project was developed as part of the AngelHack (hackHCM) hackathon. We thank the organizers for providing this opportunity and Heineken for the challenge that inspired this solution.