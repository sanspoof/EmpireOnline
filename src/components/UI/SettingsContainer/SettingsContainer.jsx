import Settings from '../../Settings/Settings';

function SettingsContainer({ onClose, showSettings }) {

    return (
      <div className={`fixed w-96 h-34 bg-gray-300 z-30 right-4 bottom-0 ${showSettings ? 'flex' : 'hidden'} flex-col p-4 rounded-lg shadow-lg`}>
        <button onClick={onClose} className="mb-2 text-black">Close</button>
        <Settings />
      </div>
    );
}

export default SettingsContainer;
