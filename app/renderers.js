export function renderToTag(tag, content) {
    const container = document.getElementsByTagName(tag)[0];
    container.innerHTML = `${content}`;
}

export function renderToTarget(target, content) {
    const container = document.querySelector(target);
    container.innerHTML = `${content}`;
}
