export default function Page() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Welcome to SpeedyNinja</h1>
      <p className="text-lg text-gray-600 mb-6 text-center max-w-xl">
        Build fast. Deliver faster. Empower your brand with our modern tech solutions.
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
          Get Started
        </button>
        <button className="px-6 py-2 border border-blue-600 text-blue-600 rounded-xl hover:bg-blue-50 transition">
          Learn More  
        </button>
      </div>
    </main>
  );
}
