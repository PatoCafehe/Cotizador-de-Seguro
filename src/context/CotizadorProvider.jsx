import { useState, createContext } from 'react';
import {
	getYearDifference,
	calcularMarca,
	calcularPlan,
	formatearDinero,
} from '../helpers';

const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
	const [data, setData] = useState({
		marca: '',
		year: '',
		plan: '',
	});

	const [error, setError] = useState('');
	const [resultado, setResultado] = useState(0);
	const [cargando, setCargando] = useState(false);

	const handleChangeData = (e) => {
		setData({
			...data,
			[e.target.name]: e.target.value,
		});
	};

	const cotizadorSeguro = () => {
		// Una Base
		let resultado = 2000;
		// Obtener diferencia de años
		const difference = getYearDifference(data.year);
		// Hay que restar el 3% cada año
		resultado -= (difference * 3 * resultado) / 100;
		// Europeo 30%
		// Americano 15%
		// Asiatico 5 %
		resultado *= calcularMarca(data.marca);
		console.log(resultado);

		resultado *= calcularPlan(data.plan);
		resultado = formatearDinero(resultado);

		setCargando(true);
		setTimeout(() => {
			setResultado(resultado);
			setCargando(false);
		}, 1500);
	};

	return (
		<CotizadorContext.Provider
			value={{
				data,
				handleChangeData,
				error,
				setError,
				cotizadorSeguro,
				resultado,
				cargando,
			}}
		>
			{children}
		</CotizadorContext.Provider>
	);
};

export { CotizadorProvider };

export default CotizadorContext;
