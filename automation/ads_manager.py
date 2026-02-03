import datetime

def run_ads_automation():
    now = datetime.datetime.now().strftime("%H:%M")
    print(f"[ADS] Ads optimization started at {now}")

    rules = [
        {"vertical": "Bakery", "hour": 8, "action": "Increase Budget"},
        {"vertical": "Clothing", "hour": 18, "action": "Increase Bids"},
        {"vertical": "Laundry", "hour": 10, "action": "Pause Low CTR Ads"}
    ]

    for rule in rules:
        print(f"[ADS] {rule['action']} for {rule['vertical']}")

    print("[ADS] Ads automation completed\n")

if __name__ == "__main__":
    run_ads_automation()
