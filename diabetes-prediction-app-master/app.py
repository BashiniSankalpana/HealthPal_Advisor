import streamlit as st
import joblib
import pandas as pd
from PIL import Image

@st.cache
def load(scaler_path, model_path):
    sc = joblib.load(scaler_path)
    model = joblib.load(model_path)
    return sc, model

def inference(row, scaler, model, feat_cols):
    df = pd.DataFrame([row], columns=feat_cols)
    X = scaler.transform(df)
    features = pd.DataFrame(X, columns=feat_cols)
    prediction = model.predict(features)[0]
    if prediction == 0:
        return "This is a healthy person!", None
    else:
        return "This person has high chances of having diabetes!", create_doctor_table()

def create_doctor_table():
    # Load data from CSV file with a different encoding
    file_path = 'data/Doctor_Specialist.csv'
    try:
        df = pd.read_csv(file_path, encoding='UTF-8')  # Try 'latin1' encoding
    except UnicodeDecodeError:
        df = pd.read_csv(file_path, encoding='UTF-8')  # Fallback to 'ISO-8859-1' encoding

    # Optionally, you can check the first few rows to verify the data
    # st.write(df.head())
    
    return df

st.title('Diabetes Prediction')
image = Image.open('data/diabetes_image.jpg')
st.image(image, use_column_width=True)

age = st.sidebar.number_input("Age in Years", 1, 150, 25, 1)
pregnancies = st.sidebar.number_input("Number of Pregnancies", 0, 20, 0, 1)
glucose = st.sidebar.slider("Glucose Level", 0, 200, 25, 1)
skinthickness = st.sidebar.slider("Skin Thickness", 0, 99, 20, 1)
bloodpressure = st.sidebar.slider('Blood Pressure', 0, 122, 69, 1)
insulin = st.sidebar.slider("Insulin", 0, 846, 79, 1)
bmi = st.sidebar.slider("BMI", 0.0, 67.1, 31.4, 0.1)
dpf = st.sidebar.slider("Diabetes Pedigree Function", 0.000, 2.420, 0.471, 0.001)

row = [pregnancies, glucose, bloodpressure, skinthickness, insulin, bmi, dpf, age]

if st.button('Find Health Status'):
    feat_cols = ['Pregnancies', 'Glucose', 'BloodPressure', 'SkinThickness', 'Insulin', 'BMI', 'DiabetesPedigreeFunction', 'Age']
    
    sc, model = load('models/scaler.joblib', 'models/model.joblib')
    result, doctor_table = inference(row, sc, model, feat_cols)
    st.write(result)
    if doctor_table is not None:
        st.write("Here are some doctors you might want to consult:")
        st.dataframe(doctor_table)

import streamlit as st
import webbrowser

# Example button for returning to the dashboard
if st.button('Return to Dashboard'):
    # Open the dashboard URL in a new tab
    webbrowser.open('http://localhost:3000/dashboard')

    # Set a flag in session state (for demonstration purposes; not actual redirection)
    st.session_state.redirect_to_dashboard = True
