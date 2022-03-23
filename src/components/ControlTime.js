export default function ControlTime() {
  return (
    <div className="controlTimeLayout">
      <div>
        {/* <i className="controlsTextSize fa fa-pause-circle"></i> */}
        <i className="controlsTextSize fa fa-pause-circle-o"></i>
        {/* <i className="controlsTextSize fa fa-play-circle"></i> */}
        <i className="controlsTextSize fa fa-play-circle-o"></i>
        <i className="controlsTextSize2 fa fa-refresh"></i>
      </div>
      <span className="clockTextSize">01:43:56</span>
      <div>
        {/* <i className="controlsTextSize fa fa-times-circle"></i> */}
        <i className="controlsTextSize fa fa-times-circle-o"></i>
        {/* <i className="controlsTextSize fa fa-check-circle"></i> */}
        <i className="controlsTextSize fa fa-check-circle-o"></i>
      </div>
    </div>
  );
}
