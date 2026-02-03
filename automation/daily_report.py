from reportlab.lib.pagesizes import A4
from reportlab.pdfgen import canvas
import datetime
import os

def generate_report():
    date = datetime.date.today().strftime("%d %B %Y")

    # Ensure reports directory exists
    base_dir = os.path.dirname(__file__)
    reports_dir = os.path.join(base_dir, "..", "reports")
    os.makedirs(reports_dir, exist_ok=True)

    file_path = os.path.join(reports_dir, "daily_report.pdf")

    c = canvas.Canvas(file_path, pagesize=A4)
    c.setFont("Helvetica-Bold", 16)
    c.drawString(50, 800, "GTK DAILY DIGITAL MARKETING REPORT")

    c.setFont("Helvetica", 11)
    c.drawString(50, 770, f"Date: {date}")

    c.drawString(50, 730, "• Total Ad Spend: ₹2,500")
    c.drawString(50, 710, "• New Leads Generated: 23")
    c.drawString(50, 690, "• Best Performing Vertical: Bakery")
    c.drawString(50, 670, "• Top Video: Bakery Morning Offer")

    c.drawString(50, 630, "Sentiment Summary:")
    c.drawString(70, 610, "Positive – 70%")
    c.drawString(70, 590, "Neutral – 20%")
    c.drawString(70, 570, "Negative – 10%")

    c.save()
    print(f"[REPORT] Daily report generated successfully at {file_path}")

if __name__ == "__main__":
    generate_report()
