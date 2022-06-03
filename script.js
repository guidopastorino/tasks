const $tasksToDo = document.querySelectorAll('td')
console.log($tasksToDo)

$tasksToDo.forEach((element) => {
    element.addEventListener('click', () => {
        element.classList.toggle('bg-green')
    })
})