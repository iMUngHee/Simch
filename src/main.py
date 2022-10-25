from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = [
    "http://localhost",
    "http://localhost:3000",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def search(query: str = ''):
    print(query)
    return {
        "slugs": ['Korea-hosts-2022-World-Bio-Summit-', 'Increasing-the-glibc-and-Linux-kernel-requirements-|-Rust-Blog', "Samsung-requests-Austria's-support-for-Busan-to-host-World-Expo-2030-", 'Legoland-crisis-pushes-BOK-into-dilemma-', "Convenience-store-owners-at-odds-with-gov't-over-plastic-bag-ban", 'Indoor-mask-rule-to-be-in-place-for-3-more-months--health-authorities-', 'Developer-console', "INTERVIEW-Incheon-mayor-banks-on-port-city's-openness-for-creative-governance-", 'Testing-Web-Design-Color-Contrast', 'Program-Frameworks-—-Python-3.10.8-documentation']
    }
