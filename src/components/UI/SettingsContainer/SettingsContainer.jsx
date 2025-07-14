import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

function SettingsContainer({ onClose, showSettings, children }) {

    const containerRef = useRef(null);

    useGSAP(() => {
        if (showSettings) {
            gsap.fromTo(containerRef.current, 
                { y: '100%', opacity: 0 }, 
                { y: '0%', opacity: 1, duration: 0.5, ease: 'power2.out' });
        } else {
            gsap.to(containerRef.current, 
                { y: '100%', opacity: 0, duration: 0.5, ease: 'power2.in', onComplete: onClose });
                
        }
    }, [showSettings]);

    return ( 
      <div ref={containerRef} className="fixed w-96 bg-white dark:bg-black z-30 right-4 bottom-0 flex-col pt-4 pb-6 px-6 rounded-t-md border-2 border-gray-900 dark:border-white opacity-0 border-b-0">
        <div className="relative grid gap-4 ">
            <div className="flex gap-2 items-center justify-between border-b border-gray-900 dark:border-white/75 pb-2">
                <h2 className="text-gray-900 dark:text-white font-bold text-lg ">Settings</h2>
                <button onClick={onClose} className="text-gray-900 dark:text-white text-sm font-bold cursor-pointer hover:underline underline-offset-2">Close</button>
            </div>
            {children}
        </div>
      </div>
    );
}

export default SettingsContainer;
