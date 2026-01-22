
Lightweight Topic Modeling for Twitter Data


1) Overview
This project implements a lightweight topic modeling system for Twitter data using JavaScript (Node.js). Instead of heavy machine-learning frameworks, it uses text preprocessing, bigram extraction, cosine similarity, and a custom K-Means clustering algorithm to group tweets into meaningful topics.
The system reads tweets from an Excel file, processes and clusters them, and outputs the results back into a new Excel file with assigned topic labels.


2) Key Features
📥 Reads Twitter data directly from .xlsx files
🧹 Cleans and preprocesses tweet text
🔤 Tokenization using Compromise NLP
🔗 Bigram extraction for improved context
📐 Vectorization using a binary term-document matrix
📊 Topic discovery via custom K-Means clustering
📤 Outputs clustered results to a new Excel file


3) Why This Project Matters
Demonstrates NLP fundamentals without heavy ML libraries
Shows understanding of similarity metrics (cosine similarity)
Implements unsupervised learning from scratch
Ideal for environments where lightweight or explainable models are preferred
Strong example of data processing + algorithmic thinking


4) Technologies Used
Language: JavaScript (Node.js)
NLP: Compromise
Data Handling: xlsx
File System: fs


5) Project Workflow
Load tweets from an Excel dataset
Clean text (lowercasing, punctuation removal, normalization)
Tokenize and remove domain-specific stopwords
Generate unigrams and bigrams
Convert documents into vector representations
Cluster tweets into topics using cosine similarity + K-Means
Save topic-labeled tweets to a new Excel file


6) Configuration Options
Key settings can be modified in the CONFIG object:
const CONFIG = {
  numTopics: 3,
  inputFile: 'Twitter_Sentiment_Dataset.xlsx',
  outputFile: 'tweets_with_light_topics.xlsx',
  minTweetLength: 10,
  stopwords: ['stock', 'today', 'price', 'market', 'share']
};
numTopics — Number of topics to cluster into
stopwords — Domain-specific terms to ignore
minTweetLength — Filters out short/noisy tweets
Installation & Setup

# Initialize project
npm init -y

# Install dependencies
npm install compromise xlsx
Running the Project
node analyze.js

✅ After execution, a new Excel file will be generated:
tweets_with_light_topics.xlsx
This file includes all original tweet data plus a new Topic column indicating the assigned cluster.


7) Output Example
Tweet	Sentiment	Topic
Tesla stock rising fast	Positive	1
Market volatility worries investors	Negative	2


8) Limitations & Notes
This is a lightweight approximation of topic modeling, not LDA or BERT
Topics are numeric and require manual interpretation
Designed for educational, experimental, and low-resource environments


9)  Author
Navpreet Kaur Badhwal
Bachelor of Computer Information Systems (CIS)
