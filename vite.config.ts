export default defineConfig({
  // ✅ Remove this line:
  // root: 'src',

  plugins: [react()],
  build: {
    outDir: 'dist', // Not ../dist anymore
    emptyOutDir: true,
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
