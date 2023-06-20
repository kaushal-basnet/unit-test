export default function Home() {
  return (
    <>
      <h1>Jest</h1>;<button>click me</button>
      <div>
        <label htmlFor="randomText">Please enter random text:</label>
        <input id="randomText" />
      </div>
      <div>
        <label htmlFor="specificText">Please enter specific text:</label>
        <input id="specificText" />
      </div>
      <div>
        <input placeholder="search..." />
      </div>
      <div>
        <input value="kaushal" />
      </div>
    </>
  );
}
