def post_videos():
    platforms = ["Instagram", "YouTube Shorts"]
    videos = ["bakery_offer.mp4", "clothing_sale.mp4"]

    for platform in platforms:
        for video in videos:
            print(f"[VIDEO] Scheduled {video} on {platform}")

    print("[VIDEO] All promotional videos scheduled\n")

if __name__ == "__main__":
    post_videos()
