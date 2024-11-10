import gradio as gr
import numpy as np
import pandas as pd
from transformers import pipeline
from sklearn.metrics.pairwise import cosine_similarity

# Load the CSV file into a DataFrame
try:
    products_df = pd.read_csv('C:/Users/rcgop/Desktop/ECO/test/eco_friendly_products.csv')
  # Make sure this file is in the same directory
except FileNotFoundError:
    raise FileNotFoundError("Error: The CSV file was not found. Please check the file path.")

# Initialize the model
try:
    model = pipeline('feature-extraction', model='sentence-transformers/all-MiniLM-L6-v2')
except Exception as e:
    raise RuntimeError(f"Error initializing the model: {e}")

def get_embedding(text):
    """Helper function to get embedding for a single text"""
    embeddings = model(text, padding=True, truncation=True)
    return np.mean(embeddings[0], axis=0)

def recommend_products(user_input, n_recommendations=5):
    """Recommend products based on user input"""
    user_embedding = get_embedding(user_input)
    product_embeddings = [get_embedding(desc) for desc in products_df['Product Description']]
    similarities = cosine_similarity(user_embedding.reshape(1, -1), np.array(product_embeddings))[0]
    products_df['similarity'] = similarities
    recommendations = products_df.sort_values('similarity', ascending=False).head(n_recommendations)
    return recommendations[['Product Name', 'Product Description', 'Category', 'Carbon Footprint (g CO2e)', 'Sustainability Score (0-5)', 'similarity']]

def recommend(user_input):
    if user_input:
        recommendations = recommend_products(user_input)
        return recommendations.to_dict(orient="records")
    else:
        return [{"Error": "Please enter a product name or description."}]

# Set up Gradio Interface
with gr.Blocks() as demo:
    gr.Markdown("# Eco-Friendly Product Recommendations")
    
    with gr.Row():
        user_input = gr.Textbox(label="Enter a product name or description:")
        recommend_button = gr.Button("Get Recommendations")
    
    output = gr.Dataframe(headers=["Product Name", "Product Description", "Category", "Carbon Footprint (g CO2e)", "Sustainability Score (0-5)", "Similarity Score"])

    recommend_button.click(fn=recommend, inputs=user_input, outputs=output)

if __name__ == "__main__":
    demo.launch()
