export const MARCAS = [
	{ id: 1, nombre: 'Europeo' },
	{ id: 2, nombre: 'Americano' },
	{ id: 3, nombre: 'Asiático' },
];

const YEARSMAX = new Date().getFullYear();
export const YEARS = Array.from(
	new Array(20),
	(valor, index) => YEARSMAX - index
);

export const PLANES = [
	{ id: 1, nombre: 'Básico' },
	{ id: 2, nombre: 'Completo' },
];
