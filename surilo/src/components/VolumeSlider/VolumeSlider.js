import React, { useState } from "react"


function VolumeSlider() {
  const [volume, setVolume] = useState(1)
  const [muted, setMuted] = useState(false)
  const finalVolume = muted ? 0 : volume ** 2

  return (
    <main>
      <section>
        <input
          type="range"
          min={0}
          max={1}
          step={0.02}
          value={volume}
          onChange={event => {
            setVolume(event.target.valueAsNumber)
          }}
        />
        <button onClick={() => setMuted(m => !m)}>
          {muted ? "muted" : "unmuted"}
        </button>
      </section>
    </main>
  )
}

export default VolumeSlider;
