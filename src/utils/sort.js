export const sortByfunction = (productList, sortBy) => {
	switch (sortBy) {
		case "HIGH_TO_LOW":
			return(
                [ ...productList ].sort(
                    (item1, item2) => item2.discountedPrice - item1.discountedPrice
                )
            );

		case "LOW_TO_HIGH":
			return(
                [ ...productList ].sort(
                    (item1, item2) => item1.discountedPrice - item2.discountedPrice
                )
            );

		default:
			return([ ...productList ]);
	}
}