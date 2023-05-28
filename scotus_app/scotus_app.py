from pcconfig import config

import json
import pandas as pd
import pynecone as pc

# docs_url = "https://pynecone.io/docs/getting-started/introduction"
# filename = f"{config.app_name}/{config.app_name}.py"
courts = ["Roberts Court", "Warren Court", "Burger Court"]
sides = ["Majority", "Minority"]
cases = pd.read_json("data/cases.json")


class State(pc.State):
    """The app state."""
    judges = ["John Roberts", "Neil Gorsuch", "Elena Kagan", "Sonya Sotomayor"]

class Judges(pc.State):
    judges = ["John Roberts", "Neil Gorsuch", "Elena Kagan", "Sonya Sotomayor"]

def judge_selection(judge):
        return pc.vstack(
            pc.hstack(
                pc.radio_group(
                    sides,
                ),
                pc.image(
                    src="https://upload.wikimedia.org/wikipedia/commons/5/58/Clarence_Thomas_official_SCOTUS_portrait.jpg",
                    width="100px",
                    height="auto",
                    border="5px solid #555",
                )
            ),
            pc.text(judge),
        )

def index() -> pc.Component:
    return pc.center(
        pc.vstack(
            pc.heading("SCOTUS Decision Analyzer"),
            pc.vstack(
                pc.heading("Get started by choosing a court", font_size="1em"),
                pc.select(
                    courts,
                    placeholder="Select a court",
                ),
                pc.button("Run analysis"),
            ),
            pc.hstack(
                pc.vstack(
                    pc.foreach(State.judges, judge_selection),
                ),
                pc.data_table(
                    data=cases.T,
                    pagination=True,
                    search=True,
                    sort=True,
                ),
                pc.vstack(
                    pc.foreach(State.judges, judge_selection),
                ),
            ),
        ),
    )

# def index() -> pc.Component:
#     return pc.center(
#         pc.vstack(
#             pc.heading("Welcome to Pynecone!", font_size="2em"),
#             pc.box("Get started by editing ", pc.code(filename, font_size="1em")),
#             pc.link(
#                 "Check out our docs!",
#                 href=docs_url,
#                 border="0.1em solid",
#                 padding="0.5em",
#                 border_radius="0.5em",
#                 _hover={
#                     "color": "rgb(107,99,246)",
#                 },
#             ),
#             spacing="1.5em",
#             font_size="2em",
#         ),
#         padding_top="10%",
#     )


# Add state and page to the app.
app = pc.App(state=State)
app.add_page(index)
app.compile()
