import React, { useState } from "react";
import { Jumbotron } from "react-bootstrap";
import Axios from "axios";

export default function Home() {
  const [handle, set_handle] = useState("");
  const [feed, set_feed] = useState([]);

  async function instagramPhotos(get_handle) {
    // It will contain our photos' links
    const res = [];

    try {
      const userInfoSource = await Axios.get(
        `https://www.instagram.com/${get_handle}/`
      );
      // userInfoSource.data contains the HTML from Axios
      const jsonObject = userInfoSource.data
        .match(
          /<script type="text\/javascript">window\._sharedData = (.*)<\/script>/
        )[1]
        .slice(0, -1);

      const userInfo = JSON.parse(jsonObject);
      // Retrieve only the first 10 results
      const mediaArray = userInfo.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media.edges.splice(
        0,
        12
      );
      console.log("mediaArray:", mediaArray);
      for (let media of mediaArray) {
        const node = media.node;

        // Process only if is an image
        if (node.__typename && node.__typename !== "GraphImage") {
          continue;
        }

        // Push the thumbnail src in the array
        res.push(node.thumbnail_src);
      }
    } catch (e) {
      console.error("Unable to retrieve photos. Reason: " + e.toString());
    }

    return res;
  }

  async function submit(event) {
    event.preventDefault();
    console.log("handle looking for:", handle);
    set_feed(await instagramPhotos(handle));
  }
  //console.log(feed);

  return (
    <div>
      <Jumbotron>
        <h1>Home</h1>
      </Jumbotron>
      <p>you're on the homepage</p>
      <form>
        <label htmlFor="instaHandle">Instagram name:</label>
        <br />
        <input
          type="text"
          id="instaHandle"
          name="instaHandle"
          value={handle}
          onChange={(e) => set_handle(e.target.value)}
        />
        <br />
        <button onClick={submit}>submit</button>
      </form>
      {feed.map((photo, index) => {
        return <img src={photo} alt={index} key={index} />;
      })}
    </div>
  );
}
