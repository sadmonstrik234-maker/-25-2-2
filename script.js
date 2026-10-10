const DEMO_NOW = Date.parse('2026-10-07T09:00:00Z');
const SLA_HOURS = { high: 4, medium: 8, low: 24 };

const tickets = [
  { id: 'tkt-001', title: 'Не работает VPN у отдела продаж', description: 'Сотрудники не могут подключиться к корпоративной сети из дома', category: 'network', status: 'inProgress', priority: 'high', requester: 'Орлов В.', assignee: 'Иванов А.', createdAt: '2026-10-07T08:10:00Z', slaDeadline: '2026-10-07T12:10:00Z', resolvedAt: null, progress: 40, history: [['2026-10-07T08:10:00Z', 'Заявка создана'], ['2026-10-07T08:25:00Z', 'Назначен исполнитель Иванов А.']], tags: ['vpn', 'массовая'] },
  { id: 'tkt-002', title: 'Сброс пароля в бухгалтерии', description: 'Сотрудница забыла пароль от учётной записи и не может войти в 1С', category: 'access', status: 'resolved', priority: 'medium', requester: 'Лебедева Т.', assignee: 'Петрова М.', createdAt: '2026-10-06T11:00:00Z', slaDeadline: '2026-10-06T19:00:00Z', resolvedAt: '2026-10-06T12:20:00Z', progress: 100, history: [['2026-10-06T11:00:00Z', 'Заявка создана'], ['2026-10-06T12:20:00Z', 'Пароль сброшен, заявка закрыта']], tags: ['пароль', '1с'] },
  { id: 'tkt-003', title: 'Не печатает принтер на 3 этаже', description: 'Принтер показывает ошибку подачи бумаги, очередь печати зависла', category: 'hardware', status: 'new', priority: 'medium', requester: 'Крылов С.', assignee: null, createdAt: '2026-10-07T07:30:00Z', slaDeadline: '2026-10-07T15:30:00Z', resolvedAt: null, progress: 0, history: [['2026-10-07T07:30:00Z', 'Заявка создана']], tags: ['принтер'] },
  { id: 'tkt-004', title: 'Недоступна CRM', description: 'Система отвечает ошибкой 502, менеджеры не могут вести клиентов', category: 'software', status: 'inProgress', priority: 'high', requester: 'Миронов Д.', assignee: 'Сидоров К.', createdAt: '2026-10-07T04:20:00Z', slaDeadline: '2026-10-07T08:20:00Z', resolvedAt: null, progress: 70, history: [['2026-10-07T04:20:00Z', 'Заявка создана'], ['2026-10-07T05:00:00Z', 'Передано разработчикам'], ['2026-10-07T07:30:00Z', 'Найдена причина, идёт исправление']], tags: ['crm', 'сбой'] },
  { id: 'tkt-005', title: 'Установка программ для дизайнеров', description: 'Нужно поставить графический редактор и шрифты на три рабочих места', category: 'software', status: 'waiting', priority: 'low', requester: 'Власова Д.', assignee: 'Козлова Е.', createdAt: '2026-10-06T12:00:00Z', slaDeadline: '2026-10-07T12:00:00Z', resolvedAt: null, progress: 50, history: [['2026-10-06T12:00:00Z', 'Заявка создана'], ['2026-10-06T15:00:00Z', 'Запрошены данные о лицензиях у заявителя']], tags: ['установка', 'лицензии'] },
  { id: 'tkt-006', title: 'Новый ноутбук для сотрудника', description: 'К выходу нового сотрудника нужно подготовить и выдать ноутбук', category: 'hardware', status: 'new', priority: 'low', requester: 'Егоров Р.', assignee: null, createdAt: '2026-10-07T06:00:00Z', slaDeadline: '2026-10-08T06:00:00Z', resolvedAt: null, progress: 0, history: [['2026-10-07T06:00:00Z', 'Заявка создана']], tags: ['онбординг'] },
  { id: 'tkt-007', title: 'Доступ к общей папке проекта', description: 'Нужны права на чтение и запись в папку «Проект Орион»', category: 'access', status: 'inProgress', priority: 'medium', requester: 'Захарова И.', assignee: 'Петрова М.', createdAt: '2026-10-07T07:15:00Z', slaDeadline: '2026-10-07T15:15:00Z', resolvedAt: null, progress: 60, history: [['2026-10-07T07:15:00Z', 'Заявка создана'], ['2026-10-07T08:00:00Z', 'Ожидается согласование руководителя']], tags: ['права', 'папка'] },
  { id: 'tkt-008', title: 'Сбой Wi-Fi в переговорной', description: 'Сеть пропадает во время видеозвонков', category: 'network', status: 'resolved', priority: 'medium', requester: 'Данилов О.', assignee: 'Иванов А.', createdAt: '2026-10-06T07:00:00Z', slaDeadline: '2026-10-06T15:00:00Z', resolvedAt: '2026-10-06T09:30:00Z', progress: 100, history: [['2026-10-06T07:00:00Z', 'Заявка создана'], ['2026-10-06T09:30:00Z', 'Заменена точка доступа']], tags: ['wi-fi'] },
  { id: 'tkt-009', title: 'Не приходит почта от внешних адресов', description: 'Письма от партнёров не доходят, в спаме их тоже нет', category: 'software', status: 'inProgress', priority: 'high', requester: 'Сафин К.', assignee: 'Козлова Е.', createdAt: '2026-10-07T05:40:00Z', slaDeadline: '2026-10-07T09:40:00Z', resolvedAt: null, progress: 55, history: [['2026-10-07T05:40:00Z', 'Заявка создана'], ['2026-10-07T07:10:00Z', 'Проверяются правила почтового шлюза']], tags: ['почта', 'шлюз'] },
  { id: 'tkt-010', title: 'Медленно работает компьютер', description: 'Рабочая станция сильно тормозит при открытии больших таблиц', category: 'hardware', status: 'waiting', priority: 'low', requester: 'Рогова Н.', assignee: 'Сидоров К.', createdAt: '2026-10-06T13:00:00Z', slaDeadline: '2026-10-07T13:00:00Z', resolvedAt: null, progress: 30, history: [['2026-10-06T13:00:00Z', 'Заявка создана'], ['2026-10-06T16:00:00Z', 'Ждём, когда сотрудник принесёт компьютер']], tags: ['производительность'] },
  { id: 'tkt-011', title: 'Блокировка учётной записи', description: 'После нескольких неверных вводов пароля запись заблокирована', category: 'access', status: 'resolved', priority: 'high', requester: 'Кузин А.', assignee: 'Козлова Е.', createdAt: '2026-10-07T06:30:00Z', slaDeadline: '2026-10-07T10:30:00Z', resolvedAt: '2026-10-07T07:10:00Z', progress: 100, history: [['2026-10-07T06:30:00Z', 'Заявка создана'], ['2026-10-07T07:10:00Z', 'Учётная запись разблокирована']], tags: ['блокировка'] },
  { id: 'tkt-012', title: 'Доступ в систему отчётов', description: 'Руководителю направления нужен доступ к дашбордам продаж', category: 'access', status: 'new', priority: 'high', requester: 'Титова О.', assignee: null, createdAt: '2026-10-07T08:45:00Z', slaDeadline: '2026-10-07T12:45:00Z', resolvedAt: null, progress: 0, history: [['2026-10-07T08:45:00Z', 'Заявка создана']], tags: ['отчёты', 'права'] },
  { id: 'tkt-013', title: 'Консультация по таблицам Excel', description: 'Нужна помощь с формулами и сводными таблицами', category: 'other', status: 'resolved', priority: 'low', requester: 'Нестеров Б.', assignee: 'Петрова М.', createdAt: '2026-10-05T08:00:00Z', slaDeadline: '2026-10-06T08:00:00Z', resolvedAt: '2026-10-06T10:00:00Z', progress: 100, history: [['2026-10-05T08:00:00Z', 'Заявка создана'], ['2026-10-06T10:00:00Z', 'Консультация проведена']], tags: ['обучение'] },
];

const escalations = [
  { id: 'esc-001', title: 'Просрочен срок SLA', description: 'Заявка по CRM не решена в установленный срок, бизнес-процессы остановлены', severity: 'critical', status: 'open', ticketId: 'tkt-004', createdAt: '2026-10-07T08:21:00Z', resolvedAt: null, assignee: 'Новиков Д.', tags: ['sla', 'просрочка'] },
  { id: 'esc-002', title: 'Срочная заявка без исполнителя', description: 'Заявка с высоким приоритетом не назначена никому уже 15 минут', severity: 'critical', status: 'open', ticketId: 'tkt-012', createdAt: '2026-10-07T08:55:00Z', resolvedAt: null, assignee: 'Новиков Д.', tags: ['назначение'] },
  { id: 'esc-003', title: 'Массовая проблема с VPN', description: 'За час поступило шесть однотипных обращений, нужна общая инцидент-группа', severity: 'critical', status: 'taken', ticketId: 'tkt-001', createdAt: '2026-10-07T08:30:00Z', resolvedAt: null, assignee: 'Иванов А.', tags: ['vpn', 'инцидент'] },
  { id: 'esc-004', title: 'Риск нарушения SLA', description: 'До окончания срока осталось менее часа, решение ещё не найдено', severity: 'warning', status: 'open', ticketId: 'tkt-009', createdAt: '2026-10-07T08:40:00Z', resolvedAt: null, assignee: 'Козлова Е.', tags: ['sla', 'риск'] },
  { id: 'esc-005', title: 'Просьба повысить приоритет', description: 'Заявитель просит ускорить решение, так как печать нужна для сдачи отчёта', severity: 'warning', status: 'open', ticketId: 'tkt-003', createdAt: '2026-10-07T08:10:00Z', resolvedAt: null, assignee: 'Сидоров К.', tags: ['приоритет'] },
  { id: 'esc-006', title: 'Передача на второй уровень', description: 'Первая линия не смогла решить вопрос, нужен специалист по почтовым серверам', severity: 'info', status: 'taken', ticketId: 'tkt-009', createdAt: '2026-10-07T07:20:00Z', resolvedAt: null, assignee: 'Петрова М.', tags: ['вторая линия'] },
  { id: 'esc-007', title: 'Долгое ожидание ответа заявителя', description: 'Сотрудник не отвечает больше суток, нужно решить, закрывать ли заявку', severity: 'info', status: 'taken', ticketId: 'tkt-010', createdAt: '2026-10-07T07:00:00Z', resolvedAt: null, assignee: 'Сидоров К.', tags: ['ожидание'] },
  { id: 'esc-008', title: 'Нарушен SLA по решённой заявке', description: 'Заявка решена позже срока, нужен разбор причин', severity: 'warning', status: 'closed', ticketId: 'tkt-013', createdAt: '2026-10-06T10:30:00Z', resolvedAt: '2026-10-06T14:00:00Z', assignee: 'Новиков Д.', tags: ['sla', 'разбор'] },
  { id: 'esc-009', title: 'Повторное обращение', description: 'Проблема с Wi-Fi повторилась через час после закрытия', severity: 'info', status: 'closed', ticketId: 'tkt-008', createdAt: '2026-10-06T10:30:00Z', resolvedAt: '2026-10-06T11:15:00Z', assignee: 'Иванов А.', tags: ['повтор'] },
];

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const validators = {
  title(value, context) {
    const text = value.trim();
    if (!text) return 'Укажите тему заявки';
    if (text.length < 3) return 'Минимум 3 символа';
    if (text.length > 80) return 'Максимум 80 символов';
    if (context.titles.includes(text.toLowerCase())) return 'Заявка с такой темой уже есть';
    return '';
  },
  category: (value) => (value ? '' : 'Выберите категорию'),
  priority: (value) => (value ? '' : 'Выберите приоритет'),
  email(value) {
    const text = value.trim();
    if (!text) return 'Укажите email заявителя';
    if (text.length > 60) return 'Максимум 60 символов';
    if (!EMAIL_PATTERN.test(text)) return 'Неверный формат email, пример: name@company.com';
    return '';
  },
  description: (value) => (value.length > 160 ? 'Максимум 160 символов' : ''),
};

const dateFormatter = new Intl.DateTimeFormat('ru-RU', { dateStyle: 'short', timeStyle: 'short', timeZone: 'Europe/Moscow' });

const TICKET_STATUS = { new: 'Новая', inProgress: 'В работе', waiting: 'Ждёт ответа', resolved: 'Решена' };
const ESCALATION_STATUS = { open: 'Открыта', taken: 'В работе', closed: 'Закрыта' };
const PRIORITY = { high: 'Высокий', medium: 'Средний', low: 'Низкий' };
const PRIORITY_RANK = { high: 3, medium: 2, low: 1 };
const CATEGORY_LABELS = { access: 'Доступы', hardware: 'Оборудование', software: 'Программы', network: 'Сеть', other: 'Прочее' };
const SEVERITY_PRIORITY = { critical: 'high', warning: 'medium', info: 'low' };
const TABLE_COLUMNS = [['title', 'Тема'], ['category', 'Категория'], ['assignee', 'Исполнитель'], ['priority', 'Приоритет'], ['status', 'Статус'], ['slaDeadline', 'Срок SLA']];
const SLA_THRESHOLDS = { low: 60, high: 85, optimum: 0 };
const PROGRESS_THRESHOLDS = { low: 30, high: 70, optimum: 100 };

const isOpenTicket = (ticket) => ticket.status !== 'resolved';
const assigneeName = (ticket) => ticket.assignee ?? 'Не назначен';
const slaPercent = (ticket) => {
  const start = Date.parse(ticket.createdAt);
  const end = Date.parse(ticket.slaDeadline);
  const stop = ticket.resolvedAt ? Date.parse(ticket.resolvedAt) : DEMO_NOW;
  return Math.max(0, Math.min(100, Math.round(((stop - start) / (end - start)) * 100)));
};
const isBreached = (ticket) => (ticket.resolvedAt ? Date.parse(ticket.resolvedAt) : DEMO_NOW) > Date.parse(ticket.slaDeadline);
const slaVerdict = (ticket) => {
  if (ticket.resolvedAt) return isBreached(ticket) ? 'решена с нарушением срока' : 'решена в срок';
  return isBreached(ticket) ? 'срок нарушен' : 'идёт в срок';
};

const formatDateTime = (iso) => `${dateFormatter.format(new Date(iso))} МСК`;

const makeElement = (tag, { text, cls, attrs = {} } = {}, children = []) => {
  const node = document.createElement(tag);
  if (cls) node.className = cls;
  if (text !== undefined) node.textContent = text;
  for (const [name, value] of Object.entries(attrs)) node.setAttribute(name, value);
  node.append(...children);
  return node;
};

const renderTime = (iso) => makeElement('time', { text: formatDateTime(iso), attrs: { datetime: iso } });
const renderBadge = (kind, label) => makeElement('span', { text: label, cls: `badge badge--${kind}` });
const renderPriority = (level) =>
  makeElement('span', { text: PRIORITY[level], cls: `priority priority--${level}`, attrs: { title: `Приоритет: ${PRIORITY[level].toLowerCase()}` } });

const renderMeter = (label, value, { low, high, optimum }) =>
  makeElement('p', { cls: 'meter' }, [
    makeElement('span', { text: label, cls: 'meter__label' }),
    makeElement('meter', { attrs: { min: 0, max: 100, low, high, optimum, value, 'aria-label': `${label} ${value}%` } }),
    makeElement('span', { text: `${value}%`, cls: 'meter__value' }),
  ]);

const renderTags = (tags) => makeElement('ul', { cls: 'tags' }, tags.map((tag) => makeElement('li', { text: tag })));
const renderFields = (pairs) =>
  makeElement('dl', { cls: 'fields' }, pairs.flatMap(([name, value]) => [makeElement('dt', { text: name }), makeElement('dd', {}, [value])]));

const renderTextList = (items, emptyText) =>
  items.length
    ? makeElement('ul', { cls: 'related' }, items.map((item) => makeElement('li', { text: item })))
    : makeElement('p', { text: emptyText, cls: 'card__desc' });

const renderSummary = (ticketList, escalationList) => {
  const open = ticketList.filter(isOpenTicket);
  const items = [
    ['Открытых заявок', open.length, 'info'],
    ['Просрочено по SLA', open.filter(isBreached).length, 'danger'],
    ['Без исполнителя', open.filter((t) => !t.assignee).length, 'warning'],
    ['Открытых эскалаций', escalationList.filter((e) => e.status === 'open').length, 'danger'],
  ];
  return makeElement('ul', { cls: 'summary' }, items.map(([label, value, kind]) =>
    makeElement('li', { cls: `summary__item summary__item--${kind}` }, [
      makeElement('strong', { text: String(value), cls: 'summary__value', attrs: { 'data-count': value } }),
      makeElement('span', { text: label }),
    ])));
};

const renderTicketCard = (ticket, index = 0) =>
  makeElement('article', { cls: `card card--${ticket.status}${isOpenTicket(ticket) && isBreached(ticket) ? ' card--overdue' : ''}`, attrs: { 'data-kind': 'ticket', 'data-id': ticket.id, style: `--i:${index}` } }, [
    makeElement('header', { cls: 'card__head' }, [
      makeElement('p', { text: ticket.id, cls: 'card__id' }),
      makeElement('h3', {}, [makeElement('button', { text: ticket.title, cls: 'link-btn', attrs: { type: 'button' } })]),
      renderBadge(ticket.status, TICKET_STATUS[ticket.status]),
    ]),
    makeElement('p', { text: ticket.description, cls: 'card__desc' }),
    renderFields([['Категория', CATEGORY_LABELS[ticket.category]], ['Заявитель', ticket.requester], ['Исполнитель', assigneeName(ticket)]]),
    renderMeter('SLA', slaPercent(ticket), SLA_THRESHOLDS),
    renderMeter('Выполнено', ticket.progress, PROGRESS_THRESHOLDS),
    makeElement('footer', { cls: 'card__meta' }, [
      makeElement('span', {}, ['Срок: ', renderTime(ticket.slaDeadline)]),
      renderPriority(ticket.priority),
      renderTags(ticket.tags),
    ]),
  ]);

const renderTicketCards = (ticketList) =>
  makeElement('div', { cls: 'cards' }, ticketList.map((ticket, index) => renderTicketCard(ticket, index)));

const tableCell = (label, content) => makeElement('td', { attrs: { 'data-label': label } }, [content]);

const renderTicketsTable = (ticketList, sort) => {
  const ariaSort = (key) => (sort.key === key ? (sort.dir === 'asc' ? 'ascending' : 'descending') : 'none');
  const table = makeElement('table', { cls: 'table' }, [
    makeElement('caption', { text: 'Реестр заявок' }),
    makeElement('thead', {}, [makeElement('tr', {}, TABLE_COLUMNS.map(([key, label]) =>
      makeElement('th', { attrs: { scope: 'col', 'aria-sort': ariaSort(key) } }, [
        makeElement('button', { text: label, cls: 'sort-btn', attrs: { type: 'button', 'data-sort': key } }),
      ])))]),
    makeElement('tbody', {}, ticketList.map((ticket) =>
      makeElement('tr', { attrs: { 'data-kind': 'ticket', 'data-id': ticket.id } }, [
        makeElement('th', { attrs: { scope: 'row' } }, [makeElement('button', { text: ticket.title, cls: 'link-btn', attrs: { type: 'button' } })]),
        tableCell('Категория', CATEGORY_LABELS[ticket.category]),
        tableCell('Исполнитель', assigneeName(ticket)),
        tableCell('Приоритет', renderPriority(ticket.priority)),
        tableCell('Статус', renderBadge(ticket.status, TICKET_STATUS[ticket.status])),
        tableCell('Срок SLA', renderTime(ticket.slaDeadline)),
      ]))),
  ]);
  return makeElement('div', { cls: 'table-wrap' }, [table]);
};

const renderEscalationCard = (escalation, ticket, index = 0) =>
  makeElement('article', { cls: `card alert alert--${escalation.severity}`, attrs: { 'data-kind': 'escalation', 'data-id': escalation.id, style: `--i:${index}` } }, [
    makeElement('header', { cls: 'card__head' }, [
      makeElement('p', { text: escalation.id, cls: 'card__id' }),
      makeElement('h3', {}, [makeElement('button', { text: escalation.title, cls: 'link-btn', attrs: { type: 'button' } })]),
      renderBadge(escalation.status, ESCALATION_STATUS[escalation.status]),
    ]),
    makeElement('p', { text: escalation.description, cls: 'card__desc' }),
    renderFields([['Заявка', ticket ? ticket.title : 'неизвестно']]),
    makeElement('footer', { cls: 'card__meta' }, [
      renderTime(escalation.createdAt),
      makeElement('span', { text: `Ответственный: ${escalation.assignee}` }),
      renderPriority(SEVERITY_PRIORITY[escalation.severity]),
      renderTags(escalation.tags),
    ]),
  ]);

const renderEscalationList = (escalationList, ticketList) =>
  makeElement('ol', { cls: 'alerts' }, escalationList.map((escalation, index) =>
    makeElement('li', {}, [renderEscalationCard(escalation, ticketList.find((t) => t.id === escalation.ticketId), index)])));

const renderTicketDetails = (ticket, relatedEscalations) =>
  makeElement('section', { cls: 'details' }, [
    makeElement('p', { text: ticket.description }),
    renderFields([
      ['Статус', renderBadge(ticket.status, TICKET_STATUS[ticket.status])],
      ['Приоритет', renderPriority(ticket.priority)],
      ['Категория', CATEGORY_LABELS[ticket.category]],
      ['Заявитель', ticket.requester],
      ['Исполнитель', assigneeName(ticket)],
      ['Создана', renderTime(ticket.createdAt)],
      ['Срок SLA', renderTime(ticket.slaDeadline)],
      ['Решена', ticket.resolvedAt ? renderTime(ticket.resolvedAt) : 'ещё не решена'],
      ['Состояние SLA', slaVerdict(ticket)],
    ]),
    renderMeter('SLA', slaPercent(ticket), SLA_THRESHOLDS),
    renderMeter('Выполнено', ticket.progress, PROGRESS_THRESHOLDS),
    makeElement('h3', { text: 'Ход работы' }),
    renderTextList(ticket.history.map(([time, text]) => `${formatDateTime(time)}: ${text}`), 'Действий пока нет.'),
    makeElement('h3', { text: 'Эскалации' }),
    relatedEscalations.length
      ? makeElement('ul', { cls: 'related' }, relatedEscalations.map((item) => makeElement('li', {}, [`${item.title} `, renderBadge(item.status, ESCALATION_STATUS[item.status])])))
      : makeElement('p', { text: 'Эскалаций по этой заявке нет.', cls: 'card__desc' }),
    renderTags(ticket.tags),
  ]);

const renderEscalationDetails = (escalation, ticket) =>
  makeElement('section', { cls: 'details' }, [
    makeElement('p', { text: escalation.description }),
    renderFields([
      ['Статус', renderBadge(escalation.status, ESCALATION_STATUS[escalation.status])],
      ['Приоритет', renderPriority(SEVERITY_PRIORITY[escalation.severity])],
      ['Заявка', ticket ? `${ticket.title} (${ticket.id})` : 'неизвестно'],
      ['Ответственный', escalation.assignee],
      ['Создана', renderTime(escalation.createdAt)],
      ['Закрыта', escalation.resolvedAt ? renderTime(escalation.resolvedAt) : 'ещё не закрыта'],
    ]),
    renderTags(escalation.tags),
  ]);

const SVG_NAMESPACE = 'http://www.w3.org/2000/svg';
const makeSvgElement = (tag, attrs) => {
  const node = document.createElementNS(SVG_NAMESPACE, tag);
  for (const [name, value] of Object.entries(attrs)) node.setAttribute(name, value);
  return node;
};

const renderEmptyIcon = () => {
  const svg = makeSvgElement('svg', { viewBox: '0 0 64 64', fill: 'none', stroke: 'currentColor', 'stroke-width': 3, 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'aria-hidden': 'true', focusable: 'false' });
  svg.append(
    makeSvgElement('path', { d: 'M8 20a4 4 0 0 1 4-4h40a4 4 0 0 1 4 4v6a6 6 0 0 0 0 12v6a4 4 0 0 1-4 4H12a4 4 0 0 1-4-4v-6a6 6 0 0 0 0-12z' }),
    makeSvgElement('path', { d: 'M24 24v16M24 28h.01M24 36h.01' }),
  );
  return svg;
};

const renderEmpty = (title, hint) =>
  makeElement('div', { cls: 'empty' }, [renderEmptyIcon(), makeElement('p', { text: title, cls: 'empty__title' }), ...(hint ? [makeElement('p', { text: hint, cls: 'empty__hint' })] : [])]);

const skeletonBar = (width, height = 14) => makeElement('span', { cls: 'skeleton', attrs: { style: `width:${width};height:${height}px` } });
const renderSkeletonCard = () => makeElement('article', { cls: 'card card--skeleton' }, [skeletonBar('35%'), skeletonBar('70%', 22), skeletonBar('100%'), skeletonBar('100%'), skeletonBar('55%')]);

const renderSkeleton = (kind, count = 6) => {
  const cards = Array.from({ length: count }, renderSkeletonCard);
  const body = kind === 'summary'
    ? makeElement('ul', { cls: 'summary', attrs: { 'aria-hidden': 'true' } }, Array.from({ length: 4 }, () => makeElement('li', { cls: 'summary__item' }, [skeletonBar('60%', 32), skeletonBar('80%')])))
    : kind === 'list'
      ? makeElement('ol', { cls: 'alerts', attrs: { 'aria-hidden': 'true' } }, cards.map((card) => makeElement('li', {}, [card])))
      : makeElement('div', { cls: 'cards', attrs: { 'aria-hidden': 'true' } }, cards);
  return makeElement('div', {}, [makeElement('p', { text: 'Загрузка данных…', cls: 'sr-only' }), body]);
};

const renderPageItem = (label, page, { current = false, disabled = false, name } = {}) =>
  makeElement('li', {}, [disabled
    ? makeElement('span', { text: label, cls: 'page-link is-disabled', attrs: { 'aria-disabled': 'true' } })
    : makeElement('a', { text: label, cls: 'page-link', attrs: { href: `?page=${page}`, 'data-page': page, ...(name ? { 'aria-label': name } : {}), ...(current ? { 'aria-current': 'page' } : {}) } })]);

const renderPagination = (page, pages) =>
  makeElement('ul', { cls: 'pagination' }, [
    renderPageItem('Назад', page - 1, { disabled: page <= 1 }),
    ...Array.from({ length: pages }, (_, index) => renderPageItem(String(index + 1), index + 1, { current: index + 1 === page, name: `Страница ${index + 1}` })),
    renderPageItem('Вперёд', page + 1, { disabled: page >= pages }),
  ]);

const renderToast = (message, kind = 'info') =>
  makeElement('div', { cls: `toast toast--${kind}` }, [
    makeElement('p', { text: message, cls: 'toast__text' }),
    makeElement('button', { text: '\u00d7', cls: 'btn btn--ghost btn--icon toast__close', attrs: { type: 'button', 'aria-label': 'Закрыть уведомление' } }),
  ]);

const root = document.documentElement;
const THEMES = ['light', 'dark', 'contrast'];
const systemDarkMode = window.matchMedia('(prefers-color-scheme: dark)');
const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FOCUSABLE_SELECTOR = 'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

const storage = {
  get: (key) => { try { return localStorage.getItem(key); } catch { return null; } },
  set: (key, value) => { try { localStorage.setItem(key, value); } catch {} },
  remove: (key) => { try { localStorage.removeItem(key); } catch {} },
};

const hexToRgb = (hex) => {
  const match = /^#?([0-9a-f]{6})$/i.exec(hex);
  if (!match) return null;
  const number = parseInt(match[1], 16);
  return [(number >> 16) & 255, (number >> 8) & 255, number & 255];
};
const rgbToHex = ([r, g, b]) => `#${[r, g, b].map((channel) => channel.toString(16).padStart(2, '0')).join('')}`;
const relativeLuminance = ([r, g, b]) => {
  const linear = (channel) => { channel /= 255; return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4; };
  return 0.2126 * linear(r) + 0.7152 * linear(g) + 0.0722 * linear(b);
};
const textColorForAccent = (rgb) => (relativeLuminance(rgb) > 0.179 ? '#0b1320' : '#ffffff');

let themeTransitionTimer;
function withThemeTransition(change) {
  if (prefersReducedMotion()) { change(); return; }
  root.classList.add('theme-transition');
  change();
  clearTimeout(themeTransitionTimer);
  themeTransitionTimer = setTimeout(() => root.classList.remove('theme-transition'), 400);
}

const getSavedTheme = () => { const theme = storage.get('theme'); return THEMES.includes(theme) ? theme : 'auto'; };
const resolveTheme = (choice) => (choice === 'auto' ? (systemDarkMode.matches ? 'dark' : 'light') : choice);

function setTheme(choice) {
  if (choice === 'auto') storage.remove('theme'); else storage.set('theme', choice);
  withThemeTransition(() => root.setAttribute('data-theme', resolveTheme(choice)));
}

const readAccentFromCss = () => {
  const styles = getComputedStyle(root);
  return ['--accent-r', '--accent-g', '--accent-b'].map((name) => Number(styles.getPropertyValue(name)));
};

function setAccent(hex) {
  const rgb = hexToRgb(hex);
  if (!rgb) return;
  const [r, g, b] = rgb;
  const textColor = textColorForAccent(rgb);
  withThemeTransition(() => {
    root.style.setProperty('--accent-r', r);
    root.style.setProperty('--accent-g', g);
    root.style.setProperty('--accent-b', b);
    root.style.setProperty('--on-accent', textColor);
  });
  storage.set('accent', JSON.stringify({ hex, r, g, b, on: textColor }));
}

function resetAccent() {
  withThemeTransition(() => ['--accent-r', '--accent-g', '--accent-b', '--on-accent'].forEach((name) => root.style.removeProperty(name)));
  storage.remove('accent');
}

function initTheme() {
  const themeSelect = document.getElementById('theme-select');
  const accentPicker = document.getElementById('accent');
  const accentHexOutput = document.getElementById('accent-hex');
  const accentResetButton = document.getElementById('accent-reset');
  const themeMenu = document.getElementById('theme-menu');

  const syncAccentPicker = () => {
    const customAccent = storage.get('accent');
    const hex = customAccent ? JSON.parse(customAccent).hex : rgbToHex(readAccentFromCss());
    accentPicker.value = hex;
    accentHexOutput.textContent = hex.toUpperCase();
    accentResetButton.disabled = !customAccent;
  };

  themeSelect.value = getSavedTheme();
  syncAccentPicker();

  themeSelect.addEventListener('change', () => { setTheme(themeSelect.value); syncAccentPicker(); });
  accentPicker.addEventListener('input', () => { setAccent(accentPicker.value); syncAccentPicker(); });
  accentResetButton.addEventListener('click', () => { resetAccent(); syncAccentPicker(); accentPicker.focus(); });

  systemDarkMode.addEventListener('change', () => {
    if (getSavedTheme() !== 'auto') return;
    withThemeTransition(() => root.setAttribute('data-theme', resolveTheme('auto')));
    syncAccentPicker();
  });

  document.addEventListener('click', (event) => { if (themeMenu.open && !themeMenu.contains(event.target)) themeMenu.open = false; });
  themeMenu.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && themeMenu.open) { themeMenu.open = false; themeMenu.querySelector('summary').focus(); }
  });
}

const debounce = (callback, delay) => {
  let timeoutId;
  return (...args) => { clearTimeout(timeoutId); timeoutId = setTimeout(() => callback(...args), delay); };
};

function initTabs(tablist, onSelect) {
  const tabs = [...tablist.querySelectorAll('[role="tab"]')];
  const selectTab = (selectedTab, focus = false) => {
    tabs.forEach((tab) => {
      const isActive = tab === selectedTab;
      tab.setAttribute('aria-selected', String(isActive));
      tab.tabIndex = isActive ? 0 : -1;
    });
    if (focus) selectedTab.focus();
    onSelect(selectedTab);
  };
  tablist.addEventListener('click', (event) => {
    const tab = event.target.closest('[role="tab"]');
    if (tab) selectTab(tab);
  });
  tablist.addEventListener('keydown', (event) => {
    const index = tabs.indexOf(document.activeElement);
    if (index < 0) return;
    const nextIndex = { ArrowRight: (index + 1) % tabs.length, ArrowLeft: (index - 1 + tabs.length) % tabs.length, Home: 0, End: tabs.length - 1 }[event.key];
    if (nextIndex === undefined) return;
    event.preventDefault();
    selectTab(tabs[nextIndex], true);
  });
  selectTab(tabs.find((tab) => tab.getAttribute('aria-selected') === 'true') ?? tabs[0]);
}

function createToastManager(container, { liveRegion, maxToasts = 3, lifetime = 4500 } = {}) {
  const supportsPopover = typeof container.showPopover === 'function';
  const removeToast = (toastNode) => {
    if (!toastNode.isConnected) return;
    toastNode.classList.add('is-leaving');
    setTimeout(() => {
      toastNode.remove();
      if (!container.children.length && supportsPopover) { try { container.hidePopover(); } catch {} }
    }, prefersReducedMotion() ? 0 : 200);
  };
  container.addEventListener('click', (event) => {
    const closeButton = event.target.closest('.toast__close');
    if (closeButton) removeToast(closeButton.closest('.toast'));
  });
  return (message, kind = 'info') => {
    while (container.children.length >= maxToasts) container.firstElementChild.remove();
    const toastNode = renderToast(message, kind);
    container.append(toastNode);
    if (supportsPopover) {
      try { if (container.matches(':popover-open')) container.hidePopover(); container.showPopover(); } catch {}
    }
    if (liveRegion) { liveRegion.textContent = ''; setTimeout(() => { liveRegion.textContent = message; }, 50); }
    setTimeout(() => removeToast(toastNode), lifetime);
  };
}

function createDialogController(dialog, { onClose } = {}) {
  let openerButton = null;
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog || event.target.closest('[data-close]')) dialog.close();
  });
  dialog.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') { event.preventDefault(); dialog.close(); return; }
    if (event.key !== 'Tab') return;
    const focusable = [...dialog.querySelectorAll(FOCUSABLE_SELECTOR)];
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  dialog.addEventListener('close', () => {
    root.classList.remove('scroll-locked');
    openerButton?.focus();
    onClose?.();
  });
  return {
    open(trigger) {
      openerButton = trigger ?? document.activeElement;
      root.classList.add('scroll-locked');
      dialog.showModal();
    },
    close: () => dialog.close(),
  };
}

function animateCounters(container, duration = 800) {
  container.querySelectorAll('[data-count]').forEach((node) => {
    const target = Number(node.dataset.count);
    if (prefersReducedMotion() || target === 0) { node.textContent = String(target); return; }
    const startTime = performance.now();
    node.textContent = '0';
    const step = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      node.textContent = String(Math.round(target * (1 - (1 - progress) ** 3)));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  });
}

function initTicketForm(form, { getContext, onSubmit }) {
  const fields = [...form.querySelectorAll('[data-validate]')];
  const counter = form.querySelector('#f-description-count');
  const validationTimers = new Map();

  const updateCounter = () => { counter.textContent = `${form.elements.description.value.length} / 160`; };

  function showValidationResult(input, message) {
    const errorNode = form.querySelector(`#${input.id}-error`);
    errorNode.textContent = message;
    errorNode.hidden = !message;
    input.setAttribute('aria-invalid', String(Boolean(message)));
    input.classList.toggle('is-invalid', Boolean(message));
  }

  function validateField(input) {
    const message = validators[input.name](input.value, getContext());
    showValidationResult(input, message);
    return !message;
  }

  form.addEventListener('input', (event) => {
    const input = event.target.closest('[data-validate]');
    if (!input) return;
    if (input.name === 'description') updateCounter();
    clearTimeout(validationTimers.get(input));
    validationTimers.set(input, setTimeout(() => validateField(input), 350));
  });

  form.addEventListener('focusout', (event) => {
    const input = event.target.closest('[data-validate]');
    if (!input || event.relatedTarget?.closest?.('[data-close]')) return;
    clearTimeout(validationTimers.get(input));
    validateField(input);
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const invalidFields = fields.filter((field) => !validateField(field));
    if (invalidFields.length) { invalidFields[0].focus(); return; }
    onSubmit(Object.fromEntries(new FormData(form)));
  });

  return {
    reset() {
      validationTimers.forEach((timerId) => clearTimeout(timerId));
      form.reset();
      fields.forEach((field) => showValidationResult(field, ''));
      updateCounter();
    },
  };
}

const byId = (id) => document.getElementById(id);
const PAGE_SIZE = 6;
const DEFAULT_SORT = { key: 'createdAt', dir: 'desc' };
const newestFirst = (a, b) => b.createdAt.localeCompare(a.createdAt);

function getPageFromUrl() {
  const page = Number(new URLSearchParams(location.search).get('page'));
  return Number.isInteger(page) && page > 0 ? page : 1;
}

const state = {
  query: '',
  status: 'all',
  category: 'all',
  priorities: new Set(['high', 'medium', 'low']),
  view: 'cards',
  sort: { ...DEFAULT_SORT },
  page: getPageFromUrl(),
  loaded: false,
};
let lastRenderKey = '';
let activeTab = null;

function syncPageInUrl(historyMethod) {
  const url = new URL(location.href);
  if (state.page > 1) url.searchParams.set('page', state.page); else url.searchParams.delete('page');
  if (url.href === location.href) return;
  try { history[historyMethod]({ page: state.page }, '', url); } catch {}
}

const showToast = createToastManager(byId('toasts'), { liveRegion: byId('live') });

function getSortValue(ticket, key) {
  if (key === 'priority') return PRIORITY_RANK[ticket.priority];
  if (key === 'category') return CATEGORY_LABELS[ticket.category];
  if (key === 'assignee') return assigneeName(ticket);
  if (key === 'status') return TICKET_STATUS[ticket.status];
  return ticket[key];
}

function getVisibleTickets() {
  const query = state.query;
  return tickets
    .filter((ticket) => state.status === 'all' || ticket.status === state.status)
    .filter((ticket) => state.category === 'all' || ticket.category === state.category)
    .filter((ticket) => state.priorities.has(ticket.priority))
    .filter((ticket) => !query || [ticket.id, ticket.title, ticket.description, ticket.requester, assigneeName(ticket), CATEGORY_LABELS[ticket.category], ...ticket.tags].some((value) => value.toLowerCase().includes(query)))
    .sort((a, b) => {
      const first = getSortValue(a, state.sort.key), second = getSortValue(b, state.sort.key);
      const result = typeof first === 'number' ? first - second : String(first).localeCompare(String(second), 'ru', { numeric: true });
      return state.sort.dir === 'asc' ? result : -result;
    });
}

function renderTickets({ focusSort, focusPage, force } = {}) {
  if (!state.loaded) return;
  const list = getVisibleTickets();
  const pages = Math.max(1, Math.ceil(list.length / PAGE_SIZE));
  state.page = Math.min(Math.max(1, state.page), pages);
  const pageItems = list.slice((state.page - 1) * PAGE_SIZE, state.page * PAGE_SIZE);

  byId('result-count').textContent = list.length
    ? `Найдено: ${list.length} из ${tickets.length}. Страница ${state.page} из ${pages}`
    : 'Ничего не найдено';
  byId('reset').disabled = !(state.query || state.status !== 'all' || state.category !== 'all' || state.priorities.size !== 3 || state.view !== 'cards');

  const renderKey = [state.view, state.sort.key, state.sort.dir, state.page, pages, pageItems.map((t) => t.id + t.status).join()].join('|');
  if (force || renderKey !== lastRenderKey) {
    lastRenderKey = renderKey;
    const view = !pageItems.length ? renderEmpty('Заявки не найдены', 'Измените запрос или сбросьте фильтры.')
      : state.view === 'cards' ? renderTicketCards(pageItems) : renderTicketsTable(pageItems, state.sort);
    byId('ticket-view').replaceChildren(view);
    byId('pagination').hidden = pages <= 1;
    byId('pagination').replaceChildren(...(pages > 1 ? [renderPagination(state.page, pages)] : []));
  }
  if (focusSort) byId('ticket-view').querySelector(`[data-sort="${focusSort}"]`)?.focus();
  if (focusPage) byId('pagination').querySelector('[aria-current="page"]')?.focus({ preventScroll: true });
}

function readFilters() {
  const form = byId('filters');
  state.query = byId('q').value.trim().toLowerCase();
  state.status = byId('status').value;
  state.category = byId('category').value;
  state.priorities = new Set([...form.querySelectorAll('input[name="priority"]:checked')].map((input) => input.value));
  state.view = form.querySelector('input[name="view"]:checked').value;
}

function applyFilters() {
  readFilters();
  state.page = 1;
  syncPageInUrl('replaceState');
  renderTickets();
}
const applyFiltersDebounced = debounce(applyFilters, 200);

byId('filters').addEventListener('input', (event) => (event.target.id === 'q' ? applyFiltersDebounced() : applyFilters()));
byId('filters').addEventListener('reset', () => {
  state.sort = { ...DEFAULT_SORT };
  setTimeout(() => { applyFilters(); byId('q').focus(); }, 0);
});
byId('filters').addEventListener('submit', (event) => event.preventDefault());

byId('ticket-view').addEventListener('click', (event) => {
  const sortButton = event.target.closest('[data-sort]');
  if (!sortButton) return;
  const key = sortButton.dataset.sort;
  state.sort = { key, dir: state.sort.key === key && state.sort.dir === 'asc' ? 'desc' : 'asc' };
  renderTickets({ focusSort: key });
});

byId('pagination').addEventListener('click', (event) => {
  const link = event.target.closest('a[data-page]');
  if (!link) return;
  event.preventDefault();
  state.page = Number(link.dataset.page);
  syncPageInUrl('pushState');
  renderTickets({ focusPage: true });
  byId('tickets').scrollIntoView({ block: 'start' });
});
window.addEventListener('popstate', () => { state.page = getPageFromUrl(); renderTickets(); });

const countEscalations = (status) => (status === 'all' ? escalations.length : escalations.filter((item) => item.status === status).length);

function renderEscalationTab() {
  if (!state.loaded || !activeTab) return;
  const status = activeTab.dataset.status;
  const list = escalations.filter((item) => status === 'all' || item.status === status).sort(newestFirst);
  const panel = byId('tabpanel');
  panel.setAttribute('aria-labelledby', activeTab.id);
  panel.replaceChildren(list.length ? renderEscalationList(list, tickets) : renderEmpty('Эскалаций нет', 'В этой категории пока ничего не найдено.'));
}

initTabs(byId('tablist'), (tab) => { activeTab = tab; renderEscalationTab(); });

const detailDialog = createDialogController(byId('modal'));
let openedItem = null;

function openDetails(kind, id, trigger) {
  const body = byId('modal-body');
  if (kind === 'ticket') {
    const ticket = tickets.find((item) => item.id === id);
    byId('modal-title').textContent = ticket.title;
    body.replaceChildren(renderTicketDetails(ticket, escalations.filter((e) => e.ticketId === id)));
  } else {
    const escalation = escalations.find((item) => item.id === id);
    byId('modal-title').textContent = escalation.title;
    body.replaceChildren(renderEscalationDetails(escalation, tickets.find((t) => t.id === escalation.ticketId)));
  }
  openedItem = { id };
  detailDialog.open(trigger);
}

document.addEventListener('click', (event) => {
  if (event.target.closest('dialog')) return;
  const item = event.target.closest('[data-kind]');
  if (item && !item.classList.contains('card--skeleton')) openDetails(item.dataset.kind, item.dataset.id, item.querySelector('.link-btn'));
});

byId('modal-copy').addEventListener('click', async () => {
  try { await navigator.clipboard.writeText(openedItem.id); showToast(`ID ${openedItem.id} скопирован`, 'success'); }
  catch { showToast('Не удалось скопировать ID', 'error'); }
});

const formDialog = createDialogController(byId('form-modal'), { onClose: () => ticketForm.reset() });
const ticketForm = initTicketForm(byId('ticket-form'), {
  getContext: () => ({ titles: tickets.map((t) => t.title.toLowerCase()) }),
  onSubmit: addTicket,
});
byId('add-ticket').addEventListener('click', (event) => formDialog.open(event.currentTarget));

function addTicket(data) {
  const nextNumber = Math.max(...tickets.map((t) => Number(t.id.slice(4)))) + 1;
  const id = `tkt-${String(nextNumber).padStart(3, '0')}`;
  const title = data.title.trim();
  const categoryLabel = CATEGORY_LABELS[data.category];
  const createdAt = new Date(DEMO_NOW).toISOString();
  tickets.push({
    id, title,
    description: data.description.trim() || `Новая заявка (${categoryLabel.toLowerCase()})`,
    category: data.category, status: 'new', priority: data.priority,
    requester: data.email.trim(), assignee: null,
    createdAt, slaDeadline: new Date(DEMO_NOW + SLA_HOURS[data.priority] * 3600000).toISOString(),
    resolvedAt: null, progress: 0,
    history: [[createdAt, 'Заявка создана']],
    tags: ['новая', categoryLabel.toLowerCase()],
  });
  formDialog.close();
  const index = getVisibleTickets().findIndex((t) => t.id === id);
  if (index >= 0) { state.page = Math.floor(index / PAGE_SIZE) + 1; syncPageInUrl('pushState'); }
  showSummary();
  renderTickets({ force: true });
  showToast(`Заявка «${title}» создана, срок решения: ${SLA_HOURS[data.priority]} ч`, 'success');
}

const BUSY_BLOCKS = ['summary', 'ticket-view', 'escalation-panel', 'tabpanel'];

function showSummary() {
  byId('summary').replaceChildren(renderSummary(tickets, escalations));
  animateCounters(byId('summary'));
}

function showSkeletons() {
  BUSY_BLOCKS.forEach((id) => byId(id).setAttribute('aria-busy', 'true'));
  byId('summary').replaceChildren(renderSkeleton('summary'));
  byId('ticket-view').replaceChildren(renderSkeleton('cards'));
  byId('escalation-panel').replaceChildren(renderSkeleton('list', 3));
  byId('tabpanel').replaceChildren(renderSkeleton('list', 3));
}

function finishLoading() {
  state.loaded = true;
  showSummary();
  byId('escalation-panel').replaceChildren(renderEscalationList(escalations.filter((e) => e.status === 'open').sort(newestFirst), tickets));
  document.querySelectorAll('.tab').forEach((tab) => { tab.querySelector('.tab__count').textContent = countEscalations(tab.dataset.status); });
  renderEscalationTab();
  renderTickets({ force: true });
  syncPageInUrl('replaceState');
  BUSY_BLOCKS.forEach((id) => byId(id).setAttribute('aria-busy', 'false'));
}

const burgerButton = byId('burger');
const sidebar = byId('sidebar');
const isWideScreen = window.matchMedia('(min-width: 768px)');
const isMenuOpen = () => root.classList.contains('menu-open');

function setMenu(open, returnFocus = false) {
  root.classList.toggle('menu-open', open);
  burgerButton.setAttribute('aria-expanded', String(open));
  burgerButton.setAttribute('aria-label', open ? 'Закрыть меню' : 'Открыть меню');
  if (open) sidebar.querySelector('a').focus();
  else if (returnFocus) burgerButton.focus();
}

burgerButton.addEventListener('click', () => setMenu(!isMenuOpen(), true));
byId('overlay').addEventListener('click', () => setMenu(false, true));
sidebar.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && isMenuOpen()) setMenu(false, true); });
isWideScreen.addEventListener('change', (event) => { if (event.matches && isMenuOpen()) setMenu(false); });

initTheme();

const navLinks = [...sidebar.querySelectorAll('a[href^="#"]')];
const sectionObserver = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (!entry.isIntersecting) continue;
    navLinks.forEach((link) => link.removeAttribute('aria-current'));
    sidebar.querySelector(`a[href="#${entry.target.id}"]`)?.setAttribute('aria-current', 'true');
  }
}, { rootMargin: '-30% 0px -60% 0px' });
document.querySelectorAll('main section[id]').forEach((section) => sectionObserver.observe(section));

readFilters();
finishLoading();