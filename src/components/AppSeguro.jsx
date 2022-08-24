import Formulario from './Formulario';
import useCotizador from '../hooks/useCotizador';
import Spinner from './Spinner';
import Resultado from './Resultado';
const AppSeguro = () => {
	const { resultado, cargando } = useCotizador();

	return (
		<>
			<header className="my-10">
				<h1 className="text-white text-center text-4xl font-black">
					Cotizador de Seguros de Autos
				</h1>
			</header>

			<div className="bg-slate-100 mx-auto shadow rounded-lg p-10">
				<main className=" bg-white p-4 mx-auto md:w-5/6 lg: w-6/7 rounded-md">
					<Formulario />
					{cargando ? <Spinner /> : <Resultado />}
				</main>
			</div>
		</>
	);
};

export default AppSeguro;
