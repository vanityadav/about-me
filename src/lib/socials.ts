import { EmailIcon, GithubIcon, LinkedInIcon } from '../icons';

import { AUTHOR } from './site';

const mailtoSubject = encodeURIComponent("Let's chat about my website");
const mailtoBody = encodeURIComponent(
	`Hi ${AUTHOR.name.split(' ')[0]},\n\nI would like you to ....`
);

const socials = [
	{
		label: 'Github',
		href: AUTHOR.social.github,
		Icon: GithubIcon,
	},
	{
		label: 'LinkedIn',
		href: AUTHOR.social.linkedin,
		Icon: LinkedInIcon,
	},
	{
		label: 'E-mail',
		href: `mailto:${AUTHOR.email}?subject=${mailtoSubject}&body=${mailtoBody}`,
		Icon: EmailIcon
	}
];
export default socials;
