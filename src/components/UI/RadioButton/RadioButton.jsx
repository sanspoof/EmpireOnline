function RadioButton({ name, value, checked, onChange, label }) {
  return (
    <label className="flex items-center cursor-pointer group">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="sr-only" // Hide default radio button
      />
      
      {/* Custom radio button */}
      <div className={`w-4 h-4 rounded-md border-2 flex items-center justify-center transition-colors duration-200 ${
        checked 
          ? 'border-black dark:border-white border-2 ' 
          : 'border-gray-400 bg-transparent group-hover:white/20 group-active:bg-white'
      }`}>
        {checked && (
          <div className="w-2 h-2 rounded-full dark:bg-white"></div>
        )}
      </div>
      
      <span className="text-gray-900 dark:text-white ml-2 text-sm font-medium select-none">{label}</span>
    </label>
  );
}

export default RadioButton;