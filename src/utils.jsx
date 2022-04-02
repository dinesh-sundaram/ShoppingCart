const formatCurrency = (amount) => {
	return "$" + Number(parseFloat(amount).toFixed(2)).toLocaleString() + " ";
};
export default formatCurrency;
