export const classNames = (...classes: any[]) => {
  const classStrings = classes.filter(Boolean).map(c => c.split(' '));
  const individualClasses = [] as string[];
  classStrings.forEach(c =>
    c.forEach((s: any) => (s === '0' ? undefined : individualClasses.push(s)))
  );

  // @ts-ignore
  const uniqClasses = [...new Set(individualClasses)];
  return uniqClasses.filter(Boolean).join(' ');
};
