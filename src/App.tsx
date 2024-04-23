import "./App.css";

const robotnik_bangers = ['YapeV5XBgQ4','HnyGSl3K-IE'].join(',')

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
      style={{position:'fixed', bottom:50, left:10}}
      width="50" 
      height="50"
      src={`https://www.youtube.com/embed/YapeV5XBgQ4?si=fqZyhoEsYYaoxkLL&autoplay=1&playlist=${robotnik_bangers}`}
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      >

       </iframe>
      <div style={{position:'fixed', bottom:50, right:10, height:"40%", width:"25%", background:'white'}}>
        <div>Let us know how much you HATE that hedgehog</div>
        <iframe title="chitchatter" src="https://chitchatter.im/public/robotnik-radio?embed=1" allow="camera;microphone;display-capture;fullscreen" width="100%" height="100%" />
      </div>
    </div>
  );
}

export default App;
