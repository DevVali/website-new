export const pages = [
	{
		url: "",
		title: "Home",
	},
	{
		url: "about",
		title: "About",
	},
] satisfies {
	url: string;
	title: string;
}[];

export const socials = [
	{
		name: "GitHub",
		link: "https://github.com/DevVali",
		icon: "icon-park:github",
	},
	{
		name: "Discord",
		link: "https://discordapp.com/users/773911690629742602",
		icon: "logos:discord-icon",
	},
] satisfies {
	name: string;
	link: string;
	icon: string;
}[];
