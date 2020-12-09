import {
  ZeroConfig,
  SampleConfig,
  BlogPost,
  SampleComic,
} from "./components/Loader/Loader.stories.js";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <div style={{ marginBottom: "30px" }}>
        <h1>Zero Config</h1>
        <ZeroConfig />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <h1>Sample Config</h1>
        <SampleConfig />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <h1>Blog Post</h1>
        <BlogPost />
      </div>
      <div style={{ marginBottom: "30px" }}>
        <h1>Sample Comic</h1>
        <SampleComic />
      </div>
    </div>
  );
}

export default App;
