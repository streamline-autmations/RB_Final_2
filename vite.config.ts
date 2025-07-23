export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // no ../ needed now
    emptyOutDir: true,
  },
});

