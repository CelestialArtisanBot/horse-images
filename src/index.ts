export default {
  async fetch(request, env) {
    try {
      const themeOptions = ["fantasy", "futuristic", "ancient", "mystic", "elemental"];
      const randomTheme = themeOptions[Math.floor(Math.random() * themeOptions.length)];

      const inputs = {
        prompt: `A high-resolution, full 3D rendering of a radiant and beautiful horse with a ${randomTheme} theme in a realistic style, detailed cinematic lighting, and a dynamic pose that captures the character's essence. The scene is a mix of sci-fi and fantastical elements, with a vibrant color palette.`,
      };

      const response = await env.AI.run(
        "@cf/stabilityai/stable-diffusion-xl-base-1.0",
        inputs,
      );

      return new Response(response, {
        headers: {
          "content-type": "image/png",
        },
      });
    } catch (error) {
      console.error("Error generating image:", error);
      return new Response("Error generating image", {
        status: 500,
      });
    }
  },
} satisfies ExportedHandler<Env>;
