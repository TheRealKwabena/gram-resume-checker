from pdfminer.high_level import extract_text
import openai

openai.api_key = "your_openai_api_key"

# Parse resume content
def parse_resume(file_path):
    text = extract_text(file_path)
    return text

# Analyze resume with AI
def analyze_resume(resume_text, job_description):
    prompt = f"""
    Match the following resume to the job description:
    Job Description:
    {job_description}

    Resume:
    {resume_text}

    Extract key details (Name, Skills, Experience) and provide a match score out of 100.
    """
    response = openai.Completion.create(
        engine="text-davinci-003",
        prompt=prompt,
        max_tokens=300
    )
    return response.choices[0].text.strip()
