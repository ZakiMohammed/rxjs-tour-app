const navigation = document.getElementById('navigation');

const title = '🍦RxJS';
const links = [
  { title: 'Home', href: '/index.html' },
  {
    title: 'Operators',
    href: '',
    dropdowns: [
      { title: 'of-from', href: '/pages/of-from.html' },
      { title: 'fromEvent', href: '/pages/fromEvent.html' },
      { title: 'timer', href: '/pages/timer.html' },
      { title: 'interval', href: '/pages/interval.html' },
    ],
  },
];

navigation.innerHTML += `
<ul>
  <li><strong>${title}</strong></li>
</ul>
<ul>
  ${links.map(link => {
    if (link.dropdowns) {
      return `
        <li>
          <details role="list">
            <summary aria-haspopup="listbox">${link.title}</summary>
            <ul role="listbox">
              ${link.dropdowns.map(
                dropdown =>
                  `<li><a href="${dropdown.href}">${dropdown.title}</a></li>`
              ).join('')}
            </ul>
          </details>
        </li>`;
    }
    return `<li><a href="${link.href}">${link.title}</a></li>`;
  }).join('')}
</ul>`;
