const formatCurrency = (amount) => {
	return "$" + Number(amount.toFixed(2)).toLocaleString() + " ";
};
export default formatCurrency;
