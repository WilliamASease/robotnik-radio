import "./App.css";
import { isMobile } from "react-device-detect";

function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "lightgrey",
        alignItems: "center",
        minHeight: "100%",
        width: "100%",
      }}
    >
      <div>
        Your application's content goes here. Mobile users won't be able to
        see the grey bars on the side.
      </div>
      <div style={{position:'fixed', bottom:50, right:10, height:"40%", width:"25%"}}>
        <div>Let us know how much you HATE that hedgehog</div>
        <iframe src="https://chitchatter.im/public/robotnik-radio?embed=1" allow="camera;microphone;display-capture;fullscreen" width="100%" height="100%" />
      </div>
    </div>
  );
}

export default App;
