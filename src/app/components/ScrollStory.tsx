export type StoryBeat = {
  label?: string;
  title: string;
  body?: string;
};

export default function ScrollStory({ beat }: { beat: StoryBeat }) {
  return (
    <div className="story-panel">
      {beat.label ? <p className="label">{beat.label}</p> : null}
      <h2 className="section-title">{beat.title}</h2>
      {beat.body ? <p className="body-copy">{beat.body}</p> : null}
    </div>
  );
}
