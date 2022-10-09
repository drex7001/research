import numpy as np
import pandas as pd
from flask import Flask, request, render_template
import pickle
import os
from flask import jsonify
# from .extentions import mongo

app = Flask(__name__)
model = pickle.load(open('models/model.pkl', 'rb'))
# mongo.init_aopp(app)
# app.config['MONGO_URI'] = 'mongodb+srv://IT19217796:ITMyotsoI7q98uHz@sliit-api.rrnov.mongodb.net/?retryWrites=true&w=majority'
# picFolder = os.path.join('static', 'pics')
# app.config['UPLOAD_FOLDER'] = picFolder


@app.route("/")
def home():
    # pic1 = os.path.join(app.config['UPLOAD_FOLDER'], 'cult1.jpg')
    # return render_template('index.html', bg_image=pic1)
    return render_template('index.html')


@app.route("/predict", methods=['POST'])
def predict():
    int_features = [float(x) for x in request.form.values()]
    features = [np.array(int_features)]
    prediction = model.predict(features)

    output = round(prediction[0], 2)

    return render_template('index.html', prediction_text='Production crop yield is {} MT'.format(output))

# @app.route("/predict", methods=['POST'])
# def predict():
#     json_ = request.json
#     query_df = pd.DataFrame(json_)
#     prediction = model.predict(query_df)
#     return jsonify({"Prediction": list(prediction)})


if __name__ == "__main__":
    app.run(debug=True)
