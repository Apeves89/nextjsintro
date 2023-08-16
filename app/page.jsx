import Feed from "@components/Feed";

export default function Home() {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p />
      <desc className="text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis ab
        nam unde magni similique illum officia deserunt expedita, quos quibusdam
        necessitatibus quae nihil placeat vel et? Impedit obcaecati sed culpa.
      </desc>
      <Feed />
    </section>
  );
}
