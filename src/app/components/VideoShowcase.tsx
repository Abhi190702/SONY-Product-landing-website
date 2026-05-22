const videos = [
  {
    label: 'Noise cancelling',
    title: 'Quiet, down to the finest detail.',
    body: 'Adaptive processing reacts to your surroundings so the world softens before it reaches your ears.',
    src: '/media/videos/WH-1000XM6_Overview_NoiseCancelling_1920x1080.mp4',
  },
  {
    label: 'Design',
    title: 'Unfold. Rotate. Explore.',
    body: 'Every curve and fold is shaped for movement, portability, and a lighter all-day wearing feel.',
    src: '/media/videos/WH-1000XM6_Overview_Design_1920x1080.mp4',
  },
  {
    label: 'Call quality',
    title: 'Your voice, brought forward.',
    body: 'Intelligent beamforming isolates speech so you stay clear when the room around you gets loud.',
    src: '/media/videos/WH-1000XM6_Overview_CallQuality_1920x1080.mp4',
  },
];

export default function VideoShowcase() {
  return (
    <section id="videos" className="sony-video-section">
      <div className="sony-section-heading">
        <p className="sony-eyebrow">Feature films</p>
        <h2>See the XM6 in motion.</h2>
      </div>

      <div className="sony-video-stack">
        {videos.map((video, index) => (
          <article className="sony-video-row" key={video.title}>
            <div className="sony-video-copy">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p className="sony-eyebrow">{video.label}</p>
              <h3>{video.title}</h3>
              <p>{video.body}</p>
            </div>
            <div className="sony-video-frame">
              <video src={video.src} autoPlay muted loop playsInline preload="metadata" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
