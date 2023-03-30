import pynecone as pc

config = pc.Config(
    app_name="scotus_app",
    db_url="sqlite:///pynecone.db",
    env=pc.Env.DEV,
)
