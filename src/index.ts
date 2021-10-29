import { library, dom, icon } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import './styles.scss'
import columns from '../mockdata/columns_and_tasks.json';

const bars = icon(faBars).html.toString();

const getNav = (title: string, icon: string) =>
	/*html*/`<nav class="navbar p-1">
		<span class="text-start">${title}</span>
		<span class="ms-auto">${icon}</span>
	</nav>`;

const getColumns = (columns: any[], icon: string) => {
  let html = '';
  for (const column of columns) {
    html += getColumn(column, icon);
  }
  return html;
}

const getColumn = (column: { [key: string]: any }, icon: string) => {
  return /*html*/`<div class="col">
		<div class="bg-primary">
			${getNav(column.title, icon)}
			${getTasks(column.filteredTasks, icon)}
		</div>
	</div>`
};

const getTasks = (tasks: any[], icon: string) => {
  let html = '';
  let tasksHtml = '';

  for (const task of tasks) {
    tasksHtml += getTask(task, icon);
  }

  return /*html*/`<div class="tasks">
	  ${tasksHtml}
	</div>`
};

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

const getTask = (task: { [key: string]: any }, icon: string) =>
	/*html*/`<div class="task">
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
  const tagsHtml = [];
  for (const tag of tags) {
    tagsHtml.push(
			/*html*/`<span class="badge"
		  	style="color: ${tag.labelColor};
			         background-color: ${tag.backgroundColor}">
		  ${tag.identifier}
		</span>`);
  }
  return tagsHtml.join(' ');
}

document.getElementById('columns').innerHTML = getColumns(columns, bars);
