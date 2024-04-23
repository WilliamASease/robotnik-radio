import { DiscussionEmbed } from "disqus-react";
import "./App.css";

const scrambled_robotnik_bangers = 
['YapeV5XBgQ4', 
'HnyGSl3K-IE', 
'TVli0334lD0', 
'lTZ9t-KymYo',
'pTt2mEH7vFc',
'NXCjZESUeFg',
'xZEPgLkzhwE',
'Ja-6D8uVcH0',
'XXqkAuAool0',
'h_HDv-SUta4',
'rR87r63315g',
'Gw0YduM21TE'].sort(() => Math.random() - 0.5)

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100%",
        width: "100%",
      }}
    >
      <iframe
        style={{ position: 'fixed', bottom: 50, left: 10 }}
        width="50"
        height="50"
        src={`https://www.youtube.com/embed/${scrambled_robotnik_bangers[0]}?si=fqZyhoEsYYaoxkLL&playlist=${scrambled_robotnik_bangers.join(',')}&autoplay=1`}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >

      </iframe>
      <div style={{ position: 'fixed', bottom: 50, right: 10, height: "25%", width: "25%", background: 'white', overflow:'scroll', padding:"1rem" }}>
        Let us know how much you HATE that hedgehog
        <DiscussionEmbed shortname={"https-williamasease-github-io"} config={{
          url: window.location.href,
          identifier: 'unique-post-id',
          title: 'Post Title',
        }} />
      </div>
    </div>
  );
}

export default App;
