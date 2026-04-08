async def detect_redirects(page, original_url):
    # Get domain info
    original_domain = original_url.split("/")[2]
    redirect_chain = []

    # Checks for redirects inside the page itself
    for frame in page.frames:
        current_url = frame.url
        if current_url and current_url != "about:blank" and current_url.strip() != "":
            redirect_chain.append(current_url)

    tag = []
    if len(redirect_chain) > 0:
        conc = "The page loads third-party content."
        tag.append("Cross-Domain")
    else:
        conc = "The page doesn't load third-party content."

    if len(redirect_chain) > 1:
        tag.append("Multiple redirects")

    if len(redirect_chain) <= 1:
        score = 0
    elif len(redirect_chain) <= 6:
        score = 0.5
    else:
        score = 1

    return {
        "redirect_chain": redirect_chain,
        "tags": tag,
        "redirect_len": conc,
        "score": score,
    }