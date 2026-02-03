import schedule
import time
from ads_manager import run_ads_automation
from video_scheduler import post_videos
from daily_report import generate_report

def morning_tasks():
    run_ads_automation()
    post_videos()

def night_tasks():
    generate_report()

schedule.every().day.at("08:00").do(morning_tasks)
schedule.every().day.at("23:59").do(night_tasks)

print("[SCHEDULER] Automation service started")

while True:
    schedule.run_pending()
    time.sleep(1)
