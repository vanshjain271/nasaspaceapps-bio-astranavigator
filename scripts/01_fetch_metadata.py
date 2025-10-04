# scripts/01_fetch_metadata.py

import pandas as pd
from pathlib import Path
import requests

# The official URL from the NASA Open Science Data Repository for this challenge
CSV_URL = "https://osdr.nasa.gov/bio/repo/data/studies/GLDS-233/v1.0/files/GLDS-233_publication_list.csv"

# Define the path for our new data directory
DATA_PATH = Path("./data")
OUTPUT_FILE = DATA_PATH / "publications.csv"

def fetch_data():
    """
    Fetches the publication list from the NASA OSDR and saves it to a local CSV file.
    """
    print("Starting data fetch process...")

    # Create the data directory if it doesn't exist
    DATA_PATH.mkdir(exist_ok=True)
    print(f"Directory '{DATA_PATH}' ensured.")

    try:
        # Use pandas to read the CSV directly from the URL
        print(f"Fetching data from: {CSV_URL}")
        headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
        response = requests.get(CSV_URL, headers=headers)
        response.raise_for_status() 

        with open(OUTPUT_FILE, 'wb') as f:
            f.write(response.content)

        # THE FIX IS HERE - Please ensure your file has this line
        df = pd.read_csv(OUTPUT_FILE, comment='#')
        
        print("\nSuccessfully fetched data! Here's a preview:")
        print(df.head())
        
        print(f"\nData saved locally to: {OUTPUT_FILE}")
        print(f"Total publications found: {len(df)}")

    except requests.exceptions.RequestException as e:
        print(f"\nError fetching data: {e}")
    except Exception as e:
        print(f"\nAn unexpected error occurred: {e}")

if __name__ == "__main__":
    fetch_data()