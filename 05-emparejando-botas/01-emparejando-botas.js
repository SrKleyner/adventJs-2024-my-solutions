function organizeShoes(shoes) {
    const object = {};
    const pairs = [];
    shoes.forEach((shoe) => {
      const { type, size } = shoe;
			object[size] ??= { type, quantity: 0 };
			if (object[size].type != type){
				pairs.push(size);
				object[size].quantity--;
				if (object[size].quantity === 0) object[size] = undefined;
			}else {
				object[size].quantity++;
			};

    });
    return pairs;
  }
	