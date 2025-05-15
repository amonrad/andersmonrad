import LiteYouTubeEmbed from 'react-lite-youtube-embed';
import 'react-lite-youtube-embed/dist/LiteYouTubeEmbed.css';
import '../styles/AudioBarStyle.css'; // adjust path if needed

export default function LiteAudioEmbed({ id, title = 'YouTube Audio Embed' }) {
  return (
    <div className="w-full h-14 mt-5">
      <LiteYouTubeEmbed
        id={id}
        title={title}
        noCookie={true}
        adNetwork={false}
        poster="maxresdefault"
        wrapperClass="yt-lite audio-embed"
      />
    </div>
  );
}