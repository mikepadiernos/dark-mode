import { useEffect } from 'react';
import { useLocalStorage } from "./useLocalStorage";

export  const useDarkMode = () => {

	const [dark, setDark] = useLocalStorage("darkMode", false)
	;
	useEffect (() => {
		if(localStorage.getItem('darkMode') === 'true') {
			document.body.classList.add("dark-mode");
		} else {
			document.body.classList.remove("dark-mode");
		}
	}, [dark]);

	return [dark, setDark];

};