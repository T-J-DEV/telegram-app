import { useEffect, useState } from "react";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const tg = window.Telegram.WebApp;
    tg.expand();

    const u = tg.initDataUnsafe?.user;
    if (u) {
      setUser(u);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center p-6">
      <h1 className="text-3xl font-bold mb-4">
        Hello {user ? user.first_name : "Guest"} 👋
      </h1>
      <p className="text-gray-400 mb-6">
        This is your Telegram Mini App running on Vercel 🚀
      </p>
      <button
        className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-lg shadow-md transition"
        onClick={() => window.Telegram.WebApp.close()}
      >
        Close App
      </button>
    </div>
  );
}

export default App;
