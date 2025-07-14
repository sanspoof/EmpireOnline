import { useTheme } from '../../context/ThemeContext';
import RadioButton from '../UI/RadioButton/RadioButton';

function Settings() {
  const { theme, setTheme } = useTheme();

  return (
    <>
        <SimpleSettingsContainer title="Set Colour Mode" subtitle="Set default theme to dark or light mode">
            <RadioButton
                name="theme"
                value="dark"
                checked={theme === 'dark'}
                onChange={(e) => setTheme(e.target.value)}
                label="Dark Mode"
            />
            <RadioButton
                name="theme"
                value="light"
                checked={theme === 'light'}
                onChange={(e) => setTheme(e.target.value)}
                label="Light Mode"
            />
        </SimpleSettingsContainer>

    </>
  );
}

function SimpleSettingsContainer({title, subtitle, children}) {

    return(
        <div className="grid grid-col gap-1">
            <div className="flex flex-col">
                <h3 className="text-gray-900 dark:text-white font-semibold text-cl">{title}</h3>
                <p className="text-gray-600 dark:text-gray-200 text-sm font-body">{subtitle}</p>
            </div>
            <div className="flex items-center gap-4">
                {children}
            </div>
        </div>
    )

} 

export default Settings;