import { library, dom, icon } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';
import tasks from './100-tasks.json';

const bars = icon(faBars).html.toString();

const getNav = (title: string, icon: string) =>
	/*html*/`<nav class="navbar p-1">
		<span class="text-start">${title}</span>
		<span class="ms-auto">${icon}</span>
	</nav>`;

const getColumns = (tasks: any[], icon: string) => {
	let html = '';
	for (const task of tasks) {
		html += getColumn(task, icon);
	}
	return html;
}

const getColumn = (task: { [key: string]: any }, icon: string) =>
	/*html*/`<div class="col">
			<div class="bg-primary pb-2">
				${getNav("COLUMN", icon)}
				${getEntity(task, icon)}
		</div>
	</div>`;

const twoPad = (n: number) => {
	if (n < 10) {
		return '0' + n;
	}
	return n;
}

const formatDate = (ts: number) => {
	const date = new Date(ts);
	return `${twoPad(date.getMonth())}/${twoPad(date.getDay())}/`
		+ `${twoPad(date.getFullYear())} `
		+ `${twoPad(date.getHours())}:${twoPad(date.getMinutes())}`;
};

const getEntity = (task: { [key: string]: any }, icon: string) =>
	/*html*/`<div class="border mx-2 fs-6">
		${getNav(task.title, icon)}		
		<div class="border-top p-1">
			<span>${formatDate(task.deadline)}</span>
			<span class="badge bg-info float-end">Field X</span>
		</div>
		<div class="border-top p-1">
			${task.description}
		</div>
		<div class="border-top p-1">
			${getTags(task.tags)}
		</div>
	</div>`;

const getTags = (tags: any[]) => {
	const htmlTags = [];
	for (const tag of tags) {
		htmlTags.push(/*html*/`<span class="badge"
		  	style="color: ${tag.labelColor};
			       background-color: ${tag.backgroundColor}">
		  ${tag.identifier}
	</span>`);
	}
	return htmlTags.join(' ');
}

document.getElementById('columns').innerHTML = getColumns(tasks, bars);
