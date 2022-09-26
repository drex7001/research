import numpy as np
import pandas as pd
from flask import Flask, request, render_template
import pickle
import os
from flask import jsonify

app = Flask(__name__)
model = pickle.load(open('models/model.pkl', 'rb'))
# picFolder = os.path.join('static', 'pics')
# app.config['UPLOAD_FOLDER'] = picFolder


# @app.route("/")
# def hello_world():
#     pic1 = os.path.join(app.config['UPLOAD_FOLDER'], 'cult1.jpg')
#     return render_template('index.html', bg_image=pic1)


# @app.route("/predict", methods=['POST'])
# def predict():
#     int_features = [float(x) for x in request.form.values()]
#     features = [np.array(int_features)]
#     prediction = model.predict(features)

#     output = round(prediction[0], 2)

#     return render_template('index.html', prediction_text='Production forcast is {}'.format(output))

@app.route("/predict", methods=['POST'])
def predict():
    json_ = request.json
    query_df = pd.DataFrame(json_)
    prediction = model.predict(query_df)
    return jsonify({"Prediction": list(prediction)})
    # return request.json


if __name__ == "__main__":
    app.run(debug=True)
