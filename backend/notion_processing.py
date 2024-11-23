from notion_client import Client

# Notion API configuration
NOTION_API_KEY = "your_notion_api_key"
NOTION_DATABASE_ID = "your_notion_database_id"

notion = Client(auth=NOTION_API_KEY)

def update_notion(candidate_details):
    """
    Updates a Notion database with candidate details.
    """
    notion.pages.create(
        parent={"database_id": NOTION_DATABASE_ID},
        properties={
            "Name": {"title": [{"text": {"content": candidate_details["name"]}}]},
            "Skills": {"rich_text": [{"text": {"content": candidate_details["skills"]}}]},
            "Experience": {"rich_text": [{"text": {"content": candidate_details["experience"]}}]},
            "Score": {"number": candidate_details.get("score", 0)},
        }
    )
