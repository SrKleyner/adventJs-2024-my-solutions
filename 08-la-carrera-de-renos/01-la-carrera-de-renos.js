function drawRace(indices, length) {
    let rail = [];
    const railWithSnow = '~'.repeat(length).split('');
    const indicesLength = indices.length - 1;

    indices.forEach((element, i) => {
			const railCopy	= [...railWithSnow]  
      const afterSpaces = ' '.repeat(indicesLength - (i));
      if (element > 0){
      	railCopy[element] = 'r'
			} else if (element < 0){
      	railCopy[length + element] = 'r'
			}
      rail.push(`${afterSpaces}${railCopy.join('')} /${i+1}`)
		})
      return rail.join('\n');
  }

