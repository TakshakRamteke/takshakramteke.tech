// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
    semi: true,
    trailingComma: "all",
    tabWidth: 4,
    plugins: ["prettier-plugin-astro"],
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
};
