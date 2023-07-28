import messenger from '$lib/assets/dock/messenger.svg';
import mail from '$lib/assets/dock/mail.svg';
import resume from '$lib/assets/dock/resume.svg';

const dockRoutes = [
	{ href: '', src: messenger, label: 'Home' },
	{ href: 'about', src: messenger, label: 'About' },
	{ href: 'projects', src: messenger, label: 'Project' },
	{ href: 'contact', src: messenger, label: 'Contact' },
	{ href: 'resume', src: resume, label: 'Resume' },
	{ href: 'mailto:vanityadav08@gmail.com', src: mail, label: 'Mail me' }
];

export default dockRoutes;
