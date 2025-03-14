import json
import time
import requests

INPUT_FILE = "license-report.ext.json"
OUTPUT_FILE = "license-report-full.json"

def fetch_license_text(url):
    """Fetch license text from a given URL with error handling."""
    if not url:
        return ""  # Skip empty links

    try:
        response = requests.get(url, timeout=10)
        response.raise_for_status()
        return response.text
    except requests.RequestException as e:
        print(f"Failed to fetch {url}: {e}")
        return ""  # Return empty string if there's an error

def update_license_data():
    """Load JSON, fetch license texts, and save updated JSON."""
    with open(INPUT_FILE, "r", encoding="utf-8") as f:
        data = json.load(f)

    for entry in data:
        url = entry.get("licenseFileLink", "")
        if url:
            print(f"Fetching: {url}")
            entry["licenseText"] = fetch_license_text(url)
            time.sleep(2)  # Avoid rate limiting

    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(data, f, indent=4, ensure_ascii=False)

    print(f"Updated license report saved to {OUTPUT_FILE}")

if __name__ == "__main__":
    update_license_data()
