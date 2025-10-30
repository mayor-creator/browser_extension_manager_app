export const breakpoints = {
	mobile: 23.4375, //375px
	tablet: 48, //768px
	desktop: 90, //1440px
};

export const medialQuery = {
	mobile: `@media (max-width: ${breakpoints.tablet - 0.01}em)`,
	tablet: `@media (min-width: ${breakpoints.tablet}em) and (max-width: ${breakpoints.desktop - 0.01}em)`,
	desktop: `@media (min-width: ${breakpoints.desktop}em)`,
};
