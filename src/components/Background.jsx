import "./Background.css"

export default function Background() {
  return (
    <div id='background'>
      <video muted autoPlay loop>
        <source src="/background/galaxy-background.mp4" type="video/mp4" />
      </video>
    </div>
  )
}