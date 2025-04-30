import { useTheme } from './context/ThemeContext';
import { useLanguage } from './context/LanguageContext';
function App() {
  const { theme, toggleTheme } = useTheme();
 
  const { language, changeLanguage, t } = useLanguage();
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">{ t.heading}</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={toggleTheme}
      >
       {theme === "light" ? t.switchButton : t.switchButtonLight}
      </button>
      <div className='mt-4'>
        <select value={language} onChange={(e) => changeLanguage(e.target.value)} className="p-2 rounded border">
          <option value='en'>English</option>
          <option value='hi'>Hindi</option>
        </select>
     </div>
    </div>
  );
}

export default App;
