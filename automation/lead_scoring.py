import json
import pandas as pd
from sklearn.linear_model import LogisticRegression

def train_and_score():
    with open("sample_data.json") as f:
        data = json.load(f)

    df = pd.DataFrame(data)
    df["intent"] = df["feedback"].apply(lambda x: 1 if "more" in x.lower() else 0)

    X = df[["intent"]]
    y = [1, 0]

    model = LogisticRegression()
    model.fit(X, y)

    df["score"] = model.predict_proba(X)[:, 1] * 100
    print("[ML] Lead scores generated:\n", df[["name", "score"]])

    return df

if __name__ == "__main__":
    train_and_score()
