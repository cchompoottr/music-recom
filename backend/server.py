from flask import Flask, jsonify, request
from flask_cors import CORS
from sklearn.metrics.pairwise import cosine_similarity

import pandas as pd
import numpy as np



df = pd.read_csv('/Applications/MAMP/htdocs/music-recom/frontend/public/final__df.csv')
image_urls = df['Album Image URL'].tolist()
artist = df['Artist Name(s)'].tolist()
total_song = df['Track Name'].tolist()

def create_vectors(df):
    return np.random.rand(len(df), 10)  

vectors = create_vectors(df)


app = Flask(__name__)
CORS(app)

@app.route("/all-tracks", methods=['GET'])
def all_tracks():
    tracks = df['Track Name'].tolist()
    return jsonify({'tracks': tracks})


@app.route("/recommend", methods=['GET'])
def recommend():
    song = request.args.get('song')  
    if song is None:
        return jsonify({'error': 'No song provided'}), 400

    if song not in df['Track Name'].values:
        return jsonify({'error': 'Song not found'}), 404

    song_id = df[df['Track Name'] == song].index[0]
    simi = cosine_similarity(vectors)
    distances = simi[song_id]
    song_list = sorted(list(enumerate(distances)), reverse=True, key=lambda x: x[1])[1:7]

    title_songs = [df.iloc[i[0]]['Track Name'] for i in song_list]
    cover_images = [df.iloc[i[0]]['Album Image URL'] for i in song_list]
    artist_name = [df.iloc[i[0]]['Artist Name(s)'] for i in song_list]
    
    return jsonify({
        'recommendations': title_songs,
        'image_urls': cover_images,
        'artist': artist_name
    })


if __name__ == "__main__":
    app.run(debug=True, port=2000)
