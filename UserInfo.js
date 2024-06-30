let userId = 1;

function createUserProfiles(originalNames, modifiedNames) {
  return originalNames.map((originalName, index) => {
    return {
      id: userId++,
      originalName: originalName,
      modifiedName: modifiedNames[index]
    };
  });
}

