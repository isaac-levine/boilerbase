const DemoSection = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="bg-white dark:bg-gray-900 shadow-lg bg-background dark:bg-foreground/5 border-t p-8 max-w-6xl mx-auto rounded-2xl">
        <div className="relative aspect-video overflow-hidden rounded-2xl shadow-lg">
          <div
            style={{
              position: "relative",
              paddingBottom: "62.5%",
              height: 0,
            }}
          >
            <iframe
              src="https://www.loom.com/embed/83c2fb0d1ef44add995f4881a7b8e99b?sid=7f4f7062-817b-4455-a385-e6b108e8da9c"
              title="Boilerbase Demo"
              allowFullScreen
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
